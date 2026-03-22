import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function Projects() {
  const projects = [
    {
      title: "Business Development Intern",
      period: "March 2025 – September 2025",
      organization: "KCEX Fintech Limited",
      description: [
        "Analyzed daily cryptocurrency market data (trading volume, price movements, liquidity indicators) across 15+ major tokens to support regional expansion analysis.",
        "Built time-series and regression analyses using historical price and volume data to examine short-term volatility and market trends.",
        "Conducted competitor benchmarking across major Web3 platforms, comparing product features, fee structures, and user activity metrics.",
        "Used historical price and volume data and fundamental information to test rule-based trading strategies and evaluate excess return potential relative to market benchmarks."
      ],
    },
    {
      title: "Quantitative Policy Analyst",
      period: "June 2024 – September 2025",
      organization: "Municipal Committee Policy Research Office of Dongguan",
      description: [
        "Applied statistical models (regression analysis, time series forecasting) to analyze economic and policy data, identifying key trends that influenced municipal strategies.",
        "Designed Tableau dashboards to visualize key economic indicators, presenting findings to city officials and improving data-driven decision-making.",
        "Led a survey-based study on public infrastructure investment, analyzing 2,500+ responses using principal component analysis (PCA) and clustering techniques to prioritize funding allocations."
      ],
    },
    {
      title: "AI & Web Management Intern",
      period: "June 2024 – October 2024",
      organization: "Homes Unlimited LLC",
      description: [
        "Consolidated and managed datasets covering several hundred residential property listings, integrating pricing, location, and listing attributes for internal analysis and reporting.",
        "Built Python-based data processing workflows to automate recurring reports, reducing manual data handling by approximately 30%.",
        "Analyzed historical property pricing and listing data to identify pricing patterns, seasonality, and variation across property types and locations.",
        "Conducted website and customer behavior analysis using Google Analytics and Python to support marketing and lead-generation decisions."
      ],
    },
    {
      title: "Economic Research Assistant Intern",
      period: "June 2023 – October 2024",
      organization: "Municipal Committee Policy Research Office of Dongguan",
      description: [
        "Analyzed multi-year economic and fiscal datasets covering regional GDP, investment, and public spending indicators using regression and ARIMA models.",
        "Cleaned and merged datasets from government statistical yearbooks and survey sources, totaling hundreds to thousands of observations, using Python, R, and Excel.",
        "Produced charts and dashboards in Tableau and Power BI to compare trends across regions and time periods for internal research use."
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
