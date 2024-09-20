'use cliente';
import React from 'react';
interface InputProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange, name }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            className="input-field"
        />
    );
};

export default Input;