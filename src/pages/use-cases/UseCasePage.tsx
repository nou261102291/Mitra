import { Link } from "react-router";
import CTABand from "../../components/CTABand";
import {
  FoundersIllustration,
  SalesIllustration,
  ConsultantsIllustration,
  NGOIllustration,
} from "../../components/illustrations/PersonaIllustrations";

interface UseCaseConfig {
  role: string;
  headline: string;
  subtext: string;
  pains: { pain: string; solution: string }[];
  testimonial: { quote: string; name: string; role: string; location: string };
  Illustration: React.ComponentType;
}

const configs: Record<string, UseCaseConfig> = {
  founders: {
    role: "Founders & Executives",
    headline: "For founders who can't afford to miss a signal.",
    subtext: "Every investor call, board meeting, and client pitch carries weight. Mitra makes sure you walk in prepared and walk out with everything captured.",
    pains: [
      { pain: "Leaving investor calls unsure what they actually thought", solution: "Mitra flags tone shifts, hesitations, and unresolved objections — giving you the read that matters after." },
      { pain: "Spending Sunday evenings writing follow-up emails", solution: "Follow-up drafts are ready before the call ends. Review, edit, send — done in two minutes." },
      { pain: "Dropping threads across 12 open conversations", solution: "Mitra tracks every open action item across all your meetings and surfaces what's stale before it becomes a miss." },
    ],
    testimonial: {
      quote: "As a founder, every conversation is high-stakes. Mitra is the one tool that's made me more confident walking into rooms — because I know I won't lose what came out of them.",
      name: "Tunde Adeyemi",
      role: "CEO, Recurra",
      location: "Lagos, Nigeria",
    },
    Illustration: FoundersIllustration,
  },
  sales: {
    role: "Sales Teams",
    headline: "Every deal move, tracked without lifting a pen.",
    subtext: "Sales happens in conversations. Mitra makes sure every signal, every commitment, and every objection is captured and turned into action.",
    pains: [
      { pain: "Forgetting what the prospect said they needed last time", solution: "Mitra archives every call and lets you search across them instantly before your next touchpoint." },
      { pain: "CRM updates eating into selling time", solution: "Mitra extracts deal notes in a structured format ready to paste into your CRM — or (soon) auto-syncs." },
      { pain: "Slow follow-up losing warm leads", solution: "Follow-up emails ready within a minute of ending the call — while the energy is still fresh." },
    ],
    testimonial: {
      quote: "We cut our post-call admin time by 60%. The team is following up faster and winning more second meetings.",
      name: "Bola Adesanya",
      role: "Head of Sales, ProcureNG",
      location: "Lagos, Nigeria",
    },
    Illustration: SalesIllustration,
  },
  consultants: {
    role: "Consultants & Agencies",
    headline: "Deliver smarter. Bill more confidently.",
    subtext: "Client work runs on meetings. Mitra turns every client conversation into structured, billable intelligence — and proves you heard every word.",
    pains: [
      { pain: "Writing meeting notes instead of delivering value", solution: "Notes, action items, and follow-ups are done automatically. Your time stays on the actual work." },
      { pain: "Scope creep starting in offhand remarks", solution: "Mitra captures every request and commitment, so 'but they said' conversations don't happen." },
      { pain: "Onboarding junior consultants on client context", solution: "A searchable archive of every client call means new team members get up to speed without a debrief." },
    ],
    testimonial: {
      quote: "Mitra has made our client relationships tighter. We reference past conversations precisely, and clients notice.",
      name: "Chioma Eze",
      role: "Principal, Eze Advisory",
      location: "Port Harcourt, Nigeria",
    },
    Illustration: ConsultantsIllustration,
  },
  ngo: {
    role: "NGOs & Development Orgs",
    headline: "Every stakeholder meeting. Every commitment. Documented.",
    subtext: "Donor calls, community consultations, partner coordination — Mitra helps development organisations run tighter operations without extra overhead.",
    pains: [
      { pain: "Donor reporting requiring manual meeting reconstruction", solution: "Every meeting produces structured, shareable notes that map to reporting requirements automatically." },
      { pain: "Community consultation outcomes getting lost in translation", solution: "Mitra captures multilingual discussions (where supported) and flags every commitment made on the org's behalf." },
      { pain: "Distributed teams across time zones losing alignment", solution: "A shared searchable archive means the Nairobi office and the Lagos office stay on the same page." },
    ],
    testimonial: {
      quote: "Our programme officers used to spend half a day after each stakeholder session writing up notes. Now it's fifteen minutes of review.",
      name: "Dr. Fatima Sule",
      role: "Programme Director, AfriGrant Foundation",
      location: "Abuja, Nigeria",
    },
    Illustration: NGOIllustration,
  },
};

export default function UseCasePage({ persona }: { persona: string }) {
  const config = configs[persona] ?? configs.founders;
  const { Illustration } = config;

  return (
    <div className="bg-[#FAF6F0]">
      {/* Hero */}
      <section className="max-w-[1280px] mx-auto px-6 pt-20 pb-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-widest text-[#1B2A4A] mb-4">{config.role}</p>
          <h1 className="font-[family-name:var(--font-display)] text-[48px] md:text-[58px] font-bold text-[#1B140F] leading-[1.1] tracking-tight mb-6">
            {config.headline}
          </h1>
          <p className="text-[17px] text-[rgba(27,20,15,0.65)] leading-relaxed mb-8">{config.subtext}</p>
          <Link to="/download" className="inline-flex px-6 py-3.5 bg-[#88E788] text-[#1B140F] font-semibold rounded-xl hover:bg-[#72d672] transition-colors">
            Download for free
          </Link>
        </div>
        <Illustration />
      </section>

      {/* Pain → solution */}
      <section className="py-20 px-6 bg-[#FDF9F4]">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="font-[family-name:var(--font-display)] text-[32px] font-bold text-[#1B140F] mb-10 tracking-tight">
            How Mitra helps.
          </h2>
          <div className="flex flex-col gap-6">
            {config.pains.map((p) => (
              <div key={p.pain} className="grid md:grid-cols-2 gap-5">
                <div className="bg-[rgba(27,20,15,0.04)] rounded-2xl p-6 border border-[rgba(27,20,15,0.06)]">
                  <p className="text-[13px] font-semibold uppercase tracking-wider text-[rgba(27,20,15,0.35)] mb-2">The problem</p>
                  <p className="text-[16px] text-[#1B140F]">{p.pain}</p>
                </div>
                <div className="bg-[rgba(136,231,136,0.08)] rounded-2xl p-6 border border-[rgba(136,231,136,0.25)]">
                  <p className="text-[13px] font-semibold uppercase tracking-wider text-[#1B2A4A] mb-2">Mitra's answer</p>
                  <p className="text-[16px] text-[#1B140F]">{p.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-6">
        <div className="max-w-[720px] mx-auto text-center">
          <p className="font-[family-name:var(--font-serif)] text-[22px] italic text-[#1B140F] leading-relaxed mb-6">
            "{config.testimonial.quote}"
          </p>
          <div className="w-8 h-px bg-[#88E788] mx-auto mb-4" />
          <p className="text-[14px] font-semibold text-[#1B140F]">{config.testimonial.name}</p>
          <p className="text-[13px] text-[rgba(27,20,15,0.5)]">{config.testimonial.role}</p>
          <p className="text-[12px] text-[rgba(27,20,15,0.35)] mt-0.5">{config.testimonial.location}</p>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
