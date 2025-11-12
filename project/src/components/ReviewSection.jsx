import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { collection, addDoc, query, where, orderBy, getDocs, serverTimestamp, doc, deleteDoc } from "firebase/firestore";
import { toast } from "sonner";
import { db } from "../firebase";

export function ReviewSection({ productId, reviews, rating, user }) {
  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState(5);
  const [reviewList, setReviewList] = useState(reviews || []);

  // 리뷰 불러오기
  useEffect(() => {
    const fetchReviews = async () => {
      const q = query(
        collection(db, "reviews"),
        where("productId", "==", productId),
        orderBy("createdAt", "desc")
      );
      const snapshot = await getDocs(q);
      setReviewList(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchReviews();
  }, [productId]);

  const handleSubmitReview = async () => {
    if (!user) {
      toast.error("로그인 후 작성할 수 있습니다.");
      return;
    }
    if (!newComment) {
      toast.error("리뷰 내용을 입력해주세요.");
      return;
    }
  const reviewData = {
    productId,
    userId: user.uid,
    content: newComment,
    author: user.name,
    rating: newRating,
    createdAt: serverTimestamp(),
  };


  const docRef = await addDoc(collection(db, "reviews"), reviewData);

      setReviewList([...reviewList, { ...reviewData, id: docRef.id }]);
      setNewComment("");
      setNewRating(5);
      toast.success("리뷰가 등록되었습니다!");
  };

  const handleDeleteReview = async (reviewId) => {
    try {
      const reviewDocRef = doc(db, "reviews", reviewId);
      await deleteDoc(reviewDocRef);
      setReviewList(reviewList.filter(r => r.id !== reviewId));
      toast.success("리뷰가 삭제되었습니다.");
    } catch (error) {
      console.error("리뷰 삭제 오류:", error);
      toast.error("리뷰 삭제에 실패했습니다.");
    }
  };

  return (
    <div>
      {/* 리뷰 작성 */}
      <div className="mb-6">
        <h3 className="mb-2">리뷰 작성</h3>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < newRating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
              }`}
              onClick={() => setNewRating(i + 1)}
            />
          ))}
        </div>
        <textarea
          className="w-full border p-2 rounded mb-2"
          rows={3}
          placeholder="리뷰를 작성해주세요."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={handleSubmitReview} className="px-4 py-2 bg-blue-600 text-white rounded">
          등록
        </button>
      </div>

      {/* 리뷰 리스트 */}
      <div>
        {reviewList && reviewList.length === 0 ? (
          <div className="text-gray-500">등록된 리뷰가 없습니다.</div>
        ) : (
          reviewList.map((r) => (
            <div key={r.id} className="border-b py-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold">{r.author}</span>
                <span className="text-gray-500 text-sm">{r.createdAt?.toDate ? r.createdAt.toDate().toLocaleString() : ""}</span>
                {user?.uid === r.userId && (
                  <button
                    onClick={() => handleDeleteReview(r.id)}
                    className="ml-2 text-red-500 hover:text-red-700 transition-colors"
                    title="리뷰 삭제"
                  >
                    삭제
                  </button>
                )}
              </div>
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < r.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                  />
                ))}
              </div>
              <div>{r.content}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}