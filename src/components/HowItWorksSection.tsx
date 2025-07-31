const HowItWorksSection = () => {
  const steps = [
    {
      step: "01",
      title: "Connect Your Portfolio",
      description: "Securely link all your investment accounts and asset platforms in one place.",
      icon: "🔗"
    },
    {
      step: "02", 
      title: "Analyze & Optimize",
      description: "AI analyzes your entire portfolio to identify tax savings and optimization opportunities.",
      icon: "🧠"
    },
    {
      step: "03",
      title: "Execute Strategically", 
      description: "Implement recommendations with confidence, knowing the exact impact on your wealth.",
      icon: "🎯"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-card to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-secondary to-transparent" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-accent to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6 animate-fade-in">
            Simple. Intelligent. Powerful.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
            Three steps to transform your asset management from complex to effortless
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-primary via-secondary to-accent opacity-30 z-0" />
                )}

                <div className="relative bg-glass/60 backdrop-blur-md rounded-xl p-8 border border-glass-border/50 shadow-glass hover:shadow-glow hover:scale-105 transition-all duration-300 group">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm shadow-glow">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="text-6xl mb-6 group-hover:animate-float">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom decorative elements */}
        <div className="flex justify-center items-center space-x-8 mt-16 opacity-30">
          <div className="w-2 h-2 bg-primary rounded-full animate-float" style={{ animationDelay: '0s' }} />
          <div className="w-1 h-1 bg-secondary rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
          <div className="w-1.5 h-1.5 bg-accent rounded-full animate-float" style={{ animationDelay: '1s' }} />
          <div className="w-1 h-1 bg-primary-glow rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;