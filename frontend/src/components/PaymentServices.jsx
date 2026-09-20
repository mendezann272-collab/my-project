import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Zap, Smartphone, Wifi, Cross, GraduationCap, Bus, Building2, Landmark } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { paymentServices } from "../mock/data";

const ICONS = { Zap, Smartphone, Wifi, Cross, GraduationCap, Bus, Building2, Landmark };

const PaymentServices = () => {
  const { t, tr } = useLang();
  const navigate = useNavigate();
  const scrollerRef = useRef(null);

  const scrollByCards = (dir) => {
    if (scrollerRef.current) scrollerRef.current.scrollBy({ left: dir * 240, behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-[color:var(--jcc-ink)]">{t("pay.title")}</h2>
        <div className="flex items-center gap-2">
          <button onClick={() => scrollByCards(-1)} aria-label="Previous" className="grid place-items-center w-8 h-8 rounded-lg border border-gray-200 text-[color:var(--jcc-gray)] hover:text-[color:var(--jcc-red)] hover:border-[color:var(--jcc-red)] transition-colors">
            <ChevronLeft size={16} />
          </button>
          <button onClick={() => scrollByCards(1)} aria-label="Next" className="grid place-items-center w-8 h-8 rounded-lg border border-gray-200 text-[color:var(--jcc-gray)] hover:text-[color:var(--jcc-red)] hover:border-[color:var(--jcc-red)] transition-colors">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div ref={scrollerRef} className="no-scrollbar flex gap-3 overflow-x-auto scroll-smooth pb-1">
        {paymentServices.map((s) => {
          const Icon = ICONS[s.icon] || Zap;
          return (
            <button
              key={s.id}
              onClick={() => navigate("/businesses")}
              className="shrink-0 w-[92px] h-[92px] rounded-xl bg-[#f4f5f7] hover:bg-[#ecedf1] flex flex-col items-center justify-center gap-2 px-2 text-center transition-colors"
            >
              <Icon size={22} style={{ color: "var(--jcc-red)" }} />
              <span className="text-[11px] font-semibold text-[color:var(--jcc-ink)] leading-tight line-clamp-2">{tr(s.name)}</span>
            </button>
          );
        })}
      </div>
      <div className="flex justify-center gap-1.5 mt-3">
        <span className="h-1.5 w-4 rounded-full" style={{ backgroundColor: "var(--jcc-red)" }} />
        <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
      </div>
    </div>
  );
};

export default PaymentServices;
