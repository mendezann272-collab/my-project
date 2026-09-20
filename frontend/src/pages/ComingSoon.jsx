import React from "react";
import { Construction } from "lucide-react";
import { useLang } from "../context/LanguageContext";

const ComingSoon = () => {
  const { t } = useLang();
  return (
    <div className="py-10 px-4" style={{ backgroundColor: "var(--jcc-bg)" }}>
      <div className="mx-auto max-w-[1290px] bg-white rounded-2xl border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.05)] min-h-[420px] flex flex-col items-center justify-center text-center px-6">
        <Construction size={56} strokeWidth={1.3} className="text-gray-300 mb-4" />
        <h1 className="text-2xl font-bold text-[color:var(--jcc-ink)]">{t("coming.title")}</h1>
        <p className="mt-2 text-[color:var(--jcc-gray)]">{t("coming.sub")}</p>
      </div>
    </div>
  );
};

export default ComingSoon;
