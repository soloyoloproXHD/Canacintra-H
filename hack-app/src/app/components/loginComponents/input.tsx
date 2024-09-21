'use client';
import React, { ChangeEvent, FC } from 'react';

interface InputFieldProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    icon: JSX.Element;
}

const InputField: FC<InputFieldProps> = ({ type, placeholder, value, onChange, icon }) => (
    <label className="input input-bordered flex items-center gap-2 bg-white mx-6 mt-4">
        {icon}
        <input
            type={type}
            className="grow"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required
        />
    </label>
);

export default InputField;