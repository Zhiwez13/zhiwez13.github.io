import { motion } from "framer-motion";
import { GraduationCap, BarChart3, Code2, LineChart } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Mathematics Undergrad",
      description: "University of California, Irvine"
    },
    {
      icon: <LineChart className="w-5 h-5" />,
      title: "Economic Analysis",
      description: "Research projects for local municipalities"
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "FinTech Data",
      description: "Critical analysis of crypto market trends"
    },
    {
      icon: <Code2 className="w-5 h-5" />,
      title: "Technical Workflows",
      description: "Optimizing data processing using Python"
    }
  ];

  return (
    <section id="about" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-40 -left-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4 text-center">
            About Me
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 space-y-6 text-foreground/80 leading-relaxed"
          >
            <div className="bg-card rounded-3xl p-8 md:p-10 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] border border-border/50 relative overflow-hidden group">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none transition-transform duration-700 group-hover:scale-150" />
              
              <div className="relative z-10 space-y-6">
                <p className="text-lg md:text-xl font-medium text-foreground leading-snug">
                  I am a highly driven and analytical student currently pursuing my undergraduate degree in Mathematics at the University of California, Irvine. 
                </p>
                <div className="w-12 h-1 bg-border rounded-full" />
                <p>
                  Throughout my academic and professional journey, I have come to develop an insatiable curiosity towards using data to inform critical decision-making and understand complex systems.
                </p>
                <p>
                  With experience ranging from critical analysis of cryptocurrency market trends in FinTech to rigorous economic analysis for research projects with the local municipality, I have come to develop a critical eye towards using data to inform decision-making. 
                </p>
                <p className="font-medium text-foreground/90 italic">
                  Whether it is working on complex models, optimizing data processing workflows using Python, or helping students understand the complexities of linear algebra, I am always on a mission to simplify complexity.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 space-y-4"
          >
            {highlights.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card/40 hover:bg-card p-5 rounded-2xl border border-border/50 flex items-start gap-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1 group"
              >
                <div className="p-3.5 bg-muted rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {item.icon}
                </div>
                <div className="pt-1">
                  <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider mb-1">{item.title}</h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
