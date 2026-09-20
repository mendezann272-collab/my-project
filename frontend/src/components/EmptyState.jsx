import React from "react";
import { useLang } from "../context/LanguageContext";

// A dashed loading-style circle used as the empty-state illustration
const DashedCircle = () => (
  <div className="relative h-14 w-14">
    <div className="absolute inset-0 rounded-full border-[3px] border-dashed border-gray-300" />
  </div>
);

const EmptyState = ({ title, subtitle, icon, compact = false }) => {
  return (
    <div className={`flex flex-col items-center justify-center text-center ${compact ? "py-8" : "py-12"}`}>
      <div className="mb-4 text-gray-300">{icon || <DashedCircle />}</div>
      <p className="text-[15px] font-semibold text-[color:var(--jcc-ink)]">{title}</p>
      {subtitle && <p className="mt-1 text-[13px] text-[color:var(--jcc-gray)] max-w-sm">{subtitle}</p>}
    </div>
  );
};

export default EmptyState;
