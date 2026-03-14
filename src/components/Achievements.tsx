import { achievements, type Achievement } from "@/data/siteData";

/* ── Color helpers ────────────── */
const borderTopColor: Record<string, string> = {
  "accent-coral": "border-t-accent-coral",
  "accent-teal": "border-t-accent-teal",
  "accent-purple": "border-t-accent-purple",
  "accent-electric": "border-t-accent-electric",
};

const textColor: Record<string, string> = {
  "accent-coral": "text-accent-coral",
  "accent-teal": "text-accent-teal",
  "accent-purple": "text-accent-purple",
  "accent-electric": "text-accent-electric",
};

const bgColor: Record<string, string> = {
  "accent-coral": "bg-accent-coral",
  "accent-teal": "bg-accent-teal",
  "accent-purple": "bg-accent-purple",
  "accent-electric": "bg-accent-electric",
};

const badgeBg: Record<string, string> = {
  "accent-coral": "bg-accent-coral/10",
  "accent-teal": "bg-accent-teal/10",
  "accent-purple": "bg-accent-purple/10",
  "accent-electric": "bg-accent-electric/10",
};

const ghostText: Record<string, string> = {
  "accent-coral": "text-accent-coral/5 group-hover:text-accent-coral/10",
  "accent-teal": "text-accent-teal/5 group-hover:text-accent-teal/10",
  "accent-purple": "text-accent-purple/5 group-hover:text-accent-purple/10",
  "accent-electric": "text-accent-electric/5 group-hover:text-accent-electric/10",
};

function LargeCard({ a }: { a: Achievement }) {
  return (
    <div
      className={`md:col-span-2 lg:row-span-2 glass-card p-8 flex flex-col justify-between border-t-4 ${borderTopColor[a.color]} relative overflow-hidden group reveal-on-scroll rounded`}
    >
      <div
        className={`absolute -right-8 -bottom-8 font-display text-[15rem] font-bold ${ghostText[a.color]} transition-all`}
      >
        01
      </div>
      <div>
        <span
          className={`px-3 py-1 ${badgeBg[a.color]} ${textColor[a.color]} font-mono text-[10px] uppercase tracking-widest rounded mb-6 inline-block`}
        >
          {a.badge}
        </span>
        <h3 className="font-serif text-4xl mb-4 text-text-primary italic font-extrabold">
          {a.platform}
        </h3>
        <p className="text-text-muted">{a.description}</p>
      </div>
      {a.bigNumber && (
        <div className="mt-8 font-display text-4xl font-bold text-text-primary">
          {a.bigNumber}
        </div>
      )}
    </div>
  );
}

function PlatformCard({ a }: { a: Achievement }) {
  return (
    <div
      className={`glass-card p-6 border-t-4 ${borderTopColor[a.color]} reveal-on-scroll rounded`}
    >
      <div className="flex justify-between items-start mb-6">
        <h3 className="font-serif text-2xl text-text-primary italic font-extrabold">
          {a.platform}
        </h3>
        <span className={`font-mono ${textColor[a.color]} text-xl`}>
          {a.badge ?? a.title}
        </span>
      </div>
      {a.rating && <p className="text-text-muted text-xs mb-4">{a.rating}</p>}
      {a.progressPercent != null && (
        <div className="h-2 w-full bg-bg-accent-wash rounded-full overflow-hidden">
          <div
            className={`h-full ${bgColor[a.color]}`}
            style={{ width: `${a.progressPercent}%` }}
          />
        </div>
      )}
      {a.stat && (
        <p className="mt-4 font-mono text-[10px] text-text-primary">{a.stat}</p>
      )}
      {a.platform === "GSSoC" && (
        <div className="mt-8 flex justify-end">
          <svg
            className={`w-8 h-8 ${textColor[a.color]}`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
      )}
    </div>
  );
}

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-32 px-6 lg:px-24 bg-bg-accent-wash/40"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-6xl text-text-primary mb-16 text-center italic font-extrabold">
          Wall of Honor<span className="text-accent-teal">·</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {achievements.map((a, i) =>
            a.size === "large" ? (
              <LargeCard key={i} a={a} />
            ) : (
              <PlatformCard key={i} a={a} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
