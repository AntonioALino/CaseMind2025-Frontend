import React from "react";
import '../styles/components/PageComponentSyle.css'


interface ContainerPageProps {
    onClick: () => void;
    form : React.ReactNode;
    button : React.ReactNode;
}


export const PageComponent : React.FC<ContainerPageProps> = ({
    form,
    button,
}) => {

    return (
        <div className="page-container">
            <div style={{
                    flex: 1,
                    backgroundColor: "#000",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                        }}>
    <img alt="Logo do blog" src="src/assets/Logo.png"/>
            </div>
            <div>
                <div>
                    <div>
                        {form}
                        <a href="#">{}</a>
                    </div>
                    <div>
                        <button>
                            {button}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

