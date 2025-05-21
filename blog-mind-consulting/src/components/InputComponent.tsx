import React from "react";

interface InputComponentProps {
    titleInput: string
    type: string;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name: string
}

export const InputComponent : React.FC<InputComponentProps> = ({
    type,
    titleInput,
    placeholder,
    value,
    onChange,
    name
}) => {
    return (
        <>
        <div className="mb-4">
            <label className="block text-sm font-medium mb-1">{titleInput}</label>
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    name={name}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                />
        </div>
        </>
    );
}