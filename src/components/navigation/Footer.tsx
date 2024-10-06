import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/footer.css";
import { routeUrls } from "../../config/routes/routeUrls";
import Logo from "../../images/logo.png";

function Footer() {
    const navigate = useNavigate();
    
    return (
        <div className="Footer-Shell">
            <img 
                src={Logo} alt="logo" 
                onClick={() => navigate(routeUrls.common.home)}
                style={{
                margin: "20px",
                display: "block",
                borderRadius: "50%",
                width: "3%",
                height: "auto",
                }}
            />
            <div className="Children">
                <div className="Foundation">
                    This foundation appreciates your time, and hopes you learned something fun!
                </div>
                <div className="Satire">
                    *This page is entirely <strong>satire</strong> and not at all based in fact. The creator and subject of this website make no claims about 
                    any actual species.*
                </div>
            </div>
        </div>
    );
}

export default Footer;