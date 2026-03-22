import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  const categories = [
    {
      title: "Programming & Tools",
      items: ["MATLAB", "Python", "R", "SAS", "Microsoft Excel"]
    },
    {
      title: "Data Analysis & Modeling",
      items: ["Financial Modeling", "Regression Analysis", "Time Series Forecasting", "Monte Carlo Simulation", "PCA & Clustering"]
    },
    {
      title: "Visualization & Libs",
      items: ["Tableau", "Power BI", "Google Analytics", "SymPy", "Matplotlib"]
    },
    {
      title: "Interests & Knowledge",
      items: ["Equity Trading", "FinTech & Web3", "AI Applications", "Banking", "Cryptocurrency"]
    },
    {
      title: "Languages",
      items: ["English (Proficient)", "Cantonese (Native)", "Mandarin (Native)", "Spanish (Elementary)", "Korean (Elementary)"]
    }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-12 text-center">
            Skills & Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-muted/30 border border-border/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold font-heading text-foreground mb-4 pb-2 border-b border-border/50">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, i) => (
                    <Badge 
                      key={i} 
                      variant="secondary" 
                      className="bg-background text-foreground hover:bg-primary hover:text-primary-foreground font-medium py-1.5 px-3 transition-colors duration-200 border border-border/80 text-sm shadow-sm"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
