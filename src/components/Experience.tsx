import * as React from "react";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/src/lib/utils";

const journey = [
  {
    title: "Learning React",
    description: "Started my journey by mastering modern frontend development, hooks, and state management.",
    period: "Early 2022",
  },
  {
    title: "Django Mastery",
    description: "Expanded into backend development with Python and Django, building secure and scalable REST APIs.",
    period: "Late 2022",
  },
  {
    title: "Full Stack Integration",
    description: "Began building end-to-end applications, integrating complex frontends with robust backends.",
    period: "2023",
  },
];

export const Experience = React.forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="py-24 bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-blue-500 uppercase tracking-widest mb-4">My Journey</h2>
          <h3 className="text-4xl font-display font-bold">Experience & Growth</h3>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {journey.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={cn(
                  "relative flex flex-col md:flex-row gap-8 items-start md:items-center",
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                )}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-background -translate-x-1/2 z-10 hidden md:block" />

                <div className="flex-1 w-full md:w-1/2">
                  <div className={cn(
                    "glass p-8 rounded-3xl",
                    idx % 2 === 0 ? "md:text-right" : "md:text-left"
                  )}>
                    <span className="text-xs font-mono text-muted-foreground mb-2 block">{item.period}</span>
                    <h4 className="text-xl font-bold mb-3 flex items-center gap-2 md:justify-start justify-start">
                      {idx % 2 !== 0 && <CheckCircle2 className="text-blue-500" size={20} />}
                      {item.title}
                      {idx % 2 === 0 && <CheckCircle2 className="text-blue-500 hidden md:block" size={20} />}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

Experience.displayName = "Experience";
