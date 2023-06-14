import React from "react";
import "./checkbox.css";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  checked: boolean;
  setChecked: (newValue: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  setChecked,
  ...rest
}) => {
  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="checkbox" onClick={handleChange}>
      <input
        {...rest}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      {label && <label>{label}</label>}
    </div>
  );
};

export default Checkbox;
