import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";
import * as React from "react";
import { Button } from "./ui/Button";

export const Hero = React.forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center pt-20 pb-24 lg:pb-0 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px]" />
        {/* <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" /> */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-12 lg:py-0">
          <div className="flex flex-col text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border text-xs font-medium text-muted-foreground mb-8 mx-auto lg:mx-0 w-fit"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for new opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-7xl lg:text-[5.4rem] font-display font-bold tracking-tight mb-4"
            >
              Building Scalable & <br />
              <span className="text-gradient-primary">Beautiful Web Experiences</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-xl md:text-2xl font-display font-semibold text-foreground mb-8 tracking-tight"
            >
              Nishant BK <span className="text-muted-foreground mx-2">|</span> Full Stack Developer
            </motion.div>

            {/* Image Container - Visible only on mobile/tablet, placed between title and description */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-[280px] md:max-w-sm mx-auto aspect-square lg:hidden mb-12 group [perspective:1000px]"
            >
              <motion.div 
                className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
              >
                <div className="absolute inset-0 border border-border/50 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-4 border border-border rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                
                {/* Front Face */}
                <div className="absolute inset-8 md:inset-12 rounded-3xl overflow-hidden glass p-2 [backface-visibility:hidden]">
                  <div className="w-full h-full rounded-2xl overflow-hidden">
                    <img 
                      src="https://picsum.photos/seed/developer/800/800" 
                      alt="Developer Profile Front" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Back Face */}
                <div className="absolute inset-8 md:inset-12 rounded-3xl overflow-hidden glass p-2 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div className="w-full h-full rounded-2xl overflow-hidden">
                    <img 
                      src="https://picsum.photos/seed/coding/800/800" 
                      alt="Developer Profile Back" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto lg:mx-0 text-base md:text-xl text-muted-foreground mb-10 leading-relaxed"
            >
              Full Stack Developer specializing in high-performance React applications and robust Django backends. 
              Crafting digital products with precision and purpose.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-16"
            >
              <Button size="lg" className="group w-full sm:w-auto">
                View Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-8 mb-8 lg:mb-0"
            >
              <a href="https://github.com/nishantbk311" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm">
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/nishant-bk/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a 
                href="mailto:bknishant311@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm"
              >
                <Mail size={20} />
                <span>Email</span>
              </a>
            </motion.div>
          </div>

          {/* Image Container - Visible only on desktop, placed on the right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:block w-full max-w-md mx-auto aspect-square group [perspective:1000px]"
          >
            <motion.div 
              className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
            >
              <div className="absolute inset-0 border border-border/50 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 border border-border rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              
              {/* Front Face */}
              <div className="absolute inset-12 rounded-3xl overflow-hidden glass p-2 [backface-visibility:hidden]">
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <img 
                    src="https://picsum.photos/seed/developer/800/800" 
                    alt="Developer Profile Front" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Back Face */}
              <div className="absolute inset-12 rounded-3xl overflow-hidden glass p-2 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <img 
                    src="https://picsum.photos/seed/coding/800/800" 
                    alt="Developer Profile Back" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-border flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-muted-foreground rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
});

Hero.displayName = "Hero";
