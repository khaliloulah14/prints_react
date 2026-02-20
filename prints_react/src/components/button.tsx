import React from 'react';
import { HiChevronDoubleRight } from "react-icons/hi"; // Collection HeroIcons
// OU : import { MdKeyboardDoubleArrowRight } from "react-icons/md";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  showArrow?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  label, 
  showArrow = true, 
  className, 
  ...props 
}) => {
  return (
    <button 
      className={`
        inline-flex items-center justify-center 
        transition-all duration-300 
        font-bold uppercase tracking-widest text-xs
        border-2 border-[#2d3e50] text-[#555757] 
        hover:bg-[#feffff] hover:text-gray-700 
        bg-transparent px-6 py-3
        ${className}
      `}
      {...props}
    >
      {label}
      {showArrow && (
        <HiChevronDoubleRight className="ml-2 text-lg" />
      )}
    </button>
  );
};

export default Button;