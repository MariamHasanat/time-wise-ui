import React from "react";
import './input.css'

interface InpProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: String;
  required?: boolean;
}

const Input: React.FC<InpProps> = (props) => {
  return (
    <div className="input">
      {props.label && <label>{props.label}{props.required && <span> *</span>}</label>}
      <input {...props} />
    </div>
  )
}
export default Input;

