import { useState } from "react";
import { Link } from "react-router";
import CTABand from "../components/CTABand";

const plans = [
  {
    name: "Free",
    price: { ngn: "₦0", usd: "$0" },
    period: "forever",
    desc: "Everything you need to get started, with no time limit.",
    cta: "Download for free",
    ctaHref: "/download",
    primary: false,
    features: [
      "Unlimited meeting notes",
      "30-day transcript history",
      "Auto meeting detection",
      "Google & Outlook calendar sync",
      "One-click summaries",
      "Mac, Windows & Linux",
    ],
  },
  {
    name: "Pro",
    price: { ngn: "₦15,000", usd: "~$10" },
    period: "per month",
    desc: "For professionals who need unlimited history, follow-ups, and priority support.",
    cta: "Start Pro — free trial",
    ctaHref: "/download",
    primary: true,
    features: [
      "Everything in Free",
      "Unlimited transcript history",
      "AI follow-up email drafts",
      "Action item tracking across meetings",
      "WhatsApp-friendly exports",
      "Priority support",
      "Early access to new features",
    ],
  },
  {
    name: "Enterprise",
    price: { ngn: "Custom", usd: "Custom" },
    period: "per org",
    desc: "For teams that need admin controls, security guarantees, and local invoicing.",
    cta: "Talk to sales",
    ctaHref: "/enterprise",
    primary: false,
    features: [
      "Everything in Pro",
      "Team dashboard & admin controls",
      "SSO / SAML",
      "Custom data retention policies",
      "Dedicated account manager",
      "Naira / local currency invoicing",
      "SLA & uptime guarantees",
    ],
  },
];

const billingFaqs = [
  {
    q: "Can I pay in Naira or other African currencies?",
    a: "Yes. Pro plans are priced in Naira and payable via Paystack or Flutterwave. Enterprise customers can invoice in Naira, Cedis, Shillings, or Rand.",
  },
  {
    q: "Do I need a USD credit card?",
    a: "No. We accept local debit cards via Paystack and Flutterwave. No USD card required at any plan level.",
  },
  {
    q: "How does team billing work?",
    a: "Enterprise plans are billed per seat with a single team invoice. Team admins can add, remove, and manage seats from the dashboard.",
  },
  {
    q: "What happens at the end of the free trial?",
    a: "You stay on the Free plan automatically. We never charge without your explicit action.",
  },
];

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[rgba(27,20,15,0.08)] last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left">
        <span className="text-[15px] font-semibold text-[#1B140F] pr-4">{q}</span>
        <span className={`text-[#C9542C] text-[20px] font-light transition-transform shrink-0 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && <p className="text-[14px] text-[rgba(27,20,15,0.65)] leading-relaxed pb-5">{a}</p>}
    </div>
  );
}

export default function Pricing() {
  const [currency, setCurrency] = useState<"ngn" | "usd">("ngn");

  return (
    <div className="bg-[#FAF6F0]">
      <section className="max-w-[1280px] mx-auto px-6 pt-20 pb-16 text-center">
        <p className="text-[12px] font-semibold uppercase tracking-widest text-[#C9542C] mb-4">Pricing</p>
        <h1 className="font-[family-name:var(--font-display)] text-[52px] md:text-[64px] font-bold text-[#1B140F] leading-[1.08] tracking-tight mb-6">
          Priced for Africa.<br />Paid the African way.
        </h1>
        <p className="text-[17px] text-[rgba(27,20,15,0.6)] max-w-[480px] mx-auto mb-10 leading-relaxed">
          Free to start, local payment rails, no USD card required. Upgrade when you're ready.
        </p>

        {/* Currency toggle */}
        <div className="inline-flex items-center gap-1 p-1 bg-[#FDF9F4] border border-[rgba(27,20,15,0.1)] rounded-xl mb-12">
          {(["ngn", "usd"] as const).map((c) => (
            <button
              key={c}
              onClick={() => setCurrency(c)}
              className={`px-4 py-1.5 rounded-lg text-[13px] font-semibold transition-colors ${currency === c ? "bg-[#1B2A4A] text-[#FDF9F4]" : "text-[rgba(27,20,15,0.5)] hover:text-[#1B140F]"}`}
            >
              {c === "ngn" ? "₦ Naira" : "$ USD"}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-5 text-left">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 flex flex-col ${plan.primary ? "bg-[#1B2A4A] text-[#FDF9F4] ring-2 ring-[#C9542C] shadow-xl" : "bg-[#FDF9F4] border border-[rgba(27,20,15,0.1)]"}`}
            >
              {plan.primary && (
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#E8A94C] mb-4">Most popular</span>
              )}
              <p className={`text-[14px] font-bold uppercase tracking-wider mb-2 ${plan.primary ? "text-[rgba(253,249,244,0.55)]" : "text-[rgba(27,20,15,0.4)]"}`}>
                {plan.name}
              </p>
              <div className="mb-1">
                <span className={`text-[40px] font-bold font-[family-name:var(--font-display)] ${plan.primary ? "text-[#FDF9F4]" : "text-[#1B140F]"}`}>
                  {plan.price[currency]}
                </span>
              </div>
              <p className={`text-[13px] mb-2 ${plan.primary ? "text-[rgba(253,249,244,0.45)]" : "text-[rgba(27,20,15,0.4)]"}`}>{plan.period}</p>
              <p className={`text-[14px] mb-7 leading-relaxed ${plan.primary ? "text-[rgba(253,249,244,0.7)]" : "text-[rgba(27,20,15,0.6)]"}`}>{plan.desc}</p>
              <Link
                to={plan.ctaHref}
                className={`w-full text-center py-3 rounded-xl font-semibold text-[15px] transition-colors mb-8 ${plan.primary ? "bg-[#C9542C] text-[#FDF9F4] hover:bg-[#b84a24]" : "border border-[rgba(27,20,15,0.2)] text-[#1B140F] hover:bg-[rgba(27,20,15,0.04)]"}`}
              >
                {plan.cta}
              </Link>
              <ul className="flex flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" fill={plan.primary ? "rgba(232,169,76,0.25)" : "rgba(201,84,44,0.12)"}/>
                      <path d="M5 8l2.5 2.5L11 5.5" stroke={plan.primary ? "#E8A94C" : "#C9542C"} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className={`text-[14px] ${plan.primary ? "text-[rgba(253,249,244,0.8)]" : "text-[#1B140F]"}`}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Payment method logos */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <span className="text-[12px] text-[rgba(27,20,15,0.4)] uppercase tracking-widest">Accepted:</span>
          {["Paystack", "Flutterwave", "Mastercard", "Visa"].map((p) => (
            <span key={p} className="px-3 py-1.5 rounded-lg bg-[#FDF9F4] border border-[rgba(27,20,15,0.1)] text-[12px] font-semibold text-[rgba(27,20,15,0.6)]">{p}</span>
          ))}
        </div>
      </section>

      {/* Billing FAQ */}
      <section className="py-20 px-6 bg-[#FDF9F4]">
        <div className="max-w-[700px] mx-auto">
          <h2 className="font-[family-name:var(--font-display)] text-[32px] font-bold text-[#1B140F] mb-8 tracking-tight">Billing questions.</h2>
          {billingFaqs.map((f) => <FAQ key={f.q} {...f} />)}
        </div>
      </section>

      <CTABand />
    </div>
  );
}
