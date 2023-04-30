import React from "react";
import './button.css'

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: String;
  btnType?: String;
}

const Button: React.FC<BtnProps> = (props) => {
  return (
    <div className="button">
    <button {...props}>{props.label}</button>
    </div>
  )
}

export default Button;