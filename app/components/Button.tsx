import React from "react";

const Button = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <button className={`bg-[#F9A826] text-white font-bold py-3 px-10 rounded-lg transition-transform hover:scale-105 shadow-sm whitespace-nowrap ${className}`}>
      {children}
    </button>
  );
};

export default Button;
