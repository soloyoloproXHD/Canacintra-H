import React, { FC, ReactNode } from 'react';

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
    return (
        <button onClick={onClick} className="btn">
            {children}
        </button>
    );
};

export default Button;


