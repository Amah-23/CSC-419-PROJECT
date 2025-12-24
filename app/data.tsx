// app/data.tsx

export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  fullDescription: string;
  features: string[];
  learnings: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: "garment-precision",
    title: "Garment Precision (AI Try-On)",
    description: "A Next.js application using a Nano Banana wrapper to facilitate virtual clothing try-ons via AI.",
    tech: ["Next.js", "Banana SDK", "AI Models", "Tailwind CSS"],
    fullDescription: "Garment Precision is an innovative fashion-tech solution designed to reduce e-commerce returns. I developed a 'Nano Banana' wrapper to interface with generative AI models, allowing users to upload a photo and realistic clothing assets to see how items fit before purchasing.",
    features: [
      "AI-powered image synthesis for realistic fabric draping",
      "Custom Nano Banana wrapper implementation",
      "Fast processing pipeline for real-time user feedback"
    ],
    learnings: "I learned how to wrap complex ML inference APIs into a consumer-friendly frontend and manage heavy image-processing states in Next.js.",
    image: "/garment.png"
  },
  {
    id: "pau-campus-map",
    title: "PAU Campus Gamification",
    description: "A mobile game built with Unity that helps students navigate the campus using AI guides.",
    tech: ["Unity", "C#", "AI Pathfinding", "Geolocation"], // <--- UPDATED
    fullDescription: "Navigating the PAU campus can be daunting for freshers. I developed an interactive mobile game that acts as a digital twin of the university. Unlike simple 2D maps, this project uses Unity's NavMesh and A* pathfinding algorithms to create AI NPCs that physically guide the player to their destination.",
    features: [
      "Real-time GPS integration within the Unity Engine",
      "AI Agents using A* Pathfinding for route optimization", // <--- UPDATED
      "Gamified badge system for discovering key landmarks"
    ],
    learnings: "I mastered the integration of real-world GPS coordinates into the Unity 3D coordinate system and learned to optimize C# scripts for mobile battery performance.",
    image: "/map.png"
  },
  {
    id: "ai-face-recognition",
    title: "Secure Facial Recognition System",
    description: "A biometric security system that grants access only to a specific set of registered users.",
    tech: ["Python", "OpenCV", "Machine Learning", "Secure Database"],
    fullDescription: "A security-focused project built to demonstrate biometric authentication. Unlike standard detection systems, this application uses a 'whitelist' approach, rejecting any face that has not been cryptographically hashed and stored in the secure registry. It is designed for restricted-access environments.",
    features: [
      "Real-time face detection and matching",
      "Anti-spoofing measures (liveness detection)",
      "Strict 'Whitelisted Users Only' access control logic"
    ],
    learnings: "I deepened my understanding of Computer Vision algorithms and the ethical/security considerations of storing biometric data.",
    image: "/face-rec.png"
  }
];