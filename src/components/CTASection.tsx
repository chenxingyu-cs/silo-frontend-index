import { Button } from "@/components/ui/button";
import { SignedIn, Waitlist, UserButton } from "@clerk/clerk-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-card relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold font-heading animate-fade-in">
            <span className="bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
              Maximize Your Wealth
            </span>
            <br />
            <span className="text-foreground">with Intelligent Asset Management.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-fade-in-up max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
            Join thousands of investors who are already using AI to optimize their portfolios and minimize taxes across all asset classes.
          </p>

          <div className="pt-8 animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <SignedIn>
              <div className="flex items-center gap-4">
                <span className="text-success text-xl">You're on the waitlist!</span>
                <UserButton />
              </div>
            </SignedIn>
            <div className="flex justify-center">
              <Waitlist 
                appearance={{
                  elements: {
                    formButtonPrimary: "bg-gradient-to-r from-primary-glow to-secondary hover:from-secondary hover:to-accent text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300",
                    card: "bg-transparent shadow-none border-none",
                    headerTitle: "text-2xl font-bold text-foreground mb-2",
                    headerSubtitle: "text-muted-foreground mb-6",
                    formFieldLabel: "text-foreground font-medium mb-2 block",
                    formFieldInput: "bg-background/50 border-border text-foreground placeholder:text-muted-foreground",
                    footer: "hidden",
                    footerAction: "hidden"
                  }
                }}
              />
            </div>
          </div>

          {/* Trust Signals */}
          <div className="pt-12 space-y-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full" />
                <span>Bank-level security</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Real-time updates</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <span>AI-powered insights</span>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground/70">
              No credit card required • Early access limited to first 1,000 users
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Neural Flow */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-neural-flow" />
        <div className="absolute bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent animate-neural-flow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent animate-neural-flow" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
};

export default CTASection;