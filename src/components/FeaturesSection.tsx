import { useState } from "react";
import { Button } from "@/components/ui/button";

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      title: "Intelligent Tax Withholding & Planning",
      description: "AI-powered analysis determines optimal tax withholding strategies across your entire portfolio, including stocks, bonds, real estate, and alternative investments.",
      visual: (
        <div className="bg-glass/40 backdrop-blur-sm rounded-lg p-6 border border-glass-border/30">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Recommended Tax Reserve</span>
              <span>$125,000</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '80%' }} />
            </div>
            <div className="grid grid-cols-3 gap-3 text-sm">
              <div>
                <div className="text-success font-semibold">Stocks</div>
                <div className="text-foreground">$45k</div>
              </div>
              <div>
                <div className="text-primary font-semibold">Real Estate</div>
                <div className="text-foreground">$65k</div>
              </div>
              <div>
                <div className="text-secondary font-semibold">Bonds</div>
                <div className="text-foreground">$15k</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Portfolio-Wide Tax Optimization",
      description: "Get AI recommendations on asset allocation, rebalancing, and timing decisions to minimize your overall tax burden across all investment accounts and asset classes.",
      visual: (
        <div className="bg-glass/40 backdrop-blur-sm rounded-lg p-6 border border-glass-border/30">
          <div className="space-y-4">
            <div className="text-sm text-muted-foreground mb-4">Optimization Recommendations</div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-success/20 rounded">
                <span className="text-sm">Harvest tax losses in tech sector</span>
                <span className="text-success font-semibold">-$12k tax</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-primary/20 rounded">
                <span className="text-sm">Rebalance to tax-advantaged accounts</span>
                <span className="text-primary font-semibold">-$8k tax</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-secondary/20 rounded">
                <span className="text-sm">Defer REIT distributions</span>
                <span className="text-secondary font-semibold">-$5k tax</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Proactive Wealth Management Insights",
      description: "Receive personalized AI-driven advice on asset allocation, tax-loss harvesting, estate planning, and market opportunities tailored to your complete financial picture.",
      visual: (
        <div className="bg-glass/40 backdrop-blur-sm rounded-lg p-6 border border-glass-border/30">
          <div className="space-y-3">
            <div className="text-sm text-muted-foreground mb-4">Recent Insights</div>
            {[
              { insight: "Diversify into international bonds", savings: "Risk reduction", color: "bg-success" },
              { insight: "Consider municipal bonds for tax savings", savings: "$18,000", color: "bg-primary" },
              { insight: "Optimize 401(k) contribution timing", savings: "$7,500", color: "bg-secondary" }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3 text-sm">
                <div className={`w-3 h-3 rounded-full ${item.color}`} />
                <div className="flex-1">
                  <div className="font-medium text-foreground">{item.insight}</div>
                  <div className="text-muted-foreground">Benefit: {item.savings}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6 animate-fade-in">
            AI-Powered Asset Management
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Three core capabilities that optimize your entire investment portfolio and maximize your wealth
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-col md:flex-row justify-center mb-12 space-y-2 md:space-y-0 md:space-x-4">
            {features.map((feature, index) => (
              <Button
                key={index}
                variant={activeTab === index ? "hero" : "glass"}
                size="lg"
                onClick={() => setActiveTab(index)}
                className="text-left justify-start max-w-sm"
              >
                <span className="truncate">{feature.title.split(' ')[0]} {feature.title.split(' ')[1]}</span>
              </Button>
            ))}
          </div>

          {/* Active Feature */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-3xl font-bold text-foreground">
                {features[activeTab].title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {features[activeTab].description}
              </p>
            </div>
            
            <div className="animate-scale-in">
              {features[activeTab].visual}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;