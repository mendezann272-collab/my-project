import React, { useMemo, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { categories, trendingBusinesses } from "../mock/data";
import { useToast } from "../hooks/use-toast";
import CategoryBusinesses from "./CategoryBusinesses";

// Build a mock businesses list: trending + a couple generated per category
const allBusinesses = (() => {
  const list = trendingBusinesses.map((b, i) => ({
    id: b.id,
    name: b.name,
    logo: b.logo,
    categoryId: categories[i % categories.length].id
  }));
  categories.forEach((c) => {
    for (let k = 1; k <= 2; k++) {
      list.push({
        id: c.id * 100 + k,
        name: { en: `${c.name.en.split(",")[0]} \u2014 Service ${k}`, gr: `${c.name.gr.split(",")[0]} \u2014 \u03a5\u03c0\u03b7\u03c1\u03b5\u03c3\u03af\u03b1 ${k}` },
        logo: c.image,
        categoryId: c.id
      });
    }
  });
  return list;
})();

const Businesses = () => {
  const { t, tr, lang } = useLang();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [params, setParams] = useSearchParams();

  const initialCat = params.get("categoryId") ? Number(params.get("categoryId")) : null;
  const initialQ = params.get("q") || "";

  const [activeCat, setActiveCat] = useState(initialCat);
  const [query, setQuery] = useState(initialQ);

  const selectCat = (id) => {
    setActiveCat(id);
    const p = new URLSearchParams(params);
    if (id) p.set("categoryId", String(id));
    else p.delete("categoryId");
    setParams(p);
  };

  const filtered = useMemo(() => {
    return allBusinesses.filter((b) => {
      const matchCat = activeCat ? b.categoryId === activeCat : true;
      const matchQ = query
        ? tr(b.name).toLowerCase().includes(query.toLowerCase())
        : true;
      return matchCat && matchQ;
    });
  }, [activeCat, query, tr]);

  // Full real clone for Municipalities & Community Councils
  if (initialCat === 2) {
    return <CategoryBusinesses />;
  }

  return (
    <div className="bg-white">
      {/* header band */}
      <div style={{ background: "linear-gradient(135deg,#fdf2f3 0%,#f7f8fb 100%)" }}>
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 py-10 md:py-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[color:var(--jcc-ink)]">
            {t("businesses.title")}
          </h1>
          <div className="mt-6 relative max-w-2xl bg-white rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center pl-5 pr-2 h-14">
            <Search size={20} className="text-[color:var(--jcc-gray)] shrink-0" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("businesses.searchPlaceholder")}
              className="flex-1 bg-transparent outline-none px-3 text-[15px] text-[color:var(--jcc-ink)] placeholder:text-[color:var(--jcc-gray)]"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-4 md:px-6 py-10">
        {/* category chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => selectCat(null)}
            className={`px-4 h-9 rounded-full text-sm font-semibold border transition-colors ${
              !activeCat ? "text-white border-transparent" : "text-[color:var(--jcc-ink)] border-gray-200 hover:border-[color:var(--jcc-red)]"
            }`}
            style={!activeCat ? { backgroundColor: "var(--jcc-red)" } : {}}
          >
            {t("businesses.all")}
          </button>
          {categories.slice(0, 16).map((c) => (
            <button
              key={c.id}
              onClick={() => selectCat(c.id)}
              className={`px-4 h-9 rounded-full text-sm font-semibold border transition-colors ${
                activeCat === c.id ? "text-white border-transparent" : "text-[color:var(--jcc-ink)] border-gray-200 hover:border-[color:var(--jcc-red)]"
              }`}
              style={activeCat === c.id ? { backgroundColor: "var(--jcc-red)" } : {}}
            >
              {tr(c.name).split(",")[0].split("&")[0].trim()}
            </button>
          ))}
        </div>

        <p className="text-sm text-[color:var(--jcc-gray)] mb-5">
          {filtered.length} {t("businesses.results")}
        </p>

        {filtered.length === 0 ? (
          <p className="text-center text-[color:var(--jcc-gray)] py-16">{t("businesses.empty")}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((b) => (
              <div
                key={b.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.05)] p-5 flex items-center gap-4 hover:shadow-[0_10px_24px_rgba(0,0,0,0.09)] transition-shadow"
              >
                <div className="h-14 w-14 shrink-0 flex items-center justify-center rounded-xl bg-gray-50">
                  <img
                    src={b.logo}
                    alt=""
                    className="max-h-12 max-w-12 object-contain"
                    loading="lazy"
                    onError={(e) => { e.currentTarget.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48'><rect width='48' height='48' rx='8' fill='%23eef0f3'/></svg>"; }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[color:var(--jcc-ink)] leading-snug line-clamp-2">{tr(b.name)}</p>
                </div>
                <button
                  onClick={() => toast({ title: t("toast.success"), description: t("toast.demo") })}
                  className="shrink-0 rounded-full px-4 h-9 text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "var(--jcc-red)" }}
                >
                  {t("businesses.pay")}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Businesses;
