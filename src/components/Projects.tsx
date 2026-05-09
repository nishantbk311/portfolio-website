import * as React from "react";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Movie Recommendation App",
    description: "A smart movie discovery platform with genre-based filtering and personalized recommendations using TMDB API.",
    image: "https://picsum.photos/seed/movies/800/600",
    tags: ["React", "Tailwind", "API Integration"],
    github: "#",
    live: "#",
  },
  {
    title: "Book Search Catalog",
    description: "A comprehensive library management system with advanced search capabilities and real-time availability tracking.",
    image: "https://picsum.photos/seed/books/800/600",
    tags: ["PHP", "MySQL", "Bootstrap"],
    github: "#",
    live: "#",
  },
  {
    title: "Teacher Dashboard UI",
    description: "A modern administrative interface for educators to manage classes, grades, and student performance analytics.",
    image: "https://picsum.photos/seed/dashboard/800/600",
    tags: ["React", "Chart.js", "Framer Motion"],
    github: "#",
    live: "#",
  },
  {
    title: "TSP Dynamic Programming",
    description: "An optimized implementation of the Traveling Salesperson Problem using dynamic programming with bitmasking.",
    image: "https://picsum.photos/seed/algorithm/800/600",
    tags: ["Python", "Algorithms", "Optimization"],
    github: "#",
    live: "#",
  },
  {
    title: "Personal Finance Tracker",
    description: "A secure financial management tool with automated expense categorization and visual budget tracking.",
    image: "https://picsum.photos/seed/finance/800/600",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    github: "#",
    live: "#",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather forecasting application with interactive maps and historical data visualization.",
    image: "https://picsum.photos/seed/weather/800/600",
    tags: ["TypeScript", "OpenWeather", "Leaflet"],
    github: "#",
    live: "#",
  },
];

export const Projects = React.forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="py-24">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-mono text-blue-500 uppercase tracking-widest mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">Featured Projects</h3>
          </div>
          <p className="max-w-md text-muted-foreground">
            A selection of my recent work, ranging from full-stack applications to complex algorithmic implementations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-card rounded-3xl overflow-hidden border border-border hover:border-muted-foreground/30 transition-all"
            >
              <a 
                href={project.live} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block aspect-video relative overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
                    <ExternalLink className="text-white w-6 h-6" />
                  </div>
                </div>
              </a>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-blue-500 bg-blue-500/10 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-2xl font-bold mb-3">{project.title}</h4>
                <p className="text-muted-foreground mb-6 line-clamp-2">{project.description}</p>
                <div className="flex items-center gap-4">
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-blue-500 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

Projects.displayName = "Projects";
