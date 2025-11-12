import { useEffect } from "react";

export default function ScrollToTop({ currentPage }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return null;
}