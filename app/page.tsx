// app/page.tsx
import Link from 'next/link';
import Navbar from './components/Navbar';
import { projects } from './data';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      <main>
        {/* 1. About Section */}
        <section id="about" className="py-24 text-center px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Final Year Student</span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 mt-2 text-gray-900">
              Hi, I'm Amah Frederick Ugochukwu
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6 font-light">
              400 Level Computer Science Student @ <span className="font-medium text-blue-800">Pan-Atlantic University</span>
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
              I specialize in robust <strong>Backend Development</strong>, <strong>Database Management</strong>, and <strong>Cyber Security</strong>. 
              My passion lies in building secure systems and immersive <strong>Game Development</strong> experiences.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="#projects" className="bg-blue-700 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-800 transition shadow-lg hover:shadow-xl">
                View My Projects
              </Link>
              <Link href="#contact" className="border border-gray-300 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition">
                Contact Me
              </Link>
            </div>
          </div>
        </section>

        {/* 2. Projects Section */}
        <section id="projects" className="py-20 bg-gray-50 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">My Projects</h2>
            <p className="text-center text-gray-500 mb-12">Showcasing work in AI, Gamification, and Security.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
                  
                  {/* PROJECT IMAGE */}
                  <div className="h-48 w-full relative overflow-hidden bg-gray-200">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div> 
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.slice(0, 3).map((t) => (
                            <span key={t} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{t}</span>
                        ))}
                    </div>
                    <p className="text-gray-600 mb-6 text-sm line-clamp-3">{project.description}</p>
                    
                    <Link href={`/projects/${project.id}`} className="inline-flex items-center text-blue-600 font-semibold text-sm hover:underline">
                      View Project Details <span className="ml-1">&rarr;</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Contact Section */}
        <section id="contact" className="py-24 text-center px-4 bg-white border-t">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
            <p className="text-gray-600 mb-8">
                I am currently open to opportunities in Backend Engineering or Security analysis.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
              <a href="mailto:ugochukwuamah@gmail.com" className="flex items-center gap-2 bg-gray-900 text-white px-6 py-4 rounded-lg hover:bg-gray-800 w-full md:w-auto justify-center">
                <span>📧</span> ugochukwuamah@gmail.com
              </a>
              <a href="https://wa.me/2348123456789" className="flex items-center gap-2 border border-green-600 text-green-700 px-6 py-4 rounded-lg hover:bg-green-50 w-full md:w-auto justify-center">
                <span>📱</span> WhatsApp: 08123456789
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-10 text-center">
        <p className="mb-2">&copy; 2026 Amah Frederick Ugochukwu</p>
        <p className="text-sm">Final Year Project • Pan-Atlantic University</p>
      </footer>
    </div>
  );
}