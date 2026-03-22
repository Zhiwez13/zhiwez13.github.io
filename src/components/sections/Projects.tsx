import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function Projects() {
  const projects = [
    {
      title: "Quantitative Policy Analyst Intern",
      period: "June 2024 – Sep 2025",
      organization: "Municipal Committee Policy Research Office of Dongguan",
      description: [
        "Applied statistical models (regression analysis, time series forecasting) to analyze economic and policy data, identifying key trends that influenced municipal strategies.",
        "Designed Tableau dashboards to visualize key economic indicators.",
        "Led a survey-based study on public infrastructure investment, analyzing 2,500+ responses using PCA and clustering techniques."
      ],
    },
    {
      title: "Economic Research Assistant Intern",
      period: "June 2023 – Oct 2024",
      organization: "Municipal Committee Policy Research Office of Dongguan",
      description: [
        "Analyzed multi-year economic and fiscal datasets using regression and ARIMA models.",
        "Cleaned and merged datasets from yearbooks and surveys using Python, R, and Excel.",
        "Produced charts and dashboards in Tableau and Power BI."
      ],
    },
    {
      title: "Business Development Intern",
      period: "March 2025 – Sep 2025",
      organization: "KCEX Fintech Limited",
      description: [
        "Analyzed daily cryptocurrency market data to support regional expansion.",
        "Built time-series and regression analyses.",
        "Conducted competitor benchmarking across major Web3 platforms.",
        "Tested rule-based trading strategies and evaluated return potential."
      ],
    },
    {
      title: "AI & Web Management Intern",
      period: "June 2024 – Oct 2024",
      organization: "Homes Unlimited LLC",
      description: [
        "Managed residential property datasets for internal analysis.",
        "Built Python-based data processing workflows reducing manual handling by 30%.",
        "Analyzed historical property pricing and listing data.",
        "Conducted website and customer behavior analysis using Google Analytics and Python."
      ],
    }
  ];

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-12 text-center">
            Work Experience & Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {projects.map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full rounded-xl border border-border/50 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] bg-card hover:shadow-lg transition-all duration-300 relative overflow-hidden group flex flex-col">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <CardHeader className="pb-4">
                    <div className="flex flex-col xl:flex-row justify-between xl:items-start gap-3 mb-2">
                      <CardTitle className="text-xl font-bold font-heading text-foreground">
                        {project.title}
                      </CardTitle>
                      <span className="shrink-0 text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                        {project.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground font-medium text-sm">
                      {project.organization}
                    </p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="list-disc list-outside ml-4 space-y-2 text-foreground/80 leading-relaxed text-sm md:text-base">
                      {project.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
