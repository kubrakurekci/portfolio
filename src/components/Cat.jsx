import { useEffect, useRef } from "react";
import "../components/Cat.css";
function Cat() {
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);
  const leftPupilRef = useRef(null);
  const rightPupilRef = useRef(null);

  useEffect(() => {
    const movePupil = (pupil, eye, event) => {
      if (!pupil || !eye) return;

      const rect = eye.getBoundingClientRect();

      const eyeX = rect.left + rect.width / 2;
      const eyeY = rect.top + rect.height / 2;

      const angle = Math.atan2(
        event.clientY - eyeY,
        event.clientX - eyeX
      );

      const distance = rect.width / 2.4;

      const x =
        Math.cos(angle) * distance +
        (Math.random() - 0.5) * 1.2;

      const y =
        Math.sin(angle) * distance +
        (Math.random() - 0.5) * 1.2;

      pupil.style.transform = `
        translate(-50%, -50%) translate(${x}px, ${y}px)
      `;
    };

    const handleMouseMove = (event) => {
      movePupil(leftPupilRef.current, leftEyeRef.current, event);
      movePupil(rightPupilRef.current, rightEyeRef.current, event);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="container-cat">
      <div className="cat">
        <div className="whiskers"></div>

        <div className="face">
          <div className="eyes">
            <div className="eye" ref={leftEyeRef}>
              <div className="pupil" ref={leftPupilRef}></div>
            </div>
            <div className="eye" ref={rightEyeRef}>
              <div className="pupil" ref={rightPupilRef}></div>
            </div>
          </div>

          <div className="ear-l"></div>
          <div className="ear-r"></div>
        </div>

        <div className="tag"></div>
        <div className="tail"></div>
      </div>
    </div>
  );
}

export default Cat;
