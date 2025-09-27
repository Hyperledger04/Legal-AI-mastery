import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToPricing = () => {
    const pricingElement = document.getElementById('pricing');
    pricingElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-primary/20 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-secondary/20 blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-accent/20 blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="gradient-text">AI Agent Mastery</span>
          <br />
          <span className="text-foreground">for Legal Practice</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
          The 9-Week, Hands-On Program to Build, Deploy, and Scale AI Agents in Your Legal Workflow. 
          <br className="hidden md:block" />
          <span className="gradient-text font-semibold">Go from user to builder.</span>
        </p>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
          <button 
            onClick={scrollToPricing}
            className="btn-hero text-xl px-12 py-6 animate-pulse-glow"
          >
            Enroll Now for ₹1999
          </button>
          
          <a 
            href="https://lexaprompts.lovable.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary text-lg px-8 py-4"
          >
            Learn More About LexaPrompts
          </a>
        </div>

        {/* Early bird notice */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-primary/20 backdrop-blur-sm">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
          <span className="text-accent font-medium">Early bird offer available for the first 15 registrants!</span>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full animate-bounce mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;