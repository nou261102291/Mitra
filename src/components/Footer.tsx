import { Link } from "react-router";
import { MitraIcon } from "./MitraLogo";

const columns = [
  {
    title: "Product",
    links: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Meeting Assistant", href: "/features/meeting-assistant" },
      { label: "Mitra Chat", href: "/features/mitra-chat" },
      { label: "Lens", href: "/features/lens" },
      { label: "AI Notes & Follow-ups", href: "/features/ai-notes" },
      { label: "Integrations", href: "/features/integrations" },
      { label: "Download", href: "/download" },
    ],
  },
  {
    title: "Use Cases",
    links: [
      { label: "Founders & Executives", href: "/use-cases/founders" },
      { label: "Sales Teams", href: "/use-cases/sales" },
      { label: "Consultants & Agencies", href: "/use-cases/consultants" },
      { label: "NGOs & Development Orgs", href: "/use-cases/ngo" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Enterprise", href: "/enterprise" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Help Center", href: "/help" },
      { label: "Security", href: "/security" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "/legal/terms" },
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "vs. Granola", href: "/vs/granola" },
      { label: "vs. Otter", href: "/vs/otter" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1B2A4A] text-[#FDF9F4]">
      <div className="h-px bg-gradient-to-r from-transparent via-[#88E788]/30 to-transparent" />

      <div className="max-w-[1280px] mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <MitraIcon size={28} />
              <span className="text-[17px] font-bold font-[family-name:var(--font-display)]">Mitra</span>
            </div>
            <p className="text-[13px] text-[rgba(253,249,244,0.55)] leading-relaxed max-w-[180px]">
              The colleague who's always one step ahead of the room.
            </p>
            <Link
              to="/contact"
              className="inline-block mt-5 text-[13px] text-[rgba(253,249,244,0.45)] hover:text-[#88E788] transition-colors"
            >
              Get in touch →
            </Link>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[rgba(253,249,244,0.35)] mb-4">
                {col.title}
              </p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-[14px] text-[rgba(253,249,244,0.65)] hover:text-[#88E788] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[rgba(253,249,244,0.1)] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-[rgba(253,249,244,0.35)]">
            © {year} Mitra Technologies Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-[13px] text-[rgba(253,249,244,0.35)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#88E788] inline-block" />
            Made in Lagos, Nigeria
          </div>
        </div>
      </div>
    </footer>
  );
}
