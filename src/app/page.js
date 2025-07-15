import { Code2, Github, Linkedin, Mail, Terminal, Zap, ArrowRight, Star, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Mohammed Mallahi | Full Stack Developer Portfolio',
  description: 'Professional portfolio of Mohammed Mallahi, a full stack developer specializing in React, Node.js, and modern web technologies. View projects and get in touch for freelance opportunities.',
  keywords: [
    'Mohammed Mallahi',
    'Full Stack Developer',
    'Portfolio',
    'React Developer',
    'Node.js Developer',
    'Web Development',
    'Freelance Developer',
    'Frontend Development',
    'Backend Development',
    'JavaScript',
    'TypeScript',
    'Next.js',
    'MongoDB',
    'Firebase'
  ],
  openGraph: {
    title: 'Mohammed Mallahi | Full Stack Developer Portfolio',
    description: 'Professional portfolio showcasing modern web development projects and skills. Available for freelance work.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Mohammed Mallahi Portfolio'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohammed Mallahi | Full Stack Developer Portfolio',
    description: 'Professional portfolio showcasing modern web development projects and skills.'
  }
};

function HeroPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.08) 2px, transparent 0)`,
        backgroundSize: '60px 60px',
      }}></div>

      {/* Large Background Circles */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={`large-circle-${i}`}
            className="absolute rounded-full border border-white/5"
            style={{
              width: `${300 + i * 200}px`,
              height: `${300 + i * 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: 'translate(-50%, -50%)',
              animation: `float ${15 + i * 5}s infinite ${i * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Animated Dots */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-blue-500/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `pulse ${2 + Math.random() * 3}s infinite ${Math.random() * 2}s`,
              boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
            }}
          />
        ))}
      </div>

      {/* Larger Glowing Dots */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={`large-${i}`}
            className="absolute w-4 h-4 rounded-full bg-purple-500/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `pulse ${3 + Math.random() * 2}s infinite ${Math.random() * 3}s`,
              boxShadow: '0 0 30px rgba(168, 85, 247, 0.4)',
            }}
          />
        ))}
      </div>

      {/* Connected Lines */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
            style={{
              width: '200px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `fade ${4 + Math.random() * 3}s infinite ${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Rings */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <div
            key={`ring-${i}`}
            className="absolute rounded-full border border-blue-500/20"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${10 + i * 2}s infinite ${i * 1.5}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black"></div>
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full bg-black/40 backdrop-blur-xl z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30"></div>
              <div className="relative bg-black rounded-lg p-2">
                <Code2 className="w-6 h-6 text-blue-500" />
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Mohammed Mallahi</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-blue-500 transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#skills" className="hover:text-blue-500 transition-colors relative group">
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#projects" className="hover:text-blue-500 transition-colors relative group">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="hover:text-blue-500 transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[100vh] flex items-center justify-center px-4">
        <HeroPattern />
        <div className="container pt-8 mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Available for freelance work
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Full Stack Developer
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Crafting modern web experiences with cutting-edge technologies and pixel-perfect designs
          </p>
          <div className="flex justify-center space-x-8">
            <a href="#contact" className="group relative px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg overflow-hidden text-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-2">
                Get in Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a href="#projects" className="px-10 py-5 border border-white/10 rounded-lg hover:bg-white/5 transition-colors flex items-center gap-2 text-lg">
              View Projects
              <Star className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Mastering the art of web development with modern technologies and best practices</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20">
              <div className="relative mb-6">
                <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Terminal className="w-12 h-12 text-blue-500 relative" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Backend Development</h3>
              <p className="text-gray-400 leading-relaxed">Building robust and scalable server-side applications with Node.js, Python, and modern databases</p>
            </div>
            <div className="group p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20">
              <div className="relative mb-6">
                <div className="absolute -inset-4 bg-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Code2 className="w-12 h-12 text-purple-500 relative" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
              <p className="text-gray-400 leading-relaxed">Creating beautiful and responsive user interfaces with React, Vue, and modern CSS frameworks</p>
            </div>
            <div className="group p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20">
              <div className="relative mb-6">
                <div className="absolute -inset-4 bg-cyan-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Zap className="w-12 h-12 text-cyan-500 relative" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Machine Learning</h3>
              <p className="text-gray-400 leading-relaxed">Building machine learning models with Python and TensorFlow</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Showcasing my best work and technical achievements</p>
          </div>
          <div className="flex flex-col gap-8">
            {/* web app solution for an agency to sell cars, the advnatges is that the app will show more technical details about the cars in a UI/UX optimized and friendly way, also it will have a scheduluggn process simple and clean */}
            {/* Project 1 */}
            <div className="group rounded-2xl overflow-hidden bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 grid grid-cols-1 md:grid-cols-2 min-h-[18rem]">
              {/* Image */}
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden flex items-center justify-center h-full min-h-[18rem]">
                {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:scale-110 transition-transform duration-500"></div> */}
                <img src='/images/projects/autovolo.png' className='h-full object-cover' />
              </div>
              {/* Text Content */}
              <div className="p-8 flex flex-col justify-center h-full">
                <h3 className="text-2xl font-semibold mb-4">AutoVolo</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">A web app solution for car agencies to sell vehicles. The app displays rich technical details about each car in a UI/UX optimized and friendly way, and features a simple, clean scheduling process for test drives or appointments. <span className='block mt-2'>Built with <b>Next.js</b> and <b>Tailwind CSS</b>.</span></p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-xs">React</span>
                  <span className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 text-xs">Node.js</span>
                  <span className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-xs">MongoDB</span>
                </div>
                <div>

                  <a
                    href="/projects/autovolo"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-semibold shadow hover:opacity-90 transition-opacity text-base group mt-2"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
            {/* Project 2 */}
            <div className="group rounded-2xl overflow-hidden bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 grid grid-cols-1 md:grid-cols-2 min-h-[18rem]">
              {/* Image */}
              <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 relative overflow-hidden flex items-center justify-center h-full min-h-[18rem]">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 group-hover:scale-110 transition-transform duration-500"></div>
                {/* You can add an <img> or <Image> here for a real project image */}
              </div>
              {/* Text Content */}
              <div className="p-8 flex flex-col justify-center h-full">
                <h3 className="text-2xl font-semibold mb-4">Task Management App</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">A collaborative project management tool with real-time updates and team collaboration features</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 text-xs">Vue.js</span>
                  <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-xs">Firebase</span>
                  <span className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-xs">Tailwind</span>
                </div>
                <div>

                  <a
                    href="https://example.com/taskapp" // Replace with real project URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg text-white font-semibold shadow hover:opacity-90 transition-opacity text-sm group"
                  >
                    View Project
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="relative rounded-2xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.1) 1px, transparent 0)`,
                backgroundSize: '40px 40px',
              }}></div>
            </div>

            {/* Content */}
            <div className="relative p-8 md:p-12 flex flex-col items-center text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Create?</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                Let's build something amazing together. I'm ready to turn your ideas into reality!
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="#contact" className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center gap-2 text-lg font-semibold">
                    Start Your Project
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                <a href="mailto:contact@example.com" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors flex items-center gap-2 text-lg font-semibold">
                  <Mail className="w-5 h-5" />
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-400">Let's discuss your next project or opportunity</p>
          </div>
          <div className="flex justify-center space-x-8 mb-12">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group">
              <div className="relative">
                <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Github className="w-8 h-8 relative text-gray-400 group-hover:text-blue-500 transition-colors" />
              </div>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group">
              <div className="relative">
                <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Linkedin className="w-8 h-8 relative text-gray-400 group-hover:text-blue-500 transition-colors" />
              </div>
            </a>
            <a href="mailto:contact@example.com" className="group">
              <div className="relative">
                <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Mail className="w-8 h-8 relative text-gray-400 group-hover:text-blue-500 transition-colors" />
              </div>
            </a>
          </div>
          <form action="https://formspree.io/f/xyzgqbrp" method="POST" className="space-y-6">
            <div className="group">
              <input type="text" placeholder="Your Name" className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none transition-colors" />
            </div>
            <div className="group">
              <input type="tel" placeholder="Your telephone" className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none transition-colors" />
            </div>
            <div className="group">
              <textarea placeholder="Your Message" rows="4" className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none transition-colors"></textarea>
            </div>
            <button type="submit" className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer">
              Send Message
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="container mx-auto text-center text-gray-400">
          <p>© 2025 Mohammed Mallahi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App;
