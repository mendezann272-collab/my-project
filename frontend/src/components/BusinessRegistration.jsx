import React from "react";
import { ArrowRight } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { businessImage } from "../mock/data";

const BusinessRegistration = () => {
  const { t } = useLang();

  return (
    <section className="py-14 md:py-20" style={{ backgroundColor: "var(--jcc-bg)" }}>
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div className="flex justify-center order-1">
            <img
              src={businessImage}
              alt={t("registration.title")}
              className="w-full max-w-[500px] h-[300px] object-cover rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.10)]"
              loading="lazy"
            />
          </div>
          <div className="order-2">
            <h2 className="text-2xl md:text-3xl font-bold text-[color:var(--jcc-ink)]">
              {t("registration.title")}
            </h2>
            <p className="mt-4 text-[color:var(--jcc-gray)] text-lg leading-relaxed max-w-md">
              {t("registration.text")}
            </p>
            <a
              href="https://www.jcc.com.cy/en/become-a-merchant/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full px-7 h-11 border-2 font-semibold transition-colors"
              style={{ borderColor: "var(--jcc-red)", color: "var(--jcc-red)" }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--jcc-red)"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "var(--jcc-red)"; }}
            >
              {t("registration.cta")}
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessRegistration;
