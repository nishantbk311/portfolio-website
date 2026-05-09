import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Senior Product Manager",
    content: "An exceptional developer who understands both the technical and business aspects of a project. The attention to detail is remarkable.",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    name: "Michael Chen",
    role: "CTO at TechFlow",
    content: "The clean code and architectural decisions made during our collaboration were top-notch. A truly job-ready professional.",
    avatar: "https://i.pravatar.cc/150?u=michael",
  },
  {
    name: "Elena Rodriguez",
    role: "Lead Frontend Engineer",
    content: "JD's ability to translate complex designs into pixel-perfect React components is impressive. Highly recommended for any team.",
    avatar: "https://i.pravatar.cc/150?u=elena",
  },
];

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-blue-500 uppercase tracking-widest mb-4">Feedback</h2>
          <h3 className="text-4xl font-display font-bold">What People Say</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl relative"
            >
              <Quote className="absolute top-6 right-8 text-foreground/5 w-12 h-12" />
              <p className="text-muted-foreground italic mb-8 relative z-10">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-border" referrerPolicy="no-referrer" />
                <div>
                  <div className="font-bold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
