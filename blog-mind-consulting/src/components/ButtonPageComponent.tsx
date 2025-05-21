import React from 'react';
import  '../styles/components/ButtonPageComponentsStyle.css';

interface ButtonPageProps {
    buttonTextProps: string;
    onClick: () => void;
}

export const ButtonPageComponent: React.FC<ButtonPageProps> = ({
    buttonTextProps,
    onClick,
}) => {
    return (
        <button onClick={onClick} className='button'>
            {buttonTextProps}
        </button>
    );
};