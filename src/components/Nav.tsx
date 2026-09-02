import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { MitraIcon } from "./MitraLogo";

const productLinks = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Meeting Assistant", href: "/features/meeting-assistant" },
  { label: "AI Notes & Follow-ups", href: "/features/ai-notes" },
  { label: "Integrations", href: "/features/integrations" },
];

const useCaseLinks = [
  { label: "Founders & Executives", href: "/use-cases/founders" },
  { label: "Sales Teams", href: "/use-cases/sales" },
  { label: "Consultants & Agencies", href: "/use-cases/consultants" },
  { label: "NGOs & Development Orgs", href: "/use-cases/ngo" },
];

const resourceLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Help Center", href: "/help" },
  { label: "Security", href: "/security" },
];

function Dropdown({ label, links }: { label: string; links: { label: string; href: string }[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-[15px] font-medium text-[#1B140F] hover:text-[#1B2A4A] transition-colors"
      >
        {label}
        <svg
          width="14" height="14" viewBox="0 0 14 14" fill="none"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 w-56 bg-[#FDF9F4] border border-[rgba(27,20,15,0.1)] rounded-xl shadow-lg shadow-[rgba(27,20,15,0.08)] py-2 z-50">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-[14px] text-[#1B140F] hover:bg-[rgba(136,231,136,0.12)] hover:text-[#1B140F] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav className="sticky top-0 z-40 bg-[#FAF6F0]/90 backdrop-blur-md border-b border-[rgba(27,20,15,0.08)]">
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <MitraIcon size={32} />
          <span className="text-[18px] font-bold text-[#1B140F] font-[family-name:var(--font-display)] tracking-tight">
            Mitra
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          <Dropdown label="Product" links={productLinks} />
          <Dropdown label="Use Cases" links={useCaseLinks} />
          <Link to="/pricing" className="text-[15px] font-medium text-[#1B140F] hover:text-[#1B2A4A] transition-colors">
            Pricing
          </Link>
          <Link to="/enterprise" className="text-[15px] font-medium text-[#1B140F] hover:text-[#1B2A4A] transition-colors">
            Enterprise
          </Link>
          <Dropdown label="Resources" links={resourceLinks} />
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <Link
            to="/download"
            className="px-4 py-2 bg-[#88E788] text-[#1B140F] text-[14px] font-semibold rounded-xl hover:bg-[#72d672] transition-colors shadow-sm"
          >
            Download for free
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-[#1B140F]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {mobileOpen ? (
              <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <>
                <line x1="3" y1="7" x2="19" y2="7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="3" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="3" y1="17" x2="19" y2="17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#FDF9F4] border-t border-[rgba(27,20,15,0.08)] px-6 py-4 flex flex-col gap-1">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[rgba(27,20,15,0.4)] pt-2 pb-1">Product</p>
          {productLinks.map((l) => (
            <Link key={l.href} to={l.href} className="py-2 text-[15px] text-[#1B140F] hover:text-[#1B2A4A] transition-colors">
              {l.label}
            </Link>
          ))}
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[rgba(27,20,15,0.4)] pt-3 pb-1">Use Cases</p>
          {useCaseLinks.map((l) => (
            <Link key={l.href} to={l.href} className="py-2 text-[15px] text-[#1B140F] hover:text-[#1B2A4A] transition-colors">
              {l.label}
            </Link>
          ))}
          <div className="border-t border-[rgba(27,20,15,0.08)] mt-3 pt-3 flex flex-col gap-2">
            <Link to="/pricing" className="py-2 text-[15px] text-[#1B140F]">Pricing</Link>
            <Link to="/enterprise" className="py-2 text-[15px] text-[#1B140F]">Enterprise</Link>
            <Link to="/blog" className="py-2 text-[15px] text-[#1B140F]">Blog</Link>
            <Link to="/download" className="mt-2 px-4 py-3 bg-[#88E788] text-[#1B140F] text-[15px] font-semibold rounded-xl text-center">
              Download for free
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
