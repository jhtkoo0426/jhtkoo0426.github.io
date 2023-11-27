import {
  useRef,
  useEffect
} from "react";

export function useHorizontalScroll() {
  const elRef = useRef();

  useEffect(() => {
     const el = elRef.current;

     if (el) {
        const onWheel = (e) => {
           if (e.deltaY === 0) return;

           // Check if horizontal scroll distance is greater than vertical
           if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
              e.preventDefault();
              el.scrollLeft += e.deltaX;
           }

           // Optionally, you can use smooth scrolling behavior
           // el.scrollTo({ left: el.scrollLeft + e.deltaX, behavior: "smooth" });
        };

        el.addEventListener("wheel", onWheel);

        return () => el.removeEventListener("wheel", onWheel);
     }
  }, []);

  return elRef;
}