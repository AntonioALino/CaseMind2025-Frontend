import React from "react";
import '../styles/teste.css'

interface InputComponentProps {
    titleInput: string
    type: string;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputComponent : React.FC<InputComponentProps> = ({
    type,
    titleInput,
    placeholder,
    value,
    onChange,
}) => {
    return (
        <>
        <p>{titleInput}</p>
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="login-form-input"
        />

        </>
    );
}