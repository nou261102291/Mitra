import { useState } from "react";
import { Link } from "react-router";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-[#FAF6F0] min-h-[calc(100vh-64px)] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-[400px]">
        {/* Logo */}
        <div className="flex items-center gap-2.5 mb-10 justify-center">
          <div className="w-9 h-9 rounded-[11px] bg-[#88E788] flex items-center justify-center">
            <span className="text-[#1B140F] text-[15px] font-bold font-[family-name:var(--font-display)]">M</span>
          </div>
          <span className="text-[20px] font-bold text-[#1B140F] font-[family-name:var(--font-display)] tracking-tight">Mitra</span>
        </div>

        <div className="bg-[#FDF9F4] border border-[rgba(27,20,15,0.1)] rounded-2xl p-8 shadow-sm shadow-[rgba(27,20,15,0.04)]">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-[rgba(136,231,136,0.2)] flex items-center justify-center mx-auto mb-5">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                  <path d="M5 13l6 6L21 7" stroke="#1B2A4A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="font-[family-name:var(--font-display)] text-[22px] font-bold text-[#1B140F] mb-2">Check your inbox</h2>
              <p className="text-[15px] text-[rgba(27,20,15,0.6)] leading-relaxed">
                We sent a sign-in link to <strong>{email}</strong>. It expires in 10 minutes.
              </p>
            </div>
          ) : (
            <>
              <h1 className="font-[family-name:var(--font-display)] text-[26px] font-bold text-[#1B140F] mb-2">Sign in to Mitra</h1>
              <p className="text-[14px] text-[rgba(27,20,15,0.55)] mb-8 leading-relaxed">
                Enter your email and we'll send you a secure sign-in link.
              </p>

              {/* OAuth buttons */}
              <div className="flex flex-col gap-3 mb-6">
                {[
                  {
                    label: "Continue with Google",
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M17.64 9.2a10.1 10.1 0 0 0-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.62z" fill="#4285F4"/>
                        <path d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.8.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.7H.97v2.34A9 9 0 0 0 9 18z" fill="#34A853"/>
                        <path d="M3.97 10.72A5.41 5.41 0 0 1 3.69 9c0-.6.1-1.18.28-1.72V4.94H.97A9 9 0 0 0 0 9c0 1.45.35 2.82.97 4.06l3-2.34z" fill="#FBBC05"/>
                        <path d="M9 3.58c1.32 0 2.5.45 3.44 1.34l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 0 0 .97 4.94l3 2.34C4.68 5.16 6.66 3.58 9 3.58z" fill="#EA4335"/>
                      </svg>
                    ),
                  },
                  {
                    label: "Continue with Microsoft",
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <rect x="0" y="0" width="8.5" height="8.5" fill="#F25022"/>
                        <rect x="9.5" y="0" width="8.5" height="8.5" fill="#7FBA00"/>
                        <rect x="0" y="9.5" width="8.5" height="8.5" fill="#00A4EF"/>
                        <rect x="9.5" y="9.5" width="8.5" height="8.5" fill="#FFB900"/>
                      </svg>
                    ),
                  },
                ].map((btn) => (
                  <button
                    key={btn.label}
                    type="button"
                    className="w-full flex items-center justify-center gap-3 py-2.5 border border-[rgba(27,20,15,0.15)] rounded-xl text-[14px] font-medium text-[#1B140F] hover:bg-[rgba(27,20,15,0.03)] transition-colors"
                  >
                    {btn.icon}
                    {btn.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="flex-1 h-px bg-[rgba(27,20,15,0.1)]" />
                <span className="text-[12px] text-[rgba(27,20,15,0.35)] uppercase tracking-widest">or</span>
                <div className="flex-1 h-px bg-[rgba(27,20,15,0.1)]" />
              </div>

              <form onSubmit={handleSubmit}>
                <label className="block text-[13px] font-medium text-[#1B140F] mb-1.5">Email address</label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[rgba(27,20,15,0.15)] bg-[#FAF6F0] text-[#1B140F] text-[14px] placeholder:text-[rgba(27,20,15,0.3)] focus:outline-none focus:border-[#88E788] transition-colors mb-4"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-[#88E788] text-[#1B140F] font-semibold rounded-xl hover:bg-[#72d672] transition-colors"
                >
                  Send sign-in link
                </button>
              </form>

              <p className="mt-5 text-center text-[13px] text-[rgba(27,20,15,0.45)]">
                No account yet?{" "}
                <Link to="/download" className="font-medium text-[#1B2A4A] hover:text-[#88E788] transition-colors">
                  Download Mitra free →
                </Link>
              </p>
            </>
          )}
        </div>

        <p className="mt-6 text-center text-[12px] text-[rgba(27,20,15,0.35)]">
          By signing in you agree to our{" "}
          <Link to="/legal/terms" className="underline hover:text-[#1B140F] transition-colors">Terms</Link>
          {" "}and{" "}
          <Link to="/legal/privacy" className="underline hover:text-[#1B140F] transition-colors">Privacy Policy</Link>.
        </p>
      </div>
    </div>
  );
}
