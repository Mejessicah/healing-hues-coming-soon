import { FloatingIcons } from "@/components/FloatingIcons";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4">
      <FloatingIcons />
      
      <main className="relative z-10 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
          Dubai-Hospital.com – Coming Soon
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          We are working on something great! Stay tuned for updates.
        </p>

        <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <ContactSection />
      </main>

      <footer className="absolute bottom-4 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Dubai-Hospital.com. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;