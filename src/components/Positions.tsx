import { positions } from "@/data/siteData";

export default function Positions() {
  return (
    <section className="py-32 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {positions.map((pos, i) => (
          <div key={i} className="space-y-6 reveal-on-scroll">
            <h4 className="font-mono text-xs text-accent-purple tracking-widest uppercase">
              {pos.label}
            </h4>
            <h3 className="font-serif text-4xl italic font-extrabold text-text-primary">
              {pos.title}
            </h3>
            <p className="text-text-muted leading-relaxed">{pos.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
