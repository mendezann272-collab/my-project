import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import PaymentServices from "../components/PaymentServices";
import PopularBusinesses from "../components/PopularBusinesses";
import CategoriesCarousel from "../components/CategoriesCarousel";
import EmptyState from "../components/EmptyState";

const Payments = () => {
  const { t } = useLang();

  return (
    <div className="py-8 md:py-10 px-4" style={{ backgroundColor: "var(--jcc-bg)" }}>
      <div className="mx-auto max-w-[1290px] bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.05)] border border-gray-100 p-6 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          {/* left column */}
          <div>
            <PaymentServices />

            <div className="mt-10">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-bold text-[color:var(--jcc-ink)]">{t("pay.repayment")}</h2>
                <div className="flex items-center gap-2">
                  <button aria-label="Previous" className="grid place-items-center w-8 h-8 rounded-lg border border-gray-200 text-gray-300">
                    <ChevronLeft size={16} />
                  </button>
                  <button aria-label="Next" className="grid place-items-center w-8 h-8 rounded-lg border border-gray-200 text-gray-300">
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
              <EmptyState title={t("empty.noTransactions")} subtitle={t("empty.recentAppear")} />
            </div>
          </div>

          {/* right column */}
          <div>
            <PopularBusinesses />
          </div>
        </div>

        <div className="mt-12 pt-2">
          <CategoriesCarousel />
        </div>
      </div>
    </div>
  );
};

export default Payments;
