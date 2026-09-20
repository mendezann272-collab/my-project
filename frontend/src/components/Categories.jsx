import React from "react";
import { useNavigate } from "react-router-dom";
import { useLang } from "../context/LanguageContext";
import { categories } from "../mock/data";

const Categories = () => {
  const { t, tr } = useLang();
  const navigate = useNavigate();

  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[color:var(--jcc-ink)] mb-10">
          {t("categories.title")}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => navigate(`/businesses?categoryId=${c.id}`)}
              className="group bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.04)] p-5 flex flex-col items-center gap-3 text-center hover:-translate-y-1 hover:border-[color:var(--jcc-red)]/30 hover:shadow-[0_10px_24px_rgba(0,0,0,0.09)] transition-all duration-300"
            >
              <div className="h-14 w-14 flex items-center justify-center">
                <img
                  src={c.image}
                  alt=""
                  className="max-h-14 max-w-14 object-contain transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='56' height='56'><rect width='56' height='56' rx='10' fill='%23f0f0f3'/></svg>"; }}
                />
              </div>
              <span className="text-[12px] font-bold uppercase tracking-wide leading-snug text-[color:var(--jcc-gray)] group-hover:text-[color:var(--jcc-red)] transition-colors">
                {tr(c.name)}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
