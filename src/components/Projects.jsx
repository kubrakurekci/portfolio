import { useEffect, useRef } from "react";
import "./project.css";

function ProjectsCursorEffect() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const circle = document.createElement("span");
      circle.classList.add("projects-circle");

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;

      const size = Math.random() * 60;
      circle.style.width = `${20 + size}px`;
      circle.style.height = `${20 + size}px`;

      container.appendChild(circle);

      setTimeout(() => {
        circle.remove();
      }, 100);
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section ref={containerRef} className="projects-section">
      <div className="card-projects bg-base-100 shadow-sm">
        <figure>
          <img src="" alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Keeper</h2>
          <p>
            React'ın temel kavramlarını uygulamak için geliştirilmiş etkileşimli
            not alma web uygulaması.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">İncele</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsCursorEffect;
