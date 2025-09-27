const LogisticsSection = () => {
  const logistics = [
    {
      title: "Who Is This For?",
      content: "Law students, junior advocates, in-house counsel, and legal professionals looking to future-proof their careers. No coding experience required.",
      icon: "👥"
    },
    {
      title: "Schedule",
      content: "Classes are held on weekends to fit your busy schedule.",
      icon: "📅"
    },
    {
      title: "Start Date",
      content: "Tentatively Mid-October 2025.",
      icon: "🚀"
    },
    {
      title: "Timings",
      content: "To be decided based on cohort consensus.",
      icon: "⏰"
    },
    {
      title: "Format",
      content: "Live online sessions via Meet, with recordings available for all classes.",
      icon: "💻"
    },
    {
      title: "Organized By",
      content: "This course is proudly presented by Lexa Prompts.",
      icon: "🏢"
    }
  ];

  return (
    <section className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Course Logistics</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about joining the program
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {logistics.map((item, index) => (
            <div key={index} className="card-interactive group">
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </h3>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed">
                {item.content}
                {item.title === "Organized By" && (
                  <a 
                    href="https://lexaprompts.lovable.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary transition-colors font-medium ml-1"
                  >
                    Lexa Prompts
                  </a>
                )}
              </p>

              {/* Interactive indicator */}
              <div className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span className="text-sm font-medium">Key Detail</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info callout */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-center">
          <h3 className="text-2xl font-bold mb-4 gradient-text">
            Flexible & Accessible Learning
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Designed for working professionals, our weekend schedule and recorded sessions ensure you never miss out on learning, 
            regardless of your busy court schedules or client commitments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LogisticsSection;