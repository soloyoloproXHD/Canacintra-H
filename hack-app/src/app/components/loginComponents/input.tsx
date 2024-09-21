'use cliente';
import React from 'react';
import { FC } from 'react';

interface InputFieldProps {
    type: string;
    placeholder: string;
    icon: JSX.Element;
}

const InputField: FC<InputFieldProps> = ({ type, placeholder, icon }) => (
    <label className="input input-bordered flex items-center gap-2 bg-white mx-6 mt-4">
        {icon}
        <input type={type} className="grow" placeholder={placeholder} />
    </label>
);

export default InputField;