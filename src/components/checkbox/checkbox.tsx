import './checkbox.css'
import React from "react";
interface checkBProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: String;
}

const Checkbox: React.FC<checkBProps> = (props) => {
  const [checked, setChecked] = React.useState<boolean>(false);
  return (
    <div className="checkbox" onClick={() => setChecked(!checked)}>
      <input {...props} type="checkbox" checked={checked} />
      {props.label && <label>{props.label}</label>}
    </div>
  )
}
export default Checkbox;

