import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, ChevronDown, Search, Heart, User, X } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { useAuth } from "../context/AuthContext";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "./ui/dropdown-menu";

const Logo = ({ to }) => (
  <Link to={to} className="flex items-center select-none" aria-label="JCCsmart home">
    <span className="flex items-center gap-[3px]">
      {["J", "C", "C"].map((l, i) => (
        <span
          key={i}
          className="flex items-center justify-center w-[26px] h-[26px] rounded-[3px] text-white font-extrabold text-[18px] leading-none"
          style={{ backgroundColor: "var(--jcc-green)", fontFamily: "var(--font-head)" }}
        >
          {l}
        </span>
      ))}
    </span>
    <span className="ml-2 text-[22px] font-normal" style={{ color: "#9a9aa4", fontFamily: "var(--font-head)" }}>
      smart
    </span>
  </Link>
);

const Header = () => {
  const { t, lang, toggleLang } = useLang();
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const LangBtn = ({ className = "" }) => (
    <button
      onClick={toggleLang}
      className={`flex items-center gap-1 text-[15px] font-semibold text-[color:var(--jcc-ink)] hover:text-[color:var(--jcc-red)] transition-colors ${className}`}
      aria-label="Change language"
    >
      {lang === "en" ? "EL" : "EN"}
      <ChevronDown size={15} />
    </button>
  );

  /* ---------- GUEST HEADER (before login) ---------- */
  if (!isAuthenticated) {
    return (
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-[0_1px_10px_rgba(0,0,0,0.04)]">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <div className="flex h-[68px] items-center justify-between">
            <Logo to="/" />

            <div className="hidden md:flex items-center gap-6">
              <Link
                to="/businesses"
                className={`text-[15px] font-semibold transition-colors hover:text-[color:var(--jcc-red)] ${
                  location.pathname === "/businesses" ? "text-[color:var(--jcc-red)]" : "text-[color:var(--jcc-ink)]"
                }`}
              >
                {t("nav.businesses")}
              </Link>
              <LangBtn />
              <Link
                to="/login"
                className="inline-flex items-center rounded-full px-6 h-10 border-2 text-[15px] font-semibold transition-colors hover:bg-[color:var(--jcc-red)] hover:text-white"
                style={{ borderColor: "var(--jcc-red)", color: "var(--jcc-red)" }}
              >
                {t("nav.login")}
              </Link>
              <Button
                onClick={() => navigate("/register")}
                className="rounded-full px-6 h-10 text-white font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "var(--jcc-red)" }}
              >
                {t("nav.register")}
              </Button>
            </div>

            <div className="flex md:hidden items-center gap-3">
              <LangBtn />
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <button className="p-2 -mr-2" aria-label="Open menu"><Menu size={26} /></button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px] p-0">
                  <div className="flex items-center justify-between px-5 h-[68px] border-b">
                    <Logo to="/" />
                    <button onClick={() => setOpen(false)} aria-label="Close"><X size={22} /></button>
                  </div>
                  <nav className="flex flex-col gap-1 px-5 py-6">
                    <Link to="/businesses" onClick={() => setOpen(false)} className="py-3 text-[16px] font-semibold border-b border-gray-100">
                      {t("nav.businesses")}
                    </Link>
                    <Link to="/login" onClick={() => setOpen(false)} className="py-3 text-[16px] font-semibold border-b border-gray-100">
                      {t("nav.login")}
                    </Link>
                    <Button
                      onClick={() => { setOpen(false); navigate("/register"); }}
                      className="mt-4 rounded-full h-11 text-white font-semibold"
                      style={{ backgroundColor: "var(--jcc-red)" }}
                    >
                      {t("nav.register")}
                    </Button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    );
  }

  /* ---------- LOGGED-IN HEADER ---------- */
  const navItems = [
    { to: "/dashboard", label: t("nav.home") },
    { to: "/payments", label: t("nav.payments") },
    { to: "/activity", label: t("nav.activity") },
    { to: "/myjcc", label: t("nav.myjcc") },
    { to: "/businesses", label: t("nav.businesses") }
  ];
  const isActive = (to) => location.pathname === to;
  const doLogout = () => { logout(); setTimeout(() => navigate("/", { replace: true }), 0); };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="mx-auto max-w-[1290px] px-4 md:px-6">
        <div className="flex h-[68px] items-center justify-between gap-4">
          <Logo to="/dashboard" />

          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`relative text-[15px] font-semibold transition-colors hover:text-[color:var(--jcc-red)] ${
                  isActive(item.to) ? "text-[color:var(--jcc-red)]" : "text-[color:var(--jcc-ink)]"
                }`}
              >
                {item.label}
                {isActive(item.to) && (
                  <span className="absolute -bottom-[6px] left-0 right-0 h-[2px] rounded" style={{ backgroundColor: "var(--jcc-red)" }} />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <button className="text-[color:var(--jcc-ink)] hover:text-[color:var(--jcc-red)] transition-colors" aria-label="Search"><Search size={20} /></button>
            <button className="text-[color:var(--jcc-ink)] hover:text-[color:var(--jcc-red)] transition-colors" aria-label="Favorites"><Heart size={20} /></button>
            <LangBtn />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 rounded-full border border-gray-200 px-4 h-9 text-[14px] font-semibold text-[color:var(--jcc-ink)] hover:border-[color:var(--jcc-red)] transition-colors">
                  <User size={16} />
                  {t("nav.account")}
                  <ChevronDown size={14} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={() => navigate("/dashboard")}>{t("account.profile")}</DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/myjcc")}>My JCC</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={doLogout}>{t("account.logout")}</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex lg:hidden items-center gap-3">
            <button className="text-[color:var(--jcc-ink)]" aria-label="Search"><Search size={20} /></button>
            <LangBtn />
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button className="p-2 -mr-2" aria-label="Open menu"><Menu size={26} /></button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] p-0">
                <div className="flex items-center justify-between px-5 h-[68px] border-b">
                  <Logo to="/dashboard" />
                  <button onClick={() => setOpen(false)} aria-label="Close"><X size={22} /></button>
                </div>
                <nav className="flex flex-col px-5 py-4">
                  {navItems.map((item) => (
                    <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="py-3 text-[16px] font-semibold border-b border-gray-100">
                      {item.label}
                    </Link>
                  ))}
                  <button onClick={() => { setOpen(false); doLogout(); }} className="py-3 text-left text-[16px] font-semibold" style={{ color: "var(--jcc-red)" }}>
                    {t("account.logout")}
                  </button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
