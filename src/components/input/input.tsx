
import React from "react";
import './input.css'


interface InpProps extends React.InputHTMLAttributes< HTMLInputElement> {
  label?: String;
}

const Input: React.FC<InpProps> = (props) => {
  return (
    <div className="input">
    <input {...props}>{props.label}</input>
    </div>
  )
}

export default Input;