import React from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import HeroCarousel from "../components/HeroCarousel";
import TrendingBusinesses from "../components/TrendingBusinesses";
import Features from "../components/Features";
import Categories from "../components/Categories";
import BusinessRegistration from "../components/BusinessRegistration";

const Home = () => {
  const { t } = useLang();
  const navigate = useNavigate();
  const [q, setQ] = React.useState("");

  const onSearch = (e) => {
    e.preventDefault();
    navigate(`/businesses${q ? `?q=${encodeURIComponent(q)}` : ""}`);
  };

  return (
    <div>
      <HeroCarousel />

      {/* search bar */}
      <div className="bg-white">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <form
            onSubmit={onSearch}
            className="-mt-7 md:-mt-8 relative z-10 mx-auto max-w-2xl bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.12)] border border-gray-100 flex items-center pl-6 pr-2 h-14 md:h-16"
          >
            <Search size={22} className="text-[color:var(--jcc-gray)] shrink-0" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t("search.placeholder")}
              className="flex-1 bg-transparent outline-none px-3 text-[15px] md:text-base text-[color:var(--jcc-ink)] placeholder:text-[color:var(--jcc-gray)]"
            />
            <button
              type="submit"
              className="rounded-full px-5 md:px-7 h-10 md:h-12 text-white font-semibold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "var(--jcc-red)" }}
            >
              {t("search.button")}
            </button>
          </form>
        </div>
      </div>

      <TrendingBusinesses />
      <Features />
      <Categories />
      <BusinessRegistration />
    </div>
  );
};

export default Home;
