import React from 'react'

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
              <a href="#home" className="text-blue-800 font-semibold">Home</a>
              <a href="#about" className="text-slate-600 hover:text-blue-800 transition-colors duration-300">About</a>
              <a href="#ventures" className="text-slate-600 hover:text-blue-800 transition-colors duration-300">Ventures</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-800 transition-colors duration-300">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100">
          <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 animate-fade-in-up">
              Shaping the Future at the Intersection of 
              <span className="text-blue-800"> Strategy and Execution</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Apex Meridian is a visionary holding company operating at the intersection of data intelligence 
              and AI-powered execution, building ventures that solve real problems with precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
              <button className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors duration-300">
                Explore Our Ventures
              </button>
              <button className="border border-blue-800 text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
                Get In Touch
              </button>
            </div>
          </div>
        </section>

        <section id="ventures" className="py-20 bg-white">
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

        {/* About Section */}
        <section id="about" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About Apex Meridian</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We are a strategic holding company that identifies, builds, and scales high-impact ventures at the intersection of data intelligence and AI-powered execution.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-blue-800 rounded"></div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Strategic Vision</h3>
                <p className="text-slate-600">Long-term thinking meets actionable execution in every venture we build and scale.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-emerald-600 rounded"></div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Data-Driven</h3>
                <p className="text-slate-600">Every decision is backed by data intelligence and real-world market validation.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-purple-600 rounded"></div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Innovation Focus</h3>
                <p className="text-slate-600">Cutting-edge technology and AI-powered solutions that solve real-world problems.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Get In Touch</h2>
              <p className="text-xl text-slate-600">
                Ready to explore partnership opportunities or learn more about our ventures?
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-blue-800 rounded mr-4"></div>
                      <span className="text-slate-600">hello@apexmeridian.com</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-emerald-600 rounded mr-4"></div>
                      <span className="text-slate-600">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-purple-600 rounded mr-4"></div>
                      <span className="text-slate-600">San Francisco, CA</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4">Partnership Opportunities</h4>
                    <p className="text-slate-600 mb-6">
                      We're always looking for strategic partners, innovative startups, and exceptional talent to join our ecosystem.
                    </p>
                    <button className="bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors duration-300 w-full">
                      Schedule a Meeting
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded transform rotate-45"></div>
                </div>
                <span className="ml-3 text-lg font-bold">Apex Meridian</span>
              </div>
              <p className="text-slate-400 mb-4">
                Shaping the future at the intersection of strategy and execution through innovative ventures.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Ventures</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Signalyze</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Apex Labs</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-400">
                <li>hello@apexmeridian.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">© 2025 Apex Meridian. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Privacy</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}