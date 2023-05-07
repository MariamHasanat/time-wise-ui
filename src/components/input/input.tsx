import React from "react";
import './input.css'

interface InpProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: String;
}

const Input: React.FC<InpProps> = (props) => {
  return (
    <div className="input">
      {props.label && <label>{props.label}</label>}
      <input {...props} />
    </div>
  )
}
export default Input;

