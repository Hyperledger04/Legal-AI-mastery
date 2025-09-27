import { useState } from "react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do I need any coding knowledge?",
      answer: "Absolutely not. This course is designed for legal professionals and uses no-code tools. We focus on practical AI implementation that doesn't require programming skills."
    },
    {
      question: "What if I miss a live class?",
      answer: "No problem. All sessions are recorded and will be available for you to watch anytime. You'll have lifetime access to all course materials and recordings."
    },
    {
      question: "Will I receive a certificate?",
      answer: "Yes, upon successful completion of the capstone project, you will receive a Certificate of Completion from Lexa Prompts that validates your AI mastery skills."
    },
    {
      question: "What tools will we be using?",
      answer: "We will use a mix of publicly available AI models like ChatGPT, Claude, and simple, powerful no-code automation platforms like N8N. All tools are accessible and user-friendly."
    },
    {
      question: "Is this course suitable for solo practitioners?",
      answer: "Absolutely! Whether you're a solo practitioner, part of a large firm, or in-house counsel, the skills you'll learn are scalable and applicable to any practice size."
    },
    {
      question: "How much time do I need to dedicate weekly?",
      answer: "Plan for 3-4 hours per week: 2 hours for live sessions (weekends) and 1-2 hours for practice and assignments. All materials are designed for busy legal professionals."
    },
    {
      question: "What's included in the lifetime access?",
      answer: "Lifetime access includes all course recordings, the complete resource toolkit (18,000+ assets), future updates to materials, and ongoing access to the community forum."
    },
  ];

  return (
    <section className="section-padding relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Frequently Asked Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about the course
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="card-interactive cursor-pointer"
              onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <div className={`transform transition-transform duration-300 text-primary ${
                  openFAQ === index ? 'rotate-180' : ''
                }`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              
              <div className={`overflow-hidden transition-all duration-500 ${
                openFAQ === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
              }`}>
                <div className="pt-4 border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact for more questions */}
        <div className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
          <h3 className="text-2xl font-bold mb-4 gradient-text">
            Still Have Questions?
          </h3>
          <p className="text-muted-foreground mb-6">
            Our team is here to help you make the best decision for your legal career
          </p>
          <a 
            href="mailto:AIforlegaltech@gmail.com" 
            className="btn-secondary inline-block"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;