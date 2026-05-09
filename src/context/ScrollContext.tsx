import React, { createContext, useContext, useRef, useState, useEffect, useCallback } from "react";

type SectionId = "home" | "about" | "skills" | "projects" | "experience" | "contact";

interface ScrollContextType {
  activeSection: SectionId;
  scrollToSection: (id: SectionId) => void;
  registerSection: (id: SectionId, element: HTMLElement | null) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const sectionRefs = useRef<Record<SectionId, HTMLElement | null>>({
    home: null,
    about: null,
    skills: null,
    projects: null,
    experience: null,
    contact: null,
  });

  const registerSection = useCallback((id: SectionId, element: HTMLElement | null) => {
    sectionRefs.current[id] = element;
  }, []);

  const scrollToSection = useCallback((id: SectionId) => {
    const element = sectionRefs.current[id];
    if (element) {
      const offset = 80; // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for detection

      const sections = Object.entries(sectionRefs.current) as [SectionId, HTMLElement | null][];
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const [id, element] = sections[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScrollContext.Provider value={{ activeSection, scrollToSection, registerSection }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScroll() {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
}
