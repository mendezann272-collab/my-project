import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../hooks/use-toast";

const UnderlineField = ({ label, type = "text", value, onChange, rightSlot }) => (
  <div className="relative">
    <label className="block text-[15px] text-[color:var(--jcc-gray)] mb-1">{label}</label>
    <div className="flex items-center border-b border-gray-300 focus-within:border-[color:var(--jcc-red)] transition-colors">
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="flex-1 bg-transparent outline-none py-2 text-[17px] text-[color:var(--jcc-ink)]"
      />
      {rightSlot}
    </div>
  </div>
);

const Login = () => {
  const { t } = useLang();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const canSubmit = email.trim().length > 0 && password.trim().length > 0;

  const submit = (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    const name = email.split("@")[0] || "MAMA";
    login({ name });
    toast({ title: t("toast.success"), description: t("toast.demo") });
    navigate("/dashboard");
  };

  return (
    <div className="py-10 md:py-14 px-4" style={{ backgroundColor: "var(--jcc-bg)" }}>
      <div className="mx-auto max-w-[1290px] bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.05)] border border-gray-100 px-6 py-14 md:py-20">
        <div className="mx-auto w-full max-w-[520px]">
          <h1 className="text-2xl md:text-[28px] font-bold text-center text-[color:var(--jcc-ink)] mb-14">
            {t("login.title")}
          </h1>

          <form onSubmit={submit} className="space-y-10">
            <UnderlineField
              label={t("login.email")}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div>
              <UnderlineField
                label={t("login.password")}
                type={show ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                rightSlot={
                  <button
                    type="button"
                    onClick={() => setShow((s) => !s)}
                    className="text-[color:var(--jcc-gray)] hover:text-[color:var(--jcc-ink)] p-1"
                    aria-label="Toggle password visibility"
                  >
                    {show ? <Eye size={20} /> : <EyeOff size={20} />}
                  </button>
                }
              />
              <div className="flex justify-end mt-3">
                <a href="#" className="text-[15px] font-semibold" style={{ color: "var(--jcc-red)" }}>
                  {t("login.forgot")}
                </a>
              </div>
            </div>

            <button
              type="submit"
              disabled={!canSubmit}
              className="w-full h-14 rounded-full text-white text-[17px] font-semibold transition-colors"
              style={{
                backgroundColor: canSubmit ? "var(--jcc-red)" : "#bcb0ec",
                cursor: canSubmit ? "pointer" : "not-allowed"
              }}
            >
              {t("login.button")}
            </button>
          </form>

          <p className="text-center text-[15px] text-[color:var(--jcc-gray)] mt-8">
            {t("login.noAccount")}{" "}
            <Link to="/register" className="font-semibold" style={{ color: "var(--jcc-red)" }}>
              {t("login.createOne")}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
