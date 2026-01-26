import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useTranslation } from "react-i18next";

function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const { t, i18n } = useTranslation();
  const ctxRef = useRef(null);

  useEffect(() => {
    ctxRef.current = gsap.context(() => {
      if (titleRef.current) {
        const titleText = titleRef.current.textContent || '';
        const titleWords = titleText.split(' ');
        titleRef.current.innerHTML = '';
        titleWords.forEach((word, index) => {
          const span = document.createElement('span');
          span.style.display = 'inline-block';
          span.style.opacity = '0';
          span.style.transform = 'translateX(-50px)';
          span.textContent = word;
          titleRef.current.appendChild(span);

          if (index < titleWords.length - 1) {
            const space = document.createTextNode(' ');
            titleRef.current.appendChild(space);
          }
        });

        const titleSpans = titleRef.current.querySelectorAll('span');
        if (titleSpans.length > 0) {
          gsap.to(titleSpans, {
            x: 0,
            opacity: 1,
            stagger: 0.05,
            duration: 0.8,
            ease: "power3.out",
          });
        }
      }
      if (subtitleRef.current) {
        const subtitleText = subtitleRef.current.textContent || '';
        const subtitleWords = subtitleText.split(' ');
        subtitleRef.current.innerHTML = '';
        subtitleWords.forEach((word, index) => {
          const span = document.createElement('span');
          span.style.display = 'inline-block';
          span.style.opacity = '0';
          span.style.transform = 'translateX(-50px)';
          span.textContent = word;
          subtitleRef.current.appendChild(span);
          if (index < subtitleWords.length - 1) {
            const space = document.createTextNode(' ');
            subtitleRef.current.appendChild(space);
          }
        });
        const subtitleSpans = subtitleRef.current.querySelectorAll('span');
        if (subtitleSpans.length > 0) {
          gsap.to(subtitleSpans, {
            x: 0,
            opacity: 1,
            stagger: 0.05,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.3,
          });
        }
      }
    });
    
    return () => {
      if (ctxRef.current) {
        ctxRef.current.revert();
      }
    };
  }, [i18n.language]);

  return (
    <div className="hero-text text-xl text-white text-center">
      <h1 ref={titleRef} className="text-5xl font-bold mb-4">
        {t("hero.title")}
      </h1>
      <p ref={subtitleRef} className="text-2xl">
        {t("hero.subtitle")}
      </p>
    </div>
  );
}

export default Hero;