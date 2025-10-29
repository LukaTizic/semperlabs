import React from "react";
import { Hammer, ArrowLeft } from "lucide-react";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-center px-6 relative overflow-hidden">
      <div className="animate-pulse mb-6">
        <Hammer
          size={72}
          className="text-gray-200 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
        />
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500 bg-[length:200%_200%] animate-[gradient_5s_ease_infinite]">
        Under Development
      </h1>

      <p className="text-gray-400 mt-4 text-lg max-w-md">
        This section is currently being built.
        <br />
        Please check back soon.
      </p>

      <a
        href="/"
        className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 text-white shadow-lg"
      >
        <ArrowLeft size={20} />
        <p className="font-medium">Back</p>
      </a>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default Projects;
