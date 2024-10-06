import React from "react";
import BasicPageLayout from "../../components/layout/BasicPageLayout";
import { Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BasicButton from "../../components/buttons/BasicButton";
import { routeUrls } from "../../config/routes/routeUrls";

function HowYouCanHelp() {
    const navigate = useNavigate();

    return(
        <BasicPageLayout
            title="Ways To Help"
        >
            <div style={{ textAlign: "center" }}>
                Whether it's through action or through donation, whatever you are able to give will greatly help the pursuit of conserving and observing
                The Last Kylie. Learn more about both avenues below:
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "5em",
                height: "50%",
            }}>
                <Card
                    sx={{
                        backgroundColor: "#5f725d",
                        color: "#c9c1a0",
                        padding: "10px",
                    }}
                    style={{
                        marginRight: "3em",
                        width: "20vw",
                        minHeight: "30vh",
                    }}
                >
                    <div style={{ 
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "50px",
                     }}>
                        Volunteer
                    </div>
                    <div style={{ fontSize: "18px" }}>
                        Teamwork makes the dream work! We are always looking for more volunteers and welcome all interested to 
                        learn more about what they can do to help! Contact us for more information by clicking "Contact" in 
                        the menuo or clicking the link below.
                        
                    </div>
                    <BasicButton
                        id="contact"
                        variant="contained"
                        onClick={() => navigate(routeUrls.howYouCanHelp.contact)}
                        style={{
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",
                            marginTop: "1em",
                            width: "40%"
                        }}
                    >
                        Contact Us
                    </BasicButton>
                </Card>
                <Card
                    sx={{
                        backgroundColor: "#5f725d",
                        color: "#c9c1a0",
                        padding: "10px",
                    }}
                    style={{
                        marginLeft: "3em",
                        width: "20vw",
                        minHeight: "30vh",
                    }}
                >
                    <div style={{ 
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "50px",
                     }}>
                        Donate
                    </div>
                    <div style={{ fontSize: "18px" }}>
                        Donations help keep the organization going! Any donation, whether it's $5 or $500, helps!
                        You can learn more about where your donations go and how they're used by going to the "Donations" in the menu, or clicking the link below.
                    </div>
                    <BasicButton
                        id="Donate"
                        variant="contained"
                        onClick={() => navigate(routeUrls.howYouCanHelp.donate)}
                        style={{
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",
                            marginTop: "1em",
                            width: "40%"
                        }}
                    >
                        Donate
                    </BasicButton>
                </Card>
            </div>
        </BasicPageLayout>
    )
}

export default HowYouCanHelp;