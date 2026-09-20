import React, { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { heroSlides } from "../mock/data";

const HeroCarousel = () => {
  const { tr } = useLang();
  const [index, setIndex] = useState(0);
  const count = heroSlides.length;

  const go = useCallback((i) => setIndex((i + count) % count), [count]);
  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  useEffect(() => {
    const id = setInterval(() => setIndex((p) => (p + 1) % count), 6000);
    return () => clearInterval(id);
  }, [count]);

  return (
    <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg,#fdf2f3 0%,#f7f8fb 60%,#eef1f6 100%)" }}>
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="relative">
          {heroSlides.map((slide, i) => (
            <div
              key={slide.id}
              className={`${i === index ? "grid" : "hidden"} grid-cols-1 md:grid-cols-2 items-center gap-8 py-10 md:py-16 px-10 md:px-14 min-h-[360px] md:min-h-[420px]`}
            >
              <div className="order-2 md:order-1 jcc-fade-up">
                <h1 className="text-3xl md:text-[42px] leading-tight font-extrabold text-[color:var(--jcc-ink)]">
                  {tr(slide.title)}
                </h1>
                <p className="mt-4 text-base md:text-lg text-[color:var(--jcc-gray)] max-w-lg">
                  {tr(slide.text)}
                </p>
                {tr(slide.cta) && (
                  <button
                    className="mt-6 inline-flex items-center rounded-full px-7 h-11 text-white font-semibold hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "var(--jcc-red)" }}
                  >
                    {tr(slide.cta)}
                  </button>
                )}
              </div>
              <div className="order-1 md:order-2 flex justify-center jcc-fade-up">
                <img
                  src={slide.image}
                  alt={tr(slide.title)}
                  className="max-h-[220px] md:max-h-[320px] w-auto object-contain"
                  onError={(e) => { e.currentTarget.style.visibility = "hidden"; }}
                />
              </div>
            </div>
          ))}

          {/* arrows */}
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-0 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 rounded-full bg-white shadow-md text-[color:var(--jcc-ink)] hover:text-[color:var(--jcc-red)] transition-colors"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-0 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 rounded-full bg-white shadow-md text-[color:var(--jcc-ink)] hover:text-[color:var(--jcc-red)] transition-colors"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* dots */}
        <div className="flex justify-center gap-2 pb-6">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="h-2.5 rounded-full transition-all"
              style={{
                width: i === index ? 26 : 10,
                backgroundColor: i === index ? "var(--jcc-red)" : "#d4d6db"
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
