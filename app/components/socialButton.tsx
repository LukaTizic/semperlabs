import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import { SiDiscord } from "react-icons/si";

const SocialButton = () => {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in">
      <div className="relative group w-48 h-12">
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">
          <span className="transition-opacity duration-700 group-hover:opacity-0 text-sm">
            SOCIALS
          </span>

          <div className="absolute inset-0 flex opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700">
            <a
              href="https://github.com/LukaTizic"
              target="_blank"
              className="flex-1 flex items-center justify-center transition-transform duration-300 hover:scale-110"
            >
              <Github size={20} className="text-white hover:text-gray-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/luka-tizi%C4%87-529a1b240/"
              target="_blank"
              className="flex-1 flex items-center justify-center transition-transform duration-300 hover:scale-110"
            >
              <Linkedin size={20} className="text-white hover:text-gray-300" />
            </a>
            <a
              href="https://discord.gg/9GAFRzhN"
              target="_blank"
              className="flex-1 flex items-center justify-center transition-transform duration-300 hover:scale-110"
            >
              <SiDiscord size={20} className="text-white hover:text-gray-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialButton;
