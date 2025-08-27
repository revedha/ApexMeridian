export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded transform rotate-45"></div>
              </div>
              <span className="ml-3 text-xl font-bold text-slate-900">Apex Meridian</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-blue-800 font-semibold">Home</a>
              <a href="/about" className="text-slate-600 hover:text-blue-800 transition-colors duration-300">About</a>
              <a href="/ventures" className="text-slate-600 hover:text-blue-800 transition-colors duration-300">Ventures</a>
              <a href="/contact" className="text-slate-600 hover:text-blue-800 transition-colors duration-300">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100">
          <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Shaping the Future at the Intersection of 
              <span className="text-blue-800"> Strategy and Execution</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Apex Meridian is a visionary holding company operating at the intersection of data intelligence 
              and AI-powered execution, building ventures that solve real problems with precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors duration-300">
                Explore Our Ventures
              </button>
              <button className="border border-blue-800 text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
                Get In Touch
              </button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Ventures</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We build and scale ventures that harness the power of data and AI to create meaningful impact
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
                <div className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-white rounded"></div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Signalyze</h3>
                <p className="text-slate-600 mb-6">
                  Advanced data strategy and customer insights platform that transforms raw data into actionable intelligence
                </p>
                <button className="text-blue-800 font-semibold hover:underline">Learn More →</button>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-xl">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-white rounded"></div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Apex Labs</h3>
                <p className="text-slate-600 mb-6">
                  Rapid prototyping and development studio focused on building innovative solutions with cutting-edge technology
                </p>
                <button className="text-emerald-600 font-semibold hover:underline">Learn More →</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}