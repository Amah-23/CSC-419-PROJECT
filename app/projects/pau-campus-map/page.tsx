// app/projects/pau-campus-map/page.tsx
import Link from 'next/link';
import Navbar from '../../components/Navbar'; 

export default function MapPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/#projects" className="text-blue-600 mb-6 inline-block">&larr; Back to Projects</Link>
        
        <h1 className="text-4xl font-bold mb-4">PAU Campus Gamification</h1>
        
        <div className="w-full h-80 bg-gray-200 rounded-xl mb-8 overflow-hidden">
            <img src="/map.png" alt="PAU Map" className="w-full h-full object-cover"/>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-2">The Problem & Solution</h2>
            <p className="mb-6 text-lg leading-relaxed">
              Navigating the PAU campus can be daunting for freshers. I developed an interactive mobile game that acts as a digital twin of the university. 
              Unlike simple 2D maps, this project uses Unity's NavMesh and A* pathfinding algorithms to create AI NPCs that physically guide the player.
            </p>
            
            <h2 className="text-2xl font-bold mb-2">What I Learned</h2>
            <p className="bg-blue-50 p-6 rounded border border-blue-100">
              I mastered the integration of real-world GPS coordinates into the Unity 3D coordinate system and learned to optimize C# scripts for mobile battery performance.
            </p>
          </div>

          <div className="bg-white p-6 rounded shadow-sm h-fit">
            <h3 className="font-bold mb-4">Key Features</h3>
            <ul className="list-disc list-inside mb-6 space-y-2">
                <li>Real-time GPS integration</li>
                <li>AI Agents (A* Pathfinding)</li>
                <li>Gamified badge system</li>
            </ul>
            <a href="mailto:ugochukwuamah@gmail.com" className="block w-full text-center bg-gray-900 text-white py-3 rounded mb-3">Email Me</a>
            <a href="https://wa.me/2348123456789" className="block w-full text-center bg-green-600 text-white py-3 rounded">WhatsApp Chat</a>
          </div>
        </div>
      </main>
    </div>
  );
}