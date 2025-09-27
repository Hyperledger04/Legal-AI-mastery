import { useState } from "react";

const CurriculumSection = () => {
  const [activeWeek, setActiveWeek] = useState<number | null>(null);

  const curriculum = [
    {
      week: 1,
      title: "Foundations of AI in Law",
      description: "Recap of Gen AI, LLMs, and RAG. Architecting an AI solution for a legal problem.",
      details: "Deep dive into the fundamentals of generative AI, large language models, and retrieval-augmented generation specifically for legal applications."
    },
    {
      week: 2,
      title: "Advanced Prompt Engineering",
      description: "Mastering structured outputs, function calling, and prompt chaining for complex legal queries.",
      details: "Learn advanced prompting techniques that enable precise legal analysis and complex reasoning chains."
    },
    {
      week: 3,
      title: "Deep Dive into AI for Legal Research",
      description: "Advanced verification frameworks, finding niche case law, and automating research summaries.",
      details: "Master AI-powered legal research techniques that dramatically improve accuracy and speed."
    },
    {
      week: 4,
      title: "Building Your Personal AI Research Assistant",
      description: "A practical, no-code workshop to create a secure \"legal brain\" that queries your own case files.",
      details: "Hands-on workshop to build your own AI assistant tailored to your practice and case history."
    },
    {
      week: 5,
      title: "AI-Powered Drafting & Your Smart Clause Library",
      description: "Draft entire agreements with AI and build an intelligent, searchable library of your best clauses.",
      details: "Transform your drafting process with AI and create a powerful, searchable clause database."
    },
    {
      week: 6,
      title: "AI-Assisted Review, Redlining & Negotiation",
      description: "Use AI to instantly spot risky clauses, compare versions, and generate negotiation cheat sheets.",
      details: "Master AI tools for contract review, risk analysis, and negotiation strategy development."
    },
    {
      week: 7,
      title: "Mastering Legal Automation with N8N",
      description: "Go beyond basics. Build multi-step workflows for client intake, document generation, and case management.",
      details: "Advanced automation workflows that handle complex legal processes from intake to delivery."
    },
    {
      week: 8,
      title: "The Capstone Project - Build Your First Legal AI Agent",
      description: "Synthesize all your skills to build a complete, automated contract review and analysis agent.",
      details: "Put it all together in a comprehensive capstone project that demonstrates your new AI mastery."
    },
    {
      week: 9,
      title: "Deploying, Scaling, and the Business of Legal AI",
      description: "Learn how to integrate your agents into a real practice, manage client data securely, and price AI-powered services.",
      details: "Business strategy, deployment best practices, and pricing models for AI-enhanced legal services."
    }
  ];

  return (
    <section className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Your <span className="gradient-text">9-Week Transformation</span> Agenda
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A week-by-week breakdown of the practical skills you will master
          </p>
        </div>

        <div className="relative">
          {/* Timeline connector */}
          <div className="timeline-connector"></div>
          
          <div className="space-y-8">
            {curriculum.map((item, index) => (
              <div
                key={item.week}
                className="relative flex items-start gap-8 cursor-pointer group"
                onClick={() => setActiveWeek(activeWeek === item.week ? null : item.week)}
              >
                {/* Week number circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {item.week}
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 card-interactive">
                  <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    Week {item.week}: {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  
                  {/* Expandable details */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    activeWeek === item.week ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pt-4 border-t border-border">
                      <p className="text-foreground">{item.details}</p>
                    </div>
                  </div>

                  {/* Expand indicator */}
                  <div className="flex items-center gap-2 mt-4 text-primary">
                    <span className="text-sm font-medium">
                      {activeWeek === item.week ? 'Show less' : 'Learn more'}
                    </span>
                    <div className={`transform transition-transform duration-300 ${
                      activeWeek === item.week ? 'rotate-180' : ''
                    }`}>
                      ↓
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;