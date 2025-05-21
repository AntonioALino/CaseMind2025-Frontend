import React from 'react';

interface ButtonPageProps {
    buttonTextProps: string;
    onClick: () => void;
}

export const ButtonPageComponent: React.FC<ButtonPageProps> = ({
    buttonTextProps,
    onClick,
}) => {
    return (
        <button onClick={onClick}>
            {buttonTextProps}
        </button>
    );
};