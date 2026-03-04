import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import type React from "react";

interface listIconType {
  name: string;
  icon: React.ReactNode;
  link: string;
}

const listIcons: listIconType[] = [
  {
    name: "Facebook",
    icon: <Facebook />,
    link: "https://facebook.com/hdxprints"
  },
  {
    name: "Twitter",
    icon: <Twitter />,
    link: "https://twitter.com/hdxprints"
  },
  {
    name: "Instagram",
    icon: <Instagram />,
    link: "https://instagram.com/hdxprints"
  },
  {
    name: "Youtube",
    icon: <Youtube />,
    link: "https://youtube.com/hdxprints"
  }
]
export default function Footer() {

  return (
    <footer className="w-full bg-[#334155] text-white pt-12 pb-8 border-t-2 border-cyan-500/50 shadow-[0_-10px_20px_-5px_rgba(6,182,212,0.2)]">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        
        {/* MENU DE NAVIGATION */}
        <nav className="flex flex-col items-center gap-4 mb-10 font-medium tracking-wide">
          {['Home', 'All products', 'About HDX', 'My account', 'Contact'].map((link) => (
            <a key={link} href="#" className="hover:text-cyan-400 transition-colors duration-300">
              {link}
            </a>
          ))}
        </nav>

        {/* ICONES SOCIALES (SVG NATIFS) */}
        <div className="flex gap-4 mb-12">
          {/* Facebook */}
          {listIcons.map((social, index) => (
            <SocialSquare key={index} link={social.link} icon={social.icon} />
          ))}
        </div>

        {/* SECTION COPYRIGHT */}
        <div className="w-full border-t border-white/5 pt-8 text-center space-y-2">
          <p className="text-sm text-gray-400">
            Copyright © 2026 <span className="text-white">Custom Printing Pro</span>
          </p>
          <p className="text-[11px] text-gray-500 uppercase tracking-widest">
            Powered by Custom Printing Pro
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialSquare({link, icon}: {link: string, icon: React.ReactNode}) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {icon}
    </a>
  );
}