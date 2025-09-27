import lexaPromptsLogo from "@/assets/lexaprompts-logo-new.png";
import n8nLogo from "@/assets/n8n-logo-new.png";
import chatgptLogo from "@/assets/chatgpt-logo-new.png";

const ResourceSection = () => {
  const resources = [
    {
      icon: lexaPromptsLogo,
      title: "Exclusive Beta Access",
      description: "Be the first to use and shape \"Lexaprompts,\" our flagship platform. Includes a chance for discounted subscriptions.",
      highlight: "Beta Access"
    },
    {
      icon: lexaPromptsLogo,
      title: "200+ Indian Legal Prompts",
      description: "Ready-to-use, plug-and-play prompts specifically designed for the Indian legal context.",
      highlight: "Indian Focused"
    },
    {
      icon: chatgptLogo,
      title: "2,000+ Business & Marketing Prompts",
      description: "Grow your practice with expert prompts for marketing, branding, and business development.",
      highlight: "Business Growth"
    },
    {
      icon: "📚",
      title: "10,000+ Legal Drafts",
      description: "A massive knowledge base of contracts and legal documents to train your custom AI agents on.",
      highlight: "Massive Library"
    },
    {
      icon: n8nLogo,
      title: "6,000+ N8N Workflows",
      description: "A huge library of pre-built automation workflows for chatbots, AI agents, personal assistants, and more.",
      highlight: "Ready to Use"
    }
  ];

  return (
    <section className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            This is More Than a Course.
            <br />
            <span className="gradient-text">It's Your Complete AI Arsenal.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            We provide you with everything you need to succeed. All attendees receive lifetime access to an unparalleled collection of resources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="card-interactive group relative overflow-hidden">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  {typeof resource.icon === 'string' ? (
                    <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                      {resource.icon}
                    </div>
                  ) : (
                    <img 
                      src={resource.icon} 
                      alt={`${resource.title} logo`}
                      className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300 hover-glow filter brightness-110 contrast-110"
                    />
                  )}
                </div>

                {/* Highlight badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
                  {resource.highlight}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {resource.description}
                </p>

                {/* Interactive elements */}
                <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">Included in course</span>
                  <div className="w-1 h-1 rounded-full bg-primary"></div>
                  <span className="text-sm">Lifetime access</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "18,000+", label: "Total Assets" },
            { number: "200+", label: "Legal Prompts" },
            { number: "6,000+", label: "Workflows" },
            { number: "∞", label: "Lifetime Access" }
          ].map((stat, index) => (
            <div key={index} className="p-6 rounded-xl bg-card/50 border border-primary/10 hover:border-primary/30 transition-colors">
              <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceSection;