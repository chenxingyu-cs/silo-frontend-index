import { SignedIn, Waitlist, UserButton } from "@clerk/clerk-react";
import heroImage from "@/assets/hero-ai-visualization.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AI Neural Network Visualization" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background/80" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-32 w-1 h-1 bg-secondary rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-accent rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 right-20 w-1 h-1 bg-primary-glow rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold font-heading bg-gradient-to-r from-foreground via-primary-glow to-secondary bg-clip-text text-transparent leading-tight">
            Smart Asset Management. Intelligent Tax Strategy.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Silo's AI-powered platform helps you optimize your entire investment portfolio, 
            minimize taxes across all asset classes, and make data-driven financial decisions.
          </p>

          <div className="pt-8">
            <SignedIn>
              <div className="flex items-center gap-4">
                <span className="text-success">Welcome to Silo!</span>
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
                    formFieldInput: "bg-background/50 !border !border-white text-foreground placeholder:text-muted-foreground",
                    footer: "hidden",
                    footerAction: "hidden"
                  }
                }}
              />
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <p className="text-sm text-muted-foreground mb-6">
              Integrates seamlessly with your investment platforms
            </p>
            <div className="flex items-center justify-center space-x-12 opacity-60">
              <div className="px-6 py-3 bg-glass/40 backdrop-blur-sm rounded-lg border border-glass-border/30">
                <span className="text-lg font-semibold text-foreground">Schwab</span>
              </div>
              <div className="px-6 py-3 bg-glass/40 backdrop-blur-sm rounded-lg border border-glass-border/30">
                <span className="text-lg font-semibold text-foreground">Fidelity</span>
              </div>
              <div className="px-6 py-3 bg-glass/40 backdrop-blur-sm rounded-lg border border-glass-border/30">
                <span className="text-lg font-semibold text-foreground">Vanguard</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Neural Network Animation */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden z-10">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-neural-flow" />
        <div className="absolute bottom-4 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent animate-neural-flow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-8 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent animate-neural-flow" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
};

export default HeroSection;