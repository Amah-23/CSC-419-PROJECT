// components/Navbar.tsx
"use client"; 
import { useState } from 'react';
import Link from 'next/link';

// MAKE SURE THIS LINE SAYS "export default"
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-xl text-blue-800">
            Amah F.
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link href="/#about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link href="/#projects" className="text-gray-700 hover:text-blue-600">Projects</Link>
            <Link href="/#contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <Link href="/#about" onClick={() => setIsOpen(false)} className="block py-2 px-4 text-sm hover:bg-gray-100">About</Link>
          <Link href="/#projects" onClick={() => setIsOpen(false)} className="block py-2 px-4 text-sm hover:bg-gray-100">Projects</Link>
          <Link href="/#contact" onClick={() => setIsOpen(false)} className="block py-2 px-4 text-sm hover:bg-gray-100">Contact</Link>
        </div>
      )}
    </nav>
  );
}