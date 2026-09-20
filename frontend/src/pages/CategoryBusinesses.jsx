import React, { useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLang } from "../context/LanguageContext";
import { categories } from "../mock/data";
import { municipalities } from "../mock/municipalities";
import { education } from "../mock/education";
import { PLACEHOLDER } from "../mock/municipalities";
import { useToast } from "../hooks/use-toast";

const DATASETS = { 2: municipalities, 18: education };

const letterOf = (name) => {
  const ch = (name || "").trim().charAt(0).toUpperCase();
  return /[A-Z]/.test(ch) ? ch : "#";
};

const sortLetters = (arr) =>
  arr.sort((a, b) => {
    if (a === "#") return 1;
    if (b === "#") return -1;
    return a.localeCompare(b);
  });

const CategoryStrip = ({ activeId }) => {
  const { tr } = useLang();
  const navigate = useNavigate();
  const ref = useRef(null);
  const scrollBy = (d) => ref.current && ref.current.scrollBy({ left: d * 320, behavior: "smooth" });
  return (
    <div className="relative">
      <button onClick={() => scrollBy(-1)} aria-label="Previous" className="hidden md:grid absolute -left-3 top-1/2 -translate-y-1/2 z-10 place-items-center w-9 h-9 rounded-full bg-white shadow-md text-[color:var(--jcc-gray)] hover:text-[color:var(--jcc-red)]">
        <ChevronLeft size={18} />
      </button>
      <div ref={ref} className="no-scrollbar flex gap-3 overflow-x-auto scroll-smooth pb-1 px-1">
        {categories.map((c) => {
          const active = c.id === activeId;
          return (
            <button
              key={c.id}
              onClick={() => navigate(`/businesses?categoryId=${c.id}`)}
              className={`shrink-0 w-[120px] h-[104px] rounded-2xl border p-3 flex flex-col items-center justify-center gap-2 text-center transition-all ${
                active ? "border-transparent text-white" : "bg-white border-gray-100 text-[color:var(--jcc-gray)] hover:-translate-y-1"
              }`}
              style={active ? { backgroundColor: "var(--jcc-red)" } : {}}
            >
              <img src={c.image} alt="" className={`h-9 w-9 object-contain ${active ? "brightness-0 invert" : ""}`} onError={(e) => (e.currentTarget.style.display = "none")} />
              <span className="text-[9px] font-bold uppercase leading-tight">{tr(c.name)}</span>
            </button>
          );
        })}
      </div>
      <button onClick={() => scrollBy(1)} aria-label="Next" className="hidden md:grid absolute -right-3 top-1/2 -translate-y-1/2 z-10 place-items-center w-9 h-9 rounded-full bg-white shadow-md text-[color:var(--jcc-gray)] hover:text-[color:var(--jcc-red)]">
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

const CategoryBusinesses = ({ categoryId = 2 }) => {
  const { t, tr } = useLang();
  const { toast } = useToast();
  const [query, setQuery] = useState("");

  const data = DATASETS[categoryId] || [];
  const cat = categories.find((c) => c.id === categoryId);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? data.filter((b) => b.name.toLowerCase().includes(q)) : data;
  }, [query, data]);

  const grouped = useMemo(() => {
    return filtered.reduce((acc, b) => {
      const l = letterOf(b.name);
      (acc[l] = acc[l] || []).push(b);
      return acc;
    }, {});
  }, [filtered]);

  const letters = useMemo(() => sortLetters(Object.keys(grouped)), [grouped]);

  const jumpTo = (letter) => {
    const el = document.getElementById(`letter-${letter}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="py-8 md:py-10 px-4" style={{ backgroundColor: "var(--jcc-bg)" }}>
      <div className="mx-auto max-w-[1200px] bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.05)] border border-gray-100 p-5 md:p-8">
        {/* Categories */}
        <h2 className="text-lg font-bold text-[color:var(--jcc-ink)] mb-4">{t("categories.title")}</h2>
        <CategoryStrip activeId={categoryId} />

        {/* selected category title */}
        <div className="flex items-center gap-3 mt-8 mb-5">
          {cat && <img src={cat.image} alt="" className="h-9 w-9 object-contain" onError={(e) => (e.currentTarget.style.display = "none")} />}
          <h1 className="text-xl md:text-2xl font-bold text-[color:var(--jcc-ink)]">{cat ? tr(cat.name) : t("businesses.title")}</h1>
        </div>

        {/* search */}
        <div className="relative max-w-xl mb-6 flex items-center h-12 rounded-full border border-gray-200 focus-within:border-[color:var(--jcc-red)] transition-colors px-4">
          <Search size={18} className="text-[color:var(--jcc-gray)] shrink-0" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("businesses.searchPlaceholder")}
            className="flex-1 bg-transparent outline-none px-3 text-[15px] text-[color:var(--jcc-ink)] placeholder:text-[color:var(--jcc-gray)]"
          />
        </div>

        <div className="flex gap-4">
          {/* business list */}
          <div className="flex-1 min-w-0">
            {letters.length === 0 && (
              <p className="text-center text-[color:var(--jcc-gray)] py-16">{t("businesses.empty")}</p>
            )}
            {letters.map((letter) => (
              <div key={letter} id={`letter-${letter}`} className="scroll-mt-24">
                <div className="sticky top-[68px] bg-white py-2 z-10">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-bold" style={{ backgroundColor: "var(--jcc-red)" }}>
                    {letter}
                  </span>
                </div>
                <ul className="divide-y divide-gray-100">
                  {grouped[letter].map((b, i) => (
                    <li key={b.id || b.name + i}>
                      <button
                        onClick={() => toast({ title: b.name, description: t("toast.demo") })}
                        className="w-full flex items-center gap-4 py-3 text-left group"
                      >
                        <div className="h-12 w-12 shrink-0 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center overflow-hidden">
                          <img
                            src={b.logo || PLACEHOLDER}
                            alt={b.name}
                            className="max-h-10 max-w-10 object-contain"
                            loading="lazy"
                            onError={(e) => { e.currentTarget.src = PLACEHOLDER; }}
                          />
                        </div>
                        <span className="flex-1 min-w-0 text-[15px] font-semibold text-[color:var(--jcc-ink)] leading-snug group-hover:text-[color:var(--jcc-red)] transition-colors">
                          {b.name}
                        </span>
                        <ChevronRight size={20} className="text-gray-300 group-hover:text-[color:var(--jcc-red)] transition-colors shrink-0" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* alphabet nav */}
          <nav className="shrink-0 sticky top-[76px] self-start flex flex-col items-center gap-0.5 max-h-[80vh]">
            {letters.map((l) => (
              <button
                key={l}
                onClick={() => jumpTo(l)}
                className="w-6 h-6 text-[12px] font-bold text-[color:var(--jcc-gray)] hover:text-white hover:bg-[color:var(--jcc-red)] rounded-full transition-colors"
              >
                {l}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default CategoryBusinesses;
