import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="bg-[#FAF6F0] min-h-[80vh] flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.025]" aria-hidden>
        <svg width="100%" height="100%">
          <defs>
            <pattern id="adinkra" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="20" fill="none" stroke="#1B140F" strokeWidth="0.8"/>
              <circle cx="40" cy="40" r="10" fill="none" stroke="#1B140F" strokeWidth="0.8"/>
              <line x1="20" y1="40" x2="60" y2="40" stroke="#1B140F" strokeWidth="0.8"/>
              <line x1="40" y1="20" x2="40" y2="60" stroke="#1B140F" strokeWidth="0.8"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#adinkra)"/>
        </svg>
      </div>

      <div className="relative text-center max-w-[500px]">
        <p className="text-[120px] font-black font-[family-name:var(--font-display)] text-[rgba(27,20,15,0.06)] leading-none">
          404
        </p>
        <div className="-mt-8">
          <h1 className="font-[family-name:var(--font-display)] text-[36px] font-bold text-[#1B140F] tracking-tight mb-4">
            This page stepped out of the room.
          </h1>
          <p className="text-[16px] text-[rgba(27,20,15,0.55)] mb-8 leading-relaxed">
            The page you're looking for doesn't exist — or was moved. Let's get you back on track.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/" className="px-5 py-2.5 bg-[#88E788] text-[#1B140F] font-semibold rounded-xl hover:bg-[#72d672] transition-colors text-[14px]">
              Back to home
            </Link>
            <Link to="/help" className="px-5 py-2.5 border border-[rgba(27,20,15,0.18)] text-[#1B140F] font-medium rounded-xl hover:bg-[rgba(27,20,15,0.04)] transition-colors text-[14px]">
              Help centre
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
