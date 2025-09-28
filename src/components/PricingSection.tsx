import PaymentOptions from "./PaymentOptions";

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Standard Price Box */}
          <div className="card-interactive group relative overflow-hidden">
            {/* Popular badge */}
            <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-bl-2xl">
              <span className="font-bold">Most Popular</span>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Full Course Access</h3>
              
              {/* Price */}
              <div className="mb-6">
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

              <div className="btn-hero w-full text-center block cursor-pointer" onClick={() => document.getElementById('payment-options')?.scrollIntoView({ behavior: 'smooth' })}>
                Enroll Now - Full Access
              </div>
            </div>
          </div>

          {/* Special Offers Box */}
          <div className="space-y-6">
            {/* Early Bird Offer */}
            <div className="card-interactive group">
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Early Bird Discount</h3>
                    <p className="text-muted-foreground">
                      Be one of the first 15 to register and get a <span className="font-bold text-accent">flat 25% OFF</span> your enrollment.
                    </p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="text-3xl font-bold text-accent">₹1499</span>
                  <span className="text-lg text-muted-foreground line-through ml-2">₹1999</span>
                </div>

                <div className="btn-secondary w-full text-center block cursor-pointer" onClick={() => document.getElementById('payment-options')?.scrollIntoView({ behavior: 'smooth' })}>
                  Claim Your 25% Early Bird Discount
                </div>
              </div>
            </div>

            {/* Flexible Payments */}
            <div className="card-interactive group">
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💳</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Flexible Payments</h3>
                    <p className="text-muted-foreground">
                      Need flexibility? We offer a partial payment option to help you get started.
                    </p>
                  </div>
                </div>

                <div className="mb-4 p-3 bg-muted/20 rounded-lg border border-muted/30">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-bold text-foreground">Note:</span> If you opt for partial payments, 
                    you will be given limited access and you cannot avail the early bird offer.
                  </p>
                </div>

                <div className="btn-secondary w-full text-center block cursor-pointer" onClick={() => document.getElementById('payment-options')?.scrollIntoView({ behavior: 'smooth' })}>
                  Start with a Partial Payment
                </div>
              </div>
            </div>

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

        {/* Payment Options */}
        <div id="payment-options">
          <PaymentOptions />
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