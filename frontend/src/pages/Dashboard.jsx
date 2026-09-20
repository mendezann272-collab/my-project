import React from "react";
import { CreditCard, Landmark, ChevronLeft, ChevronRight, Receipt, BarChart3, CalendarClock } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../hooks/use-toast";
import PromoBanner from "../components/PromoBanner";
import CategoriesCarousel from "../components/CategoriesCarousel";
import EmptyState from "../components/EmptyState";

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-2xl shadow-[0_2px_16px_rgba(0,0,0,0.05)] border border-gray-100 p-5 ${className}`}>
    {children}
  </div>
);

const Dashboard = () => {
  const { t } = useLang();
  const { user } = useAuth();
  const { toast } = useToast();
  const demo = () => toast({ title: t("toast.success"), description: t("toast.demo") });
  const name = (user && user.name ? user.name : "MAMA").toUpperCase();

  return (
    <div className="py-8 md:py-10 px-4" style={{ backgroundColor: "var(--jcc-bg)" }}>
      <div className="mx-auto max-w-[1290px]">
        {/* welcome header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-2xl md:text-[28px] font-bold text-[color:var(--jcc-ink)]">
            {t("dash.welcome")} <span className="font-extrabold">{name}</span>!
          </h1>
          <div className="flex items-center gap-5">
            <button onClick={demo} className="flex items-center gap-2 text-[14px] font-semibold text-[color:var(--jcc-ink)] hover:text-[color:var(--jcc-red)] transition-colors">
              <CreditCard size={18} style={{ color: "var(--jcc-green)" }} />
              {t("dash.addCard")}
            </button>
            <button onClick={demo} className="flex items-center gap-2 text-[14px] font-semibold text-[color:var(--jcc-ink)] hover:text-[color:var(--jcc-red)] transition-colors">
              <Landmark size={18} style={{ color: "var(--jcc-green)" }} />
              {t("dash.addAccount")}
            </button>
          </div>
        </div>

        {/* top grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="lg:col-span-6">
            <PromoBanner />
          </div>

          <Card className="lg:col-span-3">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-[16px] font-bold text-[color:var(--jcc-ink)]">{t("pay.repayment")}</h3>
              <div className="flex items-center gap-1.5">
                <button aria-label="Previous" className="grid place-items-center w-7 h-7 rounded-md border border-gray-200 text-gray-300"><ChevronLeft size={14} /></button>
                <button aria-label="Next" className="grid place-items-center w-7 h-7 rounded-md border border-gray-200 text-gray-300"><ChevronRight size={14} /></button>
              </div>
            </div>
            <EmptyState compact title={t("empty.noTransactions")} subtitle={t("empty.recentAppear")} />
          </Card>

          <Card className="lg:col-span-3">
            <h3 className="text-[16px] font-bold text-[color:var(--jcc-ink)] mb-1">{t("dash.upcoming")}</h3>
            <EmptyState
              compact
              icon={<CalendarClock size={40} strokeWidth={1.4} />}
              title={t("dash.noReminders")}
            />
            <div className="flex justify-center">
              <button onClick={demo} className="text-[14px] font-semibold" style={{ color: "var(--jcc-red)" }}>{t("dash.add")}</button>
            </div>
          </Card>
        </div>

        {/* second grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
          <Card>
            <h3 className="text-[16px] font-bold text-[color:var(--jcc-ink)] mb-1">{t("dash.recent")}</h3>
            <EmptyState icon={<Receipt size={44} strokeWidth={1.3} />} title={t("dash.noRecent")} subtitle={t("dash.recentSub")} />
          </Card>

          <Card>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-[16px] font-bold text-[color:var(--jcc-ink)]">{t("dash.overview")}</h3>
              <div className="flex items-center gap-4">
                <button className="text-[13px] font-semibold" style={{ color: "var(--jcc-red)" }}>{t("dash.trackSpending")}</button>
                <span className="text-[13px] font-semibold text-[color:var(--jcc-gray)] border border-gray-200 rounded-full px-3 py-1">{t("dash.days30")}</span>
              </div>
            </div>
            <EmptyState icon={<BarChart3 size={44} strokeWidth={1.3} />} title={t("dash.noSpending")} subtitle={t("dash.noSpendingSub")} />
          </Card>
        </div>

        {/* categories */}
        <div className="mt-5">
          <Card className="p-6">
            <CategoriesCarousel />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
