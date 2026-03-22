import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto space-y-8"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white">
            Let's Connect
          </h2>
          <p className="text-lg md:text-xl text-white/90 font-medium max-w-lg mx-auto leading-relaxed">
            I am currently open to new opportunities, internships, and collaborations. Let's discuss how we can work together!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button size="lg" variant="outline" className="rounded-xl w-full sm:w-auto h-14 px-8 text-lg font-medium shadow-md transition-all duration-300 bg-white border-white text-[#9B8EC7] hover:-translate-y-1 hover:shadow-xl hover:bg-transparent hover:text-white" asChild>
              <a href="mailto:zhiwez13@gmail.com" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                zhiwez13@gmail.com
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-xl w-full sm:w-auto h-14 px-8 text-lg font-bold border-white text-white hover:bg-white hover:text-[#9B8EC7] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 bg-transparent" asChild>
              <a href="tel:6149278471" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                (614) 927-8471
              </a>
            </Button>
          </div>
          
          <div className="pt-12 mt-12 border-t border-white/20 text-white/80 text-sm font-medium flex flex-col items-center">
            <p className="font-heading text-xl font-bold text-white mb-2">ZZ.</p>
            <p>Irvine, California</p>
            <p className="mt-4 font-normal text-xs opacity-80">© {new Date().getFullYear()} Zhiwei Zhang. Designed with clean intent.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
