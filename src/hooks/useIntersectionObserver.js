import { useEffect, useRef, useState } from "react";

export default function useIntersectionObserver(opts) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    }, opts);
    observer.observe(ref.current);
  });

  return [isVisible, ref];
}
