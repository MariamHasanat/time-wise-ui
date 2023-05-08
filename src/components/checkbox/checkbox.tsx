import React from "react";
import './checkbox.css'

interface checkBProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: String;
}

const Checkbox: React.FC<checkBProps> = (props) => {
  return (
    <div className="checkbox">
      <input {...props} type="checkbox" />
      {props.label && <label>{props.label}</label>}
    </div>
  )
}
export default Checkbox;

