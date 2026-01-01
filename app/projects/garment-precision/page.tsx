// app/projects/garment-precision/page.tsx
import Link from 'next/link';
import Navbar from '../../components/Navbar'; 

export default function GarmentPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/#projects" className="text-blue-600 mb-6 inline-block">&larr; Back to Projects</Link>
        
        <h1 className="text-4xl font-bold mb-4">Garment Precision (AI Try-On)</h1>
        
        {/* Image */}
        <div className="w-full h-80 bg-gray-200 rounded-xl mb-8 overflow-hidden">
             {/* Make sure garment.png is in your public folder */}
            <img src="/garment.png" alt="Garment Precision" className="w-full h-full object-cover"/>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-2">The Problem & Solution</h2>
            <p className="mb-6 text-lg leading-relaxed">
              Garment Precision is an innovative fashion-tech solution designed to reduce e-commerce returns. 
              I developed a 'Nano Banana' wrapper to interface with generative AI models, allowing users to upload a photo and realistic clothing assets to see how items fit before purchasing.
            </p>
            
            <h2 className="text-2xl font-bold mb-2">What I Learned</h2>
            <p className="bg-blue-50 p-6 rounded border border-blue-100">
              I learned how to wrap complex ML inference APIs into a consumer-friendly frontend and manage heavy image-processing states in Next.js.
            </p>
          </div>

          <div className="bg-white p-6 rounded shadow-sm h-fit">
            <h3 className="font-bold mb-4">Key Features</h3>
            <ul className="list-disc list-inside mb-6 space-y-2">
                <li>AI-powered image synthesis</li>
                <li>Custom Nano Banana wrapper</li>
                <li>Real-time feedback pipeline</li>
            </ul>
            <a href="mailto:ugochukwuamah@gmail.com" className="block w-full text-center bg-gray-900 text-white py-3 rounded mb-3">Email Me</a>
            <a href="https://wa.me/2348123456789" className="block w-full text-center bg-green-600 text-white py-3 rounded">WhatsApp Chat</a>
          </div>
        </div>
      </main>
    </div>
  );
}