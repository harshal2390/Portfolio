import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript (ES6+)", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "Bootstrap", level: 85, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "Spring MVC", level: 70, category: "backend" },

  // Databases
  { name: "MongoDB", level: 75, category: "database" },
  { name: "MySQL", level: 80, category: "database" },

  // Tools & DevOps
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },

  { name: "Jupyter NoteBook", level: 80, category: "tools" },

  // Programming Languages
  { name: "C++ ", level: 85, category: "programming" },
  { name: "Python", level: 80, category: "programming" },
  { name: "Java ", level: 75, category: "programming" },

  // Machine Learning / AI
  { name: "Scikit-learn", level: 75, category: "ML/AI" },
  { name: "Pandas", level: 80, category: "ML/AI" },
  { name: "NumPy", level: 80, category: "ML/AI" },
  { name: "Matplotlib/Seaborn", level: 75, category: "ML/AI" },
  { name: "TensorFlow (Basics)", level: 65, category: "ML/AI" },
  { name: "Streamlit", level: 70, category: "ML/AI" },
];

const categories = [
  "all",
  "frontend",
  "backend",
  "database",
  "tools",
  "programming",
  "ML/AI",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        {/* Categories Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
