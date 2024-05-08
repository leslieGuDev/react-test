import React from "react";
import "@/css/button.css";

type ButtonProps = {
  title: string;
  onClick?: () => void;
};

const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <button className='button' onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
