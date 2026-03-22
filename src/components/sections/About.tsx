import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-8 text-center">
            About Me
          </h2>
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-border/50 relative overflow-hidden">
            {/* Soft decorative blob */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-6 text-foreground/80 leading-relaxed relative z-10">
              <p>
                I am a passionate and analytical student currently completing my Bachelor of Science in Mathematics at the University of California, Irvine. Throughout my academic and professional journey, I have developed a deep fascination with utilizing data to drive meaningful decisions and understand complex systems.
              </p>
              <p>
                My background spans from assessing cryptocurrency market trends in FinTech to conducting rigorous economic analyses for municipal government research. Hand-in-hand with my education in multivariable calculus, linear algebra, and machine learning, my professional experiences have honed my ability to translate vast datasets into actionable insights.
              </p>
              <p>
                Whether I am building predictive models, optimizing data processing workflows in Python, or helping students grasp the nuances of linear algebra, my goal is always to find clarity in complexity. 
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
