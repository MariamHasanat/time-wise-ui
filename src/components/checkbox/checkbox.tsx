import './checkbox.css'
import React from "react";
interface checkBProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: String;
  checked: boolean;
  setChecked: (arg0: boolean) => void;
}

const Checkbox: React.FC<checkBProps> = (props) => {
  return (
    <div className="checkbox" onClick={() => props.setChecked(!props.checked)}>
      <input {...props} type="checkbox" checked={props.checked} />
      {props.label && <label>{props.label}</label>}
    </div>
  )
}
export default Checkbox;

