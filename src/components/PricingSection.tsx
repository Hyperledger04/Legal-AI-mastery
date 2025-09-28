
const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Invest in Your Future.
            <br />
            <span className="gradient-text">Enroll Today.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your legal practice with cutting-edge AI skills
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Course Information */}
          <div className="card-interactive group relative overflow-hidden">
            <div className="p-8">
              <h3 className="text-3xl font-bold mb-6 text-foreground text-center">Course Information</h3>
              
              {/* Price */}
              <div className="mb-8 text-center">
                <span className="text-5xl font-bold gradient-text">₹1999</span>
                <span className="text-muted-foreground ml-2">one-time</span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {[
                  "9 Weeks of Live Training",
                  "Complete Resource Toolkit (18,000+ assets)",
                  "Capstone Project & Certification",
                  "Exclusive Lexaprompts Beta Access",
                  "Lifetime Access to Resources",
                  "Weekend Schedule (Convenient)",
                  "All Session Recordings",
                  "Direct Instructor Support"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary text-sm">✓</span>
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Money back guarantee */}
              <div className="p-6 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10 text-center">
                <div className="text-3xl mb-2">🛡️</div>
                <h4 className="font-bold text-foreground mb-2">Satisfaction Guaranteed</h4>
                <p className="text-sm text-muted-foreground">
                  Not satisfied with the course? Get a full refund within the first week, no questions asked.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-accent">🔒</span>
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent">📞</span>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent">🏆</span>
              <span>Certificate Included</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent">♾️</span>
              <span>Lifetime Access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;