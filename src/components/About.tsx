import { personalInfo, skills } from "@/data/siteData";

export default function About() {
  const allSkills = skills.flatMap(s => s.items);

  return (
    <section id="about" className="max-w-5xl mx-auto py-16 md:py-32 px-4 md:px-8 border-t-4 border-black">
      <h2 className="text-3xl md:text-6xl font-black leading-tight mb-12 uppercase text-black">
        Hi, I am{" "}
        <span className="inline-block border-4 border-black bg-brand-purple text-white px-4 py-1 mx-2 align-middle brutalist-shadow">
          {personalInfo.name.split(' ')[0]} ✌️
        </span>
        , an engineering student since{" "}
        <span className="border-4 border-black bg-brand-orange text-black px-4 py-1 inline-block text-2xl md:text-5xl align-middle brutalist-shadow">
          2023
        </span>{" "}
        focused on building high-performance web applications 🌐, AI tools 🤖, and digital experiences 🪄.
      </h2>
      
      <div className="bg-brand-light p-8 border-4 border-black brutalist-shadow-lg">
        <p className="text-lg font-black uppercase tracking-widest mb-6 text-black">With my skills in:</p>
        <div className="flex flex-wrap gap-4">
          {allSkills.map((skill, i) => {
            // cycle through some brutalist styles for variety
            const styles = [
              "bg-white text-black hover:bg-brand-orange",
              "bg-black text-white hover:bg-brand-purple",
              "bg-brand-purple text-white hover:bg-black",
              "bg-gray-200 text-black hover:bg-brand-orange"
            ];
            const style = styles[i % styles.length];
            return (
              <span 
                key={skill} 
                className={`px-5 py-2 border-4 border-black text-sm md:text-lg font-bold hover:translate-x-1 hover:-translate-y-1 brutalist-shadow transition-none cursor-default ${style}`}
              >
                {skill}
              </span>
            );
          })}
          <span className="w-12 h-12 border-4 border-black bg-brand-orange flex items-center justify-center text-2xl font-black brutalist-shadow cursor-default text-black">
            &
          </span>
        </div>
      </div>
    </section>
  );
}
