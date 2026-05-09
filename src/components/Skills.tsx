import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Backend",
    skills: ["Django", "Python", "FastAPI", "RESTful APIs", "Node.js", "Express"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "SQLite"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Tools & Others",
    skills: ["Git", "Docker", "Postman", "AWS", "Vercel", "Linux"],
    color: "from-orange-500 to-yellow-500",
  },
];

export const Skills = React.forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="py-24 bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-mono text-blue-500 uppercase tracking-widest mb-4"
          >
            Technical Stack
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-display font-bold"
          >
            Tools of the Trade
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl relative overflow-hidden group"
            >
              <div className={cn(
                "absolute top-0 left-0 w-1 h-full bg-gradient-to-b opacity-50 group-hover:opacity-100 transition-opacity",
                category.color
              )} />
              <h4 className="text-xl font-bold mb-6">{category.title}</h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-muted border border-border text-xs text-muted-foreground hover:text-foreground hover:border-muted-foreground/30 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

Skills.displayName = "Skills";
