import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { categories, categoryGradients } from "../mock/data";

const CategoriesCarousel = () => {
  const { t, tr } = useLang();
  const navigate = useNavigate();
  const scrollerRef = useRef(null);
  const [page, setPage] = useState(0);
  const pages = 6;

  const scrollByCards = (dir) => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({ left: dir * 360, behavior: "smooth" });
    }
  };

  const onScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const ratio = max > 0 ? el.scrollLeft / max : 0;
    setPage(Math.round(ratio * (pages - 1)));
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="bg-white">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl md:text-2xl font-bold text-[color:var(--jcc-ink)]">{t("categories.title")}</h2>
        <div className="flex items-center gap-2">
          <button onClick={() => scrollByCards(-1)} aria-label="Previous" className="grid place-items-center w-9 h-9 rounded-full border border-gray-200 text-[color:var(--jcc-gray)] hover:text-[color:var(--jcc-red)] hover:border-[color:var(--jcc-red)] transition-colors">
            <ChevronLeft size={18} />
          </button>
          <button onClick={() => scrollByCards(1)} aria-label="Next" className="grid place-items-center w-9 h-9 rounded-full border border-gray-200 text-[color:var(--jcc-gray)] hover:text-[color:var(--jcc-red)] hover:border-[color:var(--jcc-red)] transition-colors">
            <ChevronRight size={18} />
          </button>
          <button onClick={() => navigate("/businesses")} className="ml-1 rounded-full px-4 h-9 text-[14px] font-semibold text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: "var(--jcc-red)" }}>
            {t("cat.more")}
          </button>
        </div>
      </div>

      <div ref={scrollerRef} className="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth pb-1">
        {categories.map((c, i) => {
          const [from, to] = categoryGradients[i % categoryGradients.length];
          return (
            <button
              key={c.id}
              onClick={() => navigate(`/businesses?categoryId=${c.id}`)}
              className="group relative shrink-0 w-[150px] h-[110px] rounded-2xl overflow-hidden text-left p-4 flex items-end hover:-translate-y-1 transition-transform duration-300"
              style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
            >
              <img
                src={c.image}
                alt=""
                className="absolute right-1 bottom-1 h-12 w-12 object-contain opacity-40 mix-blend-luminosity"
                loading="lazy"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
              <span className="relative z-10 text-white font-bold text-[11px] leading-tight uppercase drop-shadow-sm">
                {tr(c.name)}
              </span>
            </button>
          );
        })}
      </div>

      <div className="flex justify-center gap-1.5 mt-4">
        {Array.from({ length: pages }).map((_, i) => (
          <span key={i} className="h-1.5 rounded-full transition-all" style={{ width: i === page ? 18 : 6, backgroundColor: i === page ? "var(--jcc-red)" : "#d4d6db" }} />
        ))}
      </div>
    </section>
  );
};

export default CategoriesCarousel;
