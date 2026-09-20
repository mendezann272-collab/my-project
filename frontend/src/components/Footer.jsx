import React from "react";
import { Play, Apple, Grid2x2 } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { paymentLogos, appBadges, mastercardLogo } from "../mock/data";

const storeIcon = (store) => {
  if (store === "google") return <Play size={22} className="fill-current" />;
  if (store === "huawei") return <Grid2x2 size={22} />;
  return <Apple size={22} className="fill-current" />;
};

const Footer = () => {
  const { t } = useLang();

  const links = [
    { label: t("footer.contact"), href: "#" },
    { label: t("footer.about"), href: "#" },
    { label: t("footer.terms"), href: "#" },
    { label: t("footer.privacy"), href: "#" },
    { label: t("footer.security"), href: "#" }
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      {/* payment networks */}
      <div className="border-b border-gray-100">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 py-8">
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-5">
            {paymentLogos.map((logo) => (
              <img
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                title={logo.name}
                className="h-8 md:h-9 w-auto object-contain opacity-90"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>

      {/* app badges */}
      <div className="border-b border-gray-100">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 py-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {appBadges.map((badge) => (
              <a
                key={badge.name}
                href={badge.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl px-4 h-14 min-w-[172px] bg-[#1f2230] text-white hover:bg-black transition-colors"
              >
                <span className="shrink-0">{storeIcon(badge.store)}</span>
                <span className="flex flex-col leading-tight text-left">
                  <span className="text-[10px] uppercase tracking-wide opacity-80">{badge.label}</span>
                  <span className="text-[15px] font-semibold -mt-0.5">{badge.store_name}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 py-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-2 text-[color:var(--jcc-gray)] text-sm">
            <span>{t("footer.poweredBy")}</span>
            <img src={mastercardLogo} alt="Mastercard" className="h-6 w-auto" />
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-semibold text-[color:var(--jcc-ink)] hover:text-[color:var(--jcc-red)] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <p className="text-xs text-[color:var(--jcc-gray)] text-center">{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
