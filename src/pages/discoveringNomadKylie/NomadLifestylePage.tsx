import React from "react";
import BasicPageLayout from "../../components/layout/BasicPageLayout";
import { Slide } from "react-slideshow-image";
import AltNomad from "../../images/kyliePics/nomad/alt_nomad.jpg";
import NomadHat from "../../images/kyliePics/nomad/nomad_hat.JPG";
import NomadNothing from "../../images/kyliePics/nomad/nomad_nothing.JPG";
import NomadShadow from "../../images/kyliePics/nomad/nomad_shadow.JPG";
import NomadStuff from "../../images/kyliePics/nomad/nomad_stuff.JPG";
import OriginalNomad from "../../images/kyliePics/nomad/original_nomad.jpg";
import SittingNomad from "../../images/kyliePics/nomad/sitting_nomad.jpg";
import "react-slideshow-image/dist/styles.css"

function NomadLifestyle() {
    return(
        <BasicPageLayout
            title="Kylie's Nomadic Life"
            subtitle="Hard to Capture, But Infinitely Worth It"
        >
            <div className="slide-container">
                <Slide>
                    {images.map((slideImage, index)=> (
                        <div key={index}>
                            <img 
                                src={slideImage.src} 
                                alt={`Slide ${index + 1}`} 
                                style={{ 
                                    width: '100%', 
                                    height: 'auto', 
                                    maxWidth: '20vw',
                                    margin: '0 auto',
                                    display: 'block',
                                }} 
                            />
                        </div>
                    ))} 
                </Slide>
            </div>
        </BasicPageLayout>
    )
}

const images = [
    {
        src: OriginalNomad,
    }, 
    {
        src: NomadNothing,
    }, 
    {
        src: SittingNomad,
    },
    {
        src: NomadHat,
    }, 
    {
        src: NomadShadow,
    },
    {
        src: NomadStuff,
    },
    {
        src: AltNomad,
    },
];

export default NomadLifestyle;