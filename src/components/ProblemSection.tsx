const ProblemSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground animate-fade-in">
            Your portfolio is your greatest opportunity.{" "}
            <span className="bg-gradient-to-r from-destructive to-warning bg-clip-text text-transparent">
              It's also your biggest challenge.
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-up max-w-3xl mx-auto" style={{ animationDelay: '0.2s' }}>
            You've built substantial wealth across stocks, bonds, real estate, and alternative investments. 
            But managing the tax implications across multiple asset classes feels overwhelming. Rebalancing, 
            tax-loss harvesting, and optimal timing decisions require expertise you don't have time to develop.
          </p>

          <div className="grid md:grid-cols-3 gap-8 pt-12">
            {[
              {
                title: "Tax Complexity",
                description: "How do I minimize taxes across all my investments?",
                icon: "📊"
              },
              {
                title: "Rebalancing Confusion", 
                description: "When should I adjust my asset allocation?",
                icon: "⚖️"
              },
              {
                title: "Timing Uncertainty",
                description: "What's the optimal time to buy, sell, or harvest losses?",
                icon: "⏰"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="p-6 bg-glass/60 backdrop-blur-md rounded-xl border border-glass-border/50 shadow-glass animate-scale-in hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;