import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { trendingBusinesses } from "../mock/data";

const TrendingBusinesses = () => {
  const { t, tr } = useLang();
  const navigate = useNavigate();
  const scrollerRef = useRef(null);

  const scrollBy = (dir) => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({ left: dir * 320, behavior: "smooth" });
    }
  };

  return (
    <section className="py-14 md:py-16 bg-white">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="h-14 w-14 mb-3 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(226,0,26,0.10)" }}>
            <TrendingUp size={26} style={{ color: "var(--jcc-red)" }} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[color:var(--jcc-ink)]">{t("trending.title")}</h2>
          <p className="mt-2 text-[color:var(--jcc-gray)] max-w-xl">{t("trending.subtitle")}</p>
        </div>

        <div className="relative">
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Scroll left"
            className="hidden md:grid absolute -left-3 top-1/2 -translate-y-1/2 z-10 place-items-center w-10 h-10 rounded-full bg-white shadow-md text-[color:var(--jcc-ink)] hover:text-[color:var(--jcc-red)]"
          >
            <ChevronLeft size={22} />
          </button>

          <div
            ref={scrollerRef}
            className="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth pb-2 px-1"
          >
            {trendingBusinesses.map((b) => (
              <button
                key={b.id}
                onClick={() => navigate("/businesses")}
                className="group shrink-0 w-[150px] md:w-[168px] bg-white rounded-2xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.05)] p-5 flex flex-col items-center gap-3 hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(0,0,0,0.10)] transition-all duration-300"
              >
                <div className="h-16 w-16 flex items-center justify-center">
                  <img
                    src={b.logo}
                    alt={tr(b.name)}
                    className="max-h-16 max-w-16 object-contain"
                    loading="lazy"
                    onError={(e) => { e.currentTarget.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'><rect width='64' height='64' rx='10' fill='%23f0f0f3'/></svg>"; }}
                  />
                </div>
                <span className="text-[13px] font-semibold text-center leading-snug text-[color:var(--jcc-ink)] line-clamp-2 group-hover:text-[color:var(--jcc-red)] transition-colors">
                  {tr(b.name)}
                </span>
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollBy(1)}
            aria-label="Scroll right"
            className="hidden md:grid absolute -right-3 top-1/2 -translate-y-1/2 z-10 place-items-center w-10 h-10 rounded-full bg-white shadow-md text-[color:var(--jcc-ink)] hover:text-[color:var(--jcc-red)]"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingBusinesses;
