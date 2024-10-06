import React from "react";
import { CircularProgress } from "@mui/material"
import NavBar from "../navigation/NavBar";
import IBasicPageLayout from "../../props/components/layout/IBasicPageLayout";
import "../layout/styles/basicPageLayout.css";
import Footer from "../navigation/Footer";

function BasicPageLayout(props: IBasicPageLayout) {
    return (
        <div className="Standard-Page-Shell">
            <div className="Standard-Main">
                <div className="Standard-Nav-Bar">
                    <NavBar />
                </div>
                <div 
                    className="Standard-Title"
                    style={{
                        backgroundImage: `url(${props.backgroundImage})`,
                        backgroundSize: "100%",
                        resize: "both",
                        color: props.backgroundImage ? "white" : "black"
                    }}
                >
                    {props.title}
                    <div className="Standard-Subtitle">
                        {props.subtitle}
                    </div>
                </div>
                <div className="Standard-Children">
                    {
                        props.children
                    }
                </div>
                {
                    (props.isLoading ?? false) && (
                        <div className="Standard-Loading-Indicator">
                            {/* Todo: replace with fun loaders */}
                            <CircularProgress />
                        </div>
                    )
                }
            </div>
          
            <div className="Standard-Footer">
                <Footer />
            </div>
        </div>
    );
}

export default BasicPageLayout;