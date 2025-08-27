import { BarChart3, Zap, ExternalLink } from "lucide-react";

export default function VenturesSection() {
  return (
    <section id="ventures" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Our Ventures
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Two distinct yet complementary ventures driving innovation in data strategy and rapid prototyping.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Signalyze Card */}
          <div className="bg-white border border-border rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Signalyze</h3>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              <strong>Vision:</strong> Helping businesses turn data into strategy and customer insights. 
              We transform complex datasets into actionable intelligence that drives growth and competitive advantage.
            </p>

            <button
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-200"
              data-testid="link-signalyze"
            >
              Learn More
              <ExternalLink className="w-4 h-4 ml-1" />
            </button>
          </div>

          {/* Apex Labs Card */}
          <div className="bg-white border border-border rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Apex Labs</h3>
            </div>

            <div className="text-muted-foreground mb-6 leading-relaxed">
              <p className="mb-4">
                <strong>Vision:</strong> Rapid prototyping & execution powered by AI agents in voice, 
                chat, and mobile platforms. We accelerate the journey from concept to market-ready product.
              </p>
              <p>
                Our flagship product{" "}
                <a
                  href="https://focara.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors duration-200"
                  data-testid="link-focara"
                >
                  Focara
                </a>{" "}
                is a digital wellness tool designed specifically for the "Frustrated Optimizer" - 
                helping ambitious individuals maintain focus and achieve their goals.
              </p>
            </div>

            <button
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-200"
              data-testid="link-apex-labs"
            >
              Learn More
              <ExternalLink className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
