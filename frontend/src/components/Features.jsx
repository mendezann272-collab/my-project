import React from "react";
import { useNavigate } from "react-router-dom";
import { useLang } from "../context/LanguageContext";
import { features } from "../mock/data";
import { Button } from "./ui/button";

const Features = () => {
  const { t, tr } = useLang();
  const navigate = useNavigate();

  return (
    <section className="py-14 md:py-20" style={{ backgroundColor: "var(--jcc-bg)" }}>
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[color:var(--jcc-ink)] mb-12">
          {t("simplify.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((f) => (
            <div
              key={f.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_14px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col hover:shadow-[0_12px_30px_rgba(0,0,0,0.09)] transition-shadow duration-300"
            >
              <div className="h-44 w-full overflow-hidden">
                <img
                  src={f.image}
                  alt={tr(f.title)}
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-7 flex flex-col items-center text-center flex-1">
                <h3 className="text-lg font-bold text-[color:var(--jcc-ink)] leading-snug">{tr(f.title)}</h3>
                {tr(f.text) && (
                  <p className="mt-3 text-[15px] text-[color:var(--jcc-gray)] leading-relaxed">{tr(f.text)}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button
            onClick={() => navigate("/register")}
            className="rounded-full px-9 h-12 text-white text-base font-semibold hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "var(--jcc-red)" }}
          >
            {t("simplify.cta")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
