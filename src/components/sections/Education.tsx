import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import uciLogo from "@/assets/uci_logo.png";

export function Education() {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-12 text-center">
            Education
          </h2>
          
          <Card className="rounded-2xl border-border/50 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.03)] overflow-hidden">
            <CardContent className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="h-16 w-16 md:h-20 md:w-20 shrink-0 bg-white rounded-xl flex items-center justify-center p-2 shadow-sm border border-border/50">
                    <img src={uciLogo} alt="UCI Logo" className="object-contain w-full h-full" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground font-heading">
                      University of California, Irvine (UCI)
                    </h3>
                    <p className="text-lg text-primary font-medium mt-1">
                      Bachelor of Science in Mathematics
                    </p>
                  </div>
                </div>
                <div className="text-left md:text-right mt-2 md:mt-0">
                  <p className="text-foreground/80 font-medium">September 2022 – March 2026</p>
                  <p className="text-muted-foreground text-sm mt-1">Irvine, CA</p>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  Relevant Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Mathematics of Financial Derivatives",
                    "Programming in Data Science",
                    "Numerical Analysis",
                    "Portability",
                    "Multivariable Calculus",
                    "Linear Algebra",
                    "Partial Differential Equations",
                    "Machine Learning"
                  ].map((course, idx) => (
                    <span 
                      key={idx} 
                      className="px-4 py-2 bg-muted/50 text-foreground/80 rounded-lg text-sm transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
