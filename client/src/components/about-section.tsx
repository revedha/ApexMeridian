export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            About Apex Meridian
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Apex Meridian serves as the strategic parent entity that bridges the gap between 
            innovative thinking and practical execution. We specialize in product strategy, 
            deep customer insights, and rapid prototyping methodologies that transform 
            visionary concepts into market-ready solutions.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our approach combines analytical rigor with creative problem-solving, enabling 
            our portfolio companies to navigate complex markets and deliver exceptional 
            value to their customers. Through focused investment in technology and talent, 
            we cultivate environments where breakthrough innovations can flourish.
          </p>
        </div>
      </div>
    </section>
  );
}
