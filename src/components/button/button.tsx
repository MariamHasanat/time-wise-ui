import React from "react";
import './button.css'

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: String;
  primary?: Boolean;
}

const Button: React.FC<BtnProps> = (props) => {
  const primary = props.primary
  return (
    <div className={primary ? "primary button" : "button"}>
      <button {...props}>{props.label}</button>
    </div>
  )
}

export default Button;