const FinalCTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>
      <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-secondary/10 blur-3xl animate-float" style={{animationDelay: '1s'}}></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          Don't Just Witness the Future of Law.
          <br />
          <span className="gradient-text">Build It.</span>
        </h2>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
          Seats are limited, especially the early bird spots. Secure your place today and gain an undeniable advantage in your legal career.
        </p>

        {/* Urgency indicators */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-accent/20">
            <div className="w-3 h-3 rounded-full bg-accent animate-pulse"></div>
            <span className="text-accent font-medium">Early Bird Slots: 15 Remaining</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-primary/20">
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
            <span className="text-primary font-medium">Course Starts: Mid-October 2025</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <a 
            href="https://rzp.io/rzp/rUCK6mBw" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-hero text-xl px-12 py-6 animate-pulse-glow"
          >
            🎯 Claim Your 25% Early Bird Discount
          </a>
          
          <a 
            href="https://rzp.io/rzp/8tQ2A4S" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary text-lg px-8 py-4"
          >
            💳 Start with a Partial Payment
          </a>
        </div>

        {/* Final value proposition */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="p-6 rounded-xl bg-card/50 border border-primary/10 hover:border-primary/30 transition-all hover:scale-105">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="font-bold mb-2 text-foreground">Immediate Impact</h3>
            <p className="text-sm text-muted-foreground">Start implementing AI in your practice from Week 1</p>
          </div>
          
          <div className="p-6 rounded-xl bg-card/50 border border-secondary/10 hover:border-secondary/30 transition-all hover:scale-105">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="font-bold mb-2 text-foreground">Future-Proof Skills</h3>
            <p className="text-sm text-muted-foreground">Master the tools that will define legal practice</p>
          </div>
          
          <div className="p-6 rounded-xl bg-card/50 border border-accent/10 hover:border-accent/30 transition-all hover:scale-105">
            <div className="text-3xl mb-4">💎</div>
            <h3 className="font-bold mb-2 text-foreground">Exclusive Access</h3>
            <p className="text-sm text-muted-foreground">Join an elite community of AI-powered legal professionals</p>
          </div>
        </div>

        {/* Trust signals */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🏆</span>
            <span>Industry-Leading Curriculum</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔒</span>
            <span>Secure & Confidential</span>
          </div>
        </div>

        {/* Powered by */}
        <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-muted/10 to-muted/5 border border-muted/20">
          <p className="text-sm text-muted-foreground mb-2">Proudly Powered By</p>
          <a 
            href="https://lexaprompts.lovable.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg font-bold gradient-text hover:scale-105 transition-transform inline-block"
          >
            LexaPrompts - AI Tools for Legal Excellence
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;