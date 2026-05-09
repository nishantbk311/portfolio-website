import * as React from "react";
import { motion } from "motion/react";
import { Code2, Database, Layout, Terminal } from "lucide-react";

const stats = [
  { label: "Projects Built", value: "10+" },
  { label: "Experience", value: "2+ Yrs" },
  { label: "Commits", value: "500+" },
  { label: "Happy Clients", value: "5+" },
];

export const About = React.forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="py-24 relative">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-mono text-blue-500 uppercase tracking-widest mb-4">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Passionate about solving complex problems through code.
            </h3>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              I'm a Full Stack Developer with a strong foundation in computer science and a keen eye for design. 
              My journey started with a curiosity for how things work on the web, which led me to master React for the frontend 
              and Django for the backend.
            </p>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              I focus on building high-impact, scalable applications that provide seamless user experiences. 
              When I'm not coding, you'll find me exploring the latest trends in web performance or contributing to open-source projects.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-display font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="glass p-6 rounded-2xl">
                <Layout className="text-blue-500 mb-4" size={32} />
                <h4 className="font-bold mb-2">Frontend</h4>
                <p className="text-sm text-muted-foreground">Creating responsive and interactive UIs with React and Tailwind.</p>
              </div>
              <div className="glass p-6 rounded-2xl">
                <Database className="text-purple-500 mb-4" size={32} />
                <h4 className="font-bold mb-2">Database</h4>
                <p className="text-sm text-muted-foreground">Designing efficient schemas with PostgreSQL and MySQL.</p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="glass p-6 rounded-2xl">
                <Terminal className="text-emerald-500 mb-4" size={32} />
                <h4 className="font-bold mb-2">Backend</h4>
                <p className="text-sm text-muted-foreground">Building robust APIs and server-side logic with Django.</p>
              </div>
              <div className="glass p-6 rounded-2xl">
                <Code2 className="text-orange-500 mb-4" size={32} />
                <h4 className="font-bold mb-2">UI/UX</h4>
                <p className="text-sm text-muted-foreground">Designing intuitive interfaces with a focus on user accessibility.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";
