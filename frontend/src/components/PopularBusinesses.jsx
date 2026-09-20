import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, ChevronRight as ArrowRight } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { popularBusinesses } from "../mock/data";

const PER_PAGE = 5;

const PopularBusinesses = () => {
  const { t, tr } = useLang();
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(popularBusinesses.length / PER_PAGE);

  const go = (dir) => setPage((p) => (p + dir + totalPages) % totalPages);
  const items = popularBusinesses.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-[color:var(--jcc-ink)]">{t("pay.popular")}</h2>
        <div className="flex items-center gap-2">
          <button onClick={() => go(-1)} aria-label="Previous" className="grid place-items-center w-8 h-8 rounded-lg border border-gray-200 text-[color:var(--jcc-gray)] hover:text-[color:var(--jcc-red)] hover:border-[color:var(--jcc-red)] transition-colors">
            <ChevronLeft size={16} />
          </button>
          <button onClick={() => go(1)} aria-label="Next" className="grid place-items-center w-8 h-8 rounded-lg text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: "var(--jcc-red)" }}>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="divide-y divide-gray-100">
        {items.map((b) => (
          <button
            key={b.id}
            onClick={() => navigate("/businesses")}
            className="w-full flex items-center gap-4 py-3.5 text-left group"
          >
            <div className="h-11 w-11 shrink-0 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center overflow-hidden">
              <img
                src={b.logo}
                alt=""
                className="max-h-9 max-w-9 object-contain"
                loading="lazy"
                onError={(e) => { e.currentTarget.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='36' height='36'><circle cx='18' cy='18' r='18' fill='%23eef0f3'/></svg>"; }}
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[14px] font-semibold text-[color:var(--jcc-ink)] leading-snug line-clamp-1 group-hover:text-[color:var(--jcc-red)] transition-colors">{tr(b.name)}</p>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-[color:var(--jcc-gray)]">{tr(b.category)}</p>
            </div>
            <ArrowRight size={18} className="text-gray-300 group-hover:text-[color:var(--jcc-red)] transition-colors shrink-0" />
          </button>
        ))}
      </div>

      <div className="flex justify-center gap-1.5 mt-4">
        {Array.from({ length: Math.max(totalPages, 4) }).map((_, i) => (
          <span key={i} className="h-1.5 rounded-full transition-all" style={{ width: i === page ? 18 : 6, backgroundColor: i === page ? "var(--jcc-red)" : "#d4d6db" }} />
        ))}
      </div>
    </div>
  );
};

export default PopularBusinesses;
