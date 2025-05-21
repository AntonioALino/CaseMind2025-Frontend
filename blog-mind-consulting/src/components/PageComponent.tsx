import React from "react";


interface ContainerPageProps {
    onClick: () => void;
    form : React.ReactNode;
    button : React.ReactNode;
    link: string,
    textLink: string
}


export const PageComponent : React.FC<ContainerPageProps> = ({
    form,
    button,
    link,
    textLink
}) => {

    return (
        <div className="flex h-screen w-full">
            <div className="hidden md:flex w-1/2">
                <img alt="Logo do blog" src="src/assets/Logo.png" className="w-full h-full object-cover"/>
            </div>
            <div className="flex w-full md:w-1/2 items-center justify-center p-8">
                <div>
                    <div className="w-full max-w-md">
                        {form}
                        <a href={link}>{textLink}</a>
                    </div>
                    <div className="mt-6">
                        <button>
                            {button}
                        </button>
                    </div>
                    <a href={link} className="text-sm text-black-500 hover:underline">{textLink}</a>
                </div>
            </div>
        </div>
    )
}

