import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

function EducationTitle() {
  const textRef = useRef(null);
  const splitRef = useRef(null);

  useLayoutEffect(() => {
    if (!textRef.current) return;

    splitRef.current = new SplitText(textRef.current, {
      type: "lines",
    });

    gsap.set(textRef.current, { perspective: 800 });

    gsap.from(splitRef.current.lines, {
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      y: 60,
      opacity: 0,
      rotationX: -90,
      stagger: 0.15,
      duration: 1,
      ease: "power3.out",
    });

    return () => {
      splitRef.current?.revert();
    };
  }, []);

  return (
    <h1 ref={textRef} className="timeline-header playwrite-nz-basic">
      Eğitim
    </h1>
  );
}

export default EducationTitle;
