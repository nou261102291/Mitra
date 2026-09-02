import { Link } from "react-router";

const posts = [
  {
    slug: "why-meeting-notes-fail-in-africa",
    category: "Product",
    title: "Why meeting notes fail African professionals — and what we did about it",
    excerpt: "Every US meeting tool we tested assumed stable WiFi, a USD card, and a bot was OK to join your call. We built something different.",
    author: "Emeka Okafor",
    date: "Nov 8, 2024",
    readTime: "6 min",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=360&fit=crop&auto=format",
  },
  {
    slug: "follow-up-emails-that-close-deals",
    category: "Sales",
    title: "The follow-up email that closes the deal — and how Mitra writes it for you",
    excerpt: "Speed matters. The professional who follows up in 10 minutes wins over the one who follows up in two days. Here's how we make that effortless.",
    author: "Yewande Balogun",
    date: "Oct 29, 2024",
    readTime: "5 min",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=360&fit=crop&auto=format",
  },
  {
    slug: "local-payments-why-matter",
    category: "Product",
    title: "Why local payments aren't a feature — they're a statement",
    excerpt: "Asking African professionals to pay in USD via a foreign card is a message about whose tool this really is. Mitra pays Naira.",
    author: "Kofi Mensah",
    date: "Oct 14, 2024",
    readTime: "4 min",
    img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=360&fit=crop&auto=format",
  },
];

export default function Blog() {
  return (
    <div className="bg-[#FAF6F0]">
      <section className="max-w-[1280px] mx-auto px-6 pt-20 pb-12">
        <p className="text-[12px] font-semibold uppercase tracking-widest text-[#C9542C] mb-4">The Mitra Blog</p>
        <h1 className="font-[family-name:var(--font-display)] text-[52px] md:text-[64px] font-bold text-[#1B140F] leading-[1.08] tracking-tight">
          On meetings, business,<br />and building for Africa.
        </h1>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-3 gap-7">
          {posts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="group flex flex-col">
              <img
                src={post.img}
                alt={post.title}
                className="w-full rounded-2xl aspect-video object-cover mb-5 bg-[rgba(27,20,15,0.05)] group-hover:opacity-90 transition-opacity"
              />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#C9542C] mb-2">{post.category}</span>
              <h2 className="font-[family-name:var(--font-display)] text-[20px] font-bold text-[#1B140F] leading-snug mb-3 group-hover:text-[#C9542C] transition-colors">
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
