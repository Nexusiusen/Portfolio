import React from "react";

interface BoxProps {
  children?: React.ReactNode;
  className?: string;
}

const Box: React.FC<BoxProps> = ({ children, className = "" }) => {
  return (
    <div className={`w-[40%] rounded p-4 flex ${className}`}>{children}</div>
  );
};

export default Box;
