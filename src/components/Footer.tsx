import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="text-xl font-display font-bold tracking-tighter mb-2 text-foreground">
              NBK<span className="text-muted-foreground">.</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Nishant BK. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/nishantbk311" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/nishant-bk/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin size={20} />
            </a>
            {/* <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter size={20} />
            </a> */}
            <a 
              href="mailto:bknishant311@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
