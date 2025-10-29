import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

const SocialButton = () => {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in">
      <div className="relative group w-48 h-12">
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">
          <span className="transition-opacity duration-700 group-hover:opacity-0">
            SOCIALS
          </span>

          <div className="absolute inset-0 flex opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700">
            <a
              href="https://github.com"
              target="_blank"
              className="flex-1 flex items-center justify-center transition-transform duration-300 hover:scale-110"
            >
              <Github size={20} className="text-white hover:text-gray-300" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="flex-1 flex items-center justify-center transition-transform duration-300 hover:scale-110"
            >
              <Linkedin size={20} className="text-white hover:text-gray-300" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="flex-1 flex items-center justify-center transition-transform duration-300 hover:scale-110"
            >
              <Twitter size={20} className="text-white hover:text-gray-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialButton;
