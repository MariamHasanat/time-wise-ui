import React from "react";
import "./button.css";

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  primary?: boolean;
}

const Button: React.FC<BtnProps> = ({ label, primary, ...rest }) => {
  return (
    <div className={primary ? "primary button" : "button"}>
      <button {...rest}>{label}</button>
    </div>
  );
};

export default Button;
