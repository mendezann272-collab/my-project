import React from "react";
import { useLang } from "../context/LanguageContext";

const PromoBanner = () => {
  const { t } = useLang();
  return (
    <div
      className="relative overflow-hidden rounded-2xl h-full min-h-[220px] flex"
      style={{ background: "linear-gradient(135deg, #4f8fe0 0%, #3f7fd6 55%, #356fc9 100%)" }}
    >
      <div className="relative z-10 p-6 md:p-7 flex flex-col justify-between max-w-[62%]">
        <div>
          <p className="text-white font-bold text-[17px] md:text-[20px] leading-snug">
            {t("banner.title")}
          </p>
        </div>
        <div className="mt-4">
          <span className="inline-block bg-white/95 text-[color:var(--jcc-ink)] rounded-full px-4 py-1.5 text-[13px] font-bold">
            {t("banner.sub")}
          </span>
          <p className="mt-2 text-white/80 text-[11px] underline cursor-pointer">{t("banner.terms")}</p>
        </div>
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-[45%]">
        <img
          src="https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwyfHxtb2JpbGUlMjBwYXltZW50fGVufDB8fHx8MTc4OTg4NDU2OXww&ixlib=rb-4.1.0&q=85"
          alt=""
          className="h-full w-full object-cover object-center"
          style={{ maskImage: "linear-gradient(to right, transparent, black 25%)", WebkitMaskImage: "linear-gradient(to right, transparent, black 25%)" }}
        />
      </div>
    </div>
  );
};

export default PromoBanner;
