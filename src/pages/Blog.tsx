import { Link } from "react-router";
import { BlogIllustration1, BlogIllustration2, BlogIllustration3 } from "../components/illustrations/BlogIllustrations";

const posts = [
  {
    slug: "why-meeting-notes-fail-in-africa",
    category: "Product",
    title: "Why meeting notes fail African professionals — and what we did about it",
    excerpt: "Every US meeting tool we tested assumed stable WiFi, a USD card, and a bot was OK to join your call. We built something different.",
    author: "Emeka Okafor",
    date: "Nov 8, 2024",
    readTime: "6 min",
    Thumb: BlogIllustration1,
  },
  {
    slug: "follow-up-emails-that-close-deals",
    category: "Sales",
    title: "The follow-up email that closes the deal — and how Mitra writes it for you",
    excerpt: "Speed matters. The professional who follows up in 10 minutes wins over the one who follows up in two days. Here's how we make that effortless.",
    author: "Yewande Balogun",
    date: "Oct 29, 2024",
    readTime: "5 min",
    Thumb: BlogIllustration2,
  },
  {
    slug: "local-payments-why-matter",
    category: "Product",
    title: "Why local payments aren't a feature — they're a statement",
    excerpt: "Asking African professionals to pay in USD via a foreign card is a message about whose tool this really is. Mitra pays Naira.",
    author: "Kofi Mensah",
    date: "Oct 14, 2024",
    readTime: "4 min",
    Thumb: BlogIllustration3,
  },
];

export default function Blog() {
  return (
    <div className="bg-[#FAF6F0]">
      <section className="max-w-[1280px] mx-auto px-6 pt-20 pb-12">
        <p className="text-[12px] font-semibold uppercase tracking-widest text-[#1B2A4A] mb-4">The Mitra Blog</p>
        <h1 className="font-[family-name:var(--font-display)] text-[52px] md:text-[64px] font-bold text-[#1B140F] leading-[1.08] tracking-tight">
          On meetings, business,<br />and building for Africa.
        </h1>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-3 gap-7">
          {posts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="group flex flex-col">
              <div className="w-full rounded-2xl overflow-hidden mb-5 bg-[rgba(27,20,15,0.04)]">
                <post.Thumb />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#1B2A4A] mb-2">{post.category}</span>
              <h2 className="font-[family-name:var(--font-display)] text-[20px] font-bold text-[#1B140F] leading-snug mb-3 group-hover:text-[#1B2A4A] transition-colors">
                {post.title}
              </h2>
              <p className="text-[14px] text-[rgba(27,20,15,0.6)] leading-relaxed mb-5 flex-1">{post.excerpt}</p>
              <div className="flex items-center gap-3 text-[12px] text-[rgba(27,20,15,0.4)]">
                <span>{post.author}</span>
                <span>·</span>
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime} read</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
