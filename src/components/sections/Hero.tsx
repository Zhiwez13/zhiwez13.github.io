import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="min-h-[100svh] flex items-center justify-center pt-20 pb-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          className="flex-1 space-y-6 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-accent/30 text-accent-foreground text-sm font-medium mb-4">
            Available for Internships & Opportunities
          </div>
          <h2 className="text-secondary-foreground text-lg md:text-xl font-medium tracking-wide font-heading">
            Hello, I am
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold font-heading text-foreground mt-2">
            Zhiwei Zhang
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light mt-4">
            Quantitative Tech & Data Analyst.
          </p>
          <p className="text-base md:text-lg text-foreground/80 max-w-2xl leading-relaxed mx-auto md:mx-0 mt-4">
            I specialize in mathematical modeling, economic research, and data-driven insights. 
            Currently pursuing my B.S. in Mathematics at UC Irvine, I bring analytical rigor 
            to solving complex problems in finance and economics.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-8 justify-center md:justify-start">
            {/* Primary Action */}
            <Button size="lg" className="rounded-xl w-full sm:w-auto shadow-md hover:shadow-lg transition-all bg-foreground text-background hover:bg-foreground/90" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            
            {/* Secondary Action */}
            <Button size="lg" className="rounded-xl w-full sm:w-auto shadow-sm transition-all bg-card text-card-foreground border border-border/50 hover:border-primary/30 hover:bg-primary/5" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
            
            {/* Tertiary / Utility Action */}
            <Button size="lg" variant="ghost" className="rounded-xl w-full sm:w-auto hover:bg-accent/30 text-foreground/80 hover:text-foreground transition-all" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Resume
              </a>
            </Button>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex-1 hidden md:flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-80 h-80 flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute w-64 h-64 bg-accent/30 rounded-full blur-2xl" />
            <div className="absolute w-72 h-72 border border-primary/20 rounded-full" />
            <div className="absolute w-56 h-56 border border-secondary/30 rounded-full" />
            <div className="z-10 bg-background/50 backdrop-blur-sm p-6 rounded-2xl border border-border/50 shadow-xl">
              <span className="text-5xl font-heading font-bold text-primary">ZZ.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
