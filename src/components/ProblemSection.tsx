const ProblemSection = () => {
  return (
    <section className="section-padding relative">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          <span className="gradient-text">The Legal Field is Changing.</span>
          <br />
          Are You Ready?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { title: "Manual Research", problem: "is slow", icon: "📚" },
            { title: "Contract Review", problem: "is tedious", icon: "📄" },
            { title: "Repetitive Tasks", problem: "consume billable hours", icon: "⏰" },
            { title: "Traditional Methods", problem: "limit growth", icon: "📈" }
          ].map((item, index) => (
            <div key={index} className="card-interactive text-center group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground">{item.problem}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-8">
            Generative AI is no longer a novelty; it's a fundamental shift. This course gives you the power to 
            <span className="text-primary font-semibold"> not just use AI</span>, but to 
            <span className="gradient-text font-semibold"> build and command it</span> for an unparalleled competitive edge.
          </p>
          
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
            <p className="text-2xl font-bold gradient-text">
              Stop asking questions, start building solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;