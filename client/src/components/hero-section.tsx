export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="pt-24 pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo Placeholder */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-secondary rounded-xl flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-primary">AM</span>
            </div>
            <h1 className="text-xl font-semibold text-primary">Apex Meridian</h1>
          </div>

          {/* Main Tagline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight max-w-4xl mx-auto">
            Shaping the future at the intersection of strategy and execution.
          </h2>

          {/* Subtext */}
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Parent company of Signalyze & Apex Labs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("ventures")}
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 transition-colors duration-200"
              data-testid="button-explore-ventures"
            >
              Explore Our Ventures
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center justify-center px-8 py-3 border border-border text-base font-medium rounded-md text-foreground bg-background hover:bg-secondary transition-colors duration-200"
              data-testid="button-get-in-touch"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
