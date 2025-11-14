"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Navigation } from "../components/nav";
// abc
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiPrisma,
  SiZod,
  SiStripe,
  SiMongodb,
  SiReact,
  SiFramer,
  SiAxios,
  SiVite,
} from "react-icons/si";

const projects = [
  {
    title: "Aeterna E-commerce",
    description:
      "Explore, choose, and buy products effortlessly with a smooth interface and detailed product information for an optimal shopping experience.",
    tech: ["nextjs", "tailwind", "typescript", "prisma", "zod", "stripe"],
    github: "https://github.com/LukaTizic/aeterna_ecommerce",
    live: "https://aeterna-ecommerce.vercel.app/",
  },
  {
    title: "Bluedit App",
    description:
      "A developer-focused Q&A platform where users can post questions, get answers, vote, and track technical discussions efficiently.",
    tech: [
      "nextjs",
      "tailwind",
      "typescript",
      "mongodb",
      "primjs",
      "tinymc",
      "radix",
    ],
    github: "https://github.com/LukaTizic/bluedit",
    live: "https://bluedit-six.vercel.app/",
  },
  {
    title: "Aeterna",
    description:
      "High-energy gaming platform with smooth animations, intuitive interface, and dynamic features for thrilling gameplay experiences.",
    tech: ["reactjs", "gsap", "vite", "tailwind"],
    github: "https://github.com/LukaTizic/aeterna",
    live: "https://aeterna-wine.vercel.app/",
  },
  {
    title: "Carhub App",
    description:
      "Browse, select, and rent cars easily with a seamless interface offering quick bookings, vehicle comparisons, and detailed car info.",
    tech: ["nextjs", "tailwind", "typescript"],
    github: "https://github.com/LukaTizic/carhub-nextjs",
    live: "https://carhub-nextjs-1h3h.vercel.app/",
  },
  {
    title: "Nike App",
    description:
      "Explore Nike’s products in a visually engaging interface, showcasing collections and detailed features for a smooth browsing experience.",
    tech: ["nextjs", "tailwind"],
    github: "https://github.com/LukaTizic/nike_app",
    live: "https://nike-lukatizic.vercel.app",
  },
  {
    title: "Pokémons App",
    description:
      "Browse and search Pokémon using the API, with detailed descriptions and a simple, engaging interface for fans of all ages.",
    tech: ["reactjs", "framer-motion", "axios"],
    github: "https://github.com/LukaTizic/pokemon-api",
    live: "https://pokemon-api-orcin-pi.vercel.app/",
  },
];

const techIcons: { [key: string]: JSX.Element } = {
  nextjs: <SiNextdotjs size={22} title="Next.js" />,
  tailwind: <SiTailwindcss size={22} title="Tailwind CSS" />,
  typescript: <SiTypescript size={22} title="TypeScript" />,
  prisma: <SiPrisma size={22} title="Prisma" />,
  zod: <SiZod size={22} title="Zod" />,
  stripe: <SiStripe size={22} title="Stripe" />,
  mongodb: <SiMongodb size={22} title="MongoDB" />,
  reactjs: <SiReact size={22} title="React.js" />,
  "framer-motion": <SiFramer size={22} title="Framer Motion" />,
  axios: <SiAxios size={22} title="Axios" />,

  vite: <SiVite size={22} title="Vite" />,
};

const Projects = () => {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center overflow-hidden">
      <Navigation />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.08),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(34,211,238,0.08),transparent_60%)]"></div>

      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center"
      >
        <h1 className="hidden lg:block text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-400 to-gray-200 animate-gradient-slow bg-[length:200%_200%] tracking-tight">
          SemperLabs
        </h1>
      </motion.div>

      <div className="relative z-10 mt-40 sm:mt-20 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-8 max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 + 0.6, duration: 0.8 }}
            className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:border-purple-400/30"
          >
            <h2 className="text-2xl text-center font-bold mb-3 transition">
              {project.title}
            </h2>
            <p className="text-gray-400 mb-5 text-center text-sm">
              {project.description}
            </p>

            {/* <div className="flex justify-center mt-3 gap-3 flex-wrap max-w-[80%]">
              {project.tech.map((tech, i) => (
                <div
                  key={i}
                  className="p-2 rounded-full border border-white/20 hover:border-white transition-all duration-300"
                >
                  {techIcons[tech.toLowerCase()]}
                </div>
              ))}
            </div> */}

            <div className="flex justify-center gap-6 mt-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-200 transition"
                >
                  <Github size={22} />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition"
                >
                  <ExternalLink size={22} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @keyframes gradient-slow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-slow {
          animation: gradient-slow 8s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Projects;
