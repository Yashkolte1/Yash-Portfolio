import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const PRELOADER_NAME = "YASH KOLTE";

const Preloader = ({ isLoading, onComplete }) => {
  const hasAnimated = useRef(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    if (isLoading || hasAnimated.current) return;

    hasAnimated.current = true;

    const preloaderSvg = document.getElementById("preloaderSvg");
    const timeline = gsap.timeline();

    timeline
      .to(".preloader-heading .load-text, .preloader-heading", {
        delay: 1.5,
        y: -100,
        opacity: 0,
      })
      .to(preloaderSvg, {
        duration: 0.5,
        attr: { d: "M0 502S175 272 500 272s500 230 500 230V0H0Z" },
        ease: "power2.in",
      })
      .to(preloaderSvg, {
        duration: 0.5,
        attr: { d: "M0 2S175 1 500 1s500 1 500 1V0H0Z" },
        ease: "power2.out",
      })
      .to(".preloader", { y: -1500 })
      .to(".preloader", {
        zIndex: -1,
        display: "none",
        onComplete: () => onCompleteRef.current?.(),
      });

    return () => {
      timeline.kill();
    };
  }, [isLoading]);

  return (
    <div className="preloader">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path
          id="preloaderSvg"
          d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"
        />
      </svg>
      <div className="preloader-heading">
        <div className="load-text" aria-label={PRELOADER_NAME}>
          {PRELOADER_NAME.split("").map((letter, index) => (
            <span key={`${letter}-${index}`}>{letter}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preloader;
