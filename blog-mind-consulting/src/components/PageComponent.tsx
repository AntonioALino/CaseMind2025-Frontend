import React from "react";


interface ContainerPageProps {
    form : React.ReactNode;
}


export const PageComponent : React.FC<ContainerPageProps> = ({
    form,
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
                    </div>
                    <div className="mt-6">
                    </div>
                </div>
            </div>
        </div>
    )
}

