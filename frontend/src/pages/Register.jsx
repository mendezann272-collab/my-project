import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLang } from "../context/LanguageContext";
import { useAuth } from "../context/AuthContext";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Checkbox } from "../components/ui/checkbox";
import { useToast } from "../hooks/use-toast";

const Register = () => {
  const { t } = useLang();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { login } = useAuth();
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", password: "", confirm: "", terms: false });

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    login({ name: form.firstName || form.email.split("@")[0] || "MAMA" });
    toast({ title: t("toast.success"), description: t("toast.demo") });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-14 px-4" style={{ backgroundColor: "var(--jcc-bg)" }}>
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100 p-8 md:p-10">
        <h1 className="text-2xl font-bold text-center text-[color:var(--jcc-ink)] mb-8">{t("register.title")}</h1>
        <form onSubmit={submit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="font-semibold">{t("register.firstName")}</Label>
              <Input required value={form.firstName} onChange={set("firstName")} className="h-12 rounded-xl" />
            </div>
            <div className="space-y-2">
              <Label className="font-semibold">{t("register.lastName")}</Label>
              <Input required value={form.lastName} onChange={set("lastName")} className="h-12 rounded-xl" />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="font-semibold">{t("register.email")}</Label>
            <Input type="email" required value={form.email} onChange={set("email")} className="h-12 rounded-xl" />
          </div>
          <div className="space-y-2">
            <Label className="font-semibold">{t("register.phone")}</Label>
            <Input type="tel" required value={form.phone} onChange={set("phone")} className="h-12 rounded-xl" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="font-semibold">{t("register.password")}</Label>
              <Input type="password" required value={form.password} onChange={set("password")} className="h-12 rounded-xl" />
            </div>
            <div className="space-y-2">
              <Label className="font-semibold">{t("register.confirm")}</Label>
              <Input type="password" required value={form.confirm} onChange={set("confirm")} className="h-12 rounded-xl" />
            </div>
          </div>
          <label className="flex items-center gap-2 text-sm text-[color:var(--jcc-gray)] cursor-pointer">
            <Checkbox id="terms" checked={form.terms} onCheckedChange={(v) => setForm({ ...form, terms: !!v })} required /> {t("register.terms")}
          </label>
          <Button type="submit" className="w-full h-12 rounded-full text-white font-semibold hover:opacity-90" style={{ backgroundColor: "var(--jcc-red)" }}>
            {t("register.button")}
          </Button>
        </form>
        <p className="text-center text-sm text-[color:var(--jcc-gray)] mt-6">
          {t("register.haveAccount")} <Link to="/login" className="font-semibold" style={{ color: "var(--jcc-red)" }}>{t("register.signIn")}</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
