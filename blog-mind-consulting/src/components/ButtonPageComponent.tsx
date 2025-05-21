import React from 'react';

interface ButtonPageProps {
    buttonTextProps: string;
}

export const ButtonPageComponent: React.FC<ButtonPageProps> = ({
    buttonTextProps,
}) => {
    return (
        <button type="submit" className='w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors'>
            {buttonTextProps}
        </button>
    );
};