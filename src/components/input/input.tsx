import React, { ChangeEvent } from 'react';


// Define the JSX.IntrinsicElements interface in a separate file,
declare global {
  namespace JSX {
    interface IntrinsicElements {
      input: React.InputHTMLAttributes<HTMLInputElement>;
    }
  }
}


interface InputProps {
  value: string;
  placeholder?: string;
  label?:string;
  onChange: (value: string) => void;
}

const Input= ({ value, placeholder,label, onChange }:InputProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default Input;
