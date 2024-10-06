import React from "react";
import BasicPageLayout from "../../components/layout/BasicPageLayout";
import { ImageList, ImageListItem } from "@mui/material";
import BarbieFull from "../../images/kyliePics/cute/barbie_full.jpeg";
import BarbieHead from "../../images/kyliePics/cute/barbie_head.jpeg";
import BarbieShoes from "../../images/kyliePics/cute/barbie_shoes.jpeg";
import Hiding from "../../images/kyliePics/funny/hiding_ikea.JPG";
import Attac from "../../images/kyliePics/funny/kylie_attacc.jpg";
import NaturalHabitat from "../../images/kyliePics/funny/nautral_habitat.JPG";
import Penguin from "../../images/kyliePics/funny/penguin.JPG";
import RunningAction from "../../images/kyliePics/funny/running_action.JPG";
import RunningCape from "../../images/kyliePics/funny/running_cape.JPG";
import Suspicious from "../../images/kyliePics/funny/suspicious.jpg";
import WeirdAngle from "../../images/kyliePics/funny/weird_angle.JPG";
import CowboyHat from "../../images/kyliePics/funny/with_cowboy_hat.jpg";
import Dog from "../../images/kyliePics/funny/with_dog.jpg";
import Popcorn from "../../images/kyliePics/funny/with_popcorn.jpg";
import AltNomad from "../../images/kyliePics/nomad/alt_nomad.jpg";
import NomadHat from "../../images/kyliePics/nomad/nomad_hat.JPG";
import NomadNothing from "../../images/kyliePics/nomad/nomad_nothing.JPG";
import NomadShadow from "../../images/kyliePics/nomad/nomad_shadow.JPG";
import NomadStuff from "../../images/kyliePics/nomad/nomad_stuff.JPG";
import OriginalNomad from "../../images/kyliePics/nomad/original_nomad.jpg";
import SittingNomad from "../../images/kyliePics/nomad/sitting_nomad.jpg";

function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

function PhotoGallery() {
    return(
        <BasicPageLayout
            title="Photo Gallery"
            subtitle="Take a Look at the Majestic Kylie During Different Phases of Her Life"
        >
            <div
                style={{
                    justifyContent: "center",
                }}
            >
            <ImageList
                sx={{ width: "90vw", height: "60vh"}}
                variant="quilted"
                cols={5}
                rowHeight={121}
            >
                {
                    images.map((item) => (
                        <ImageListItem key={item.src} cols={item.cols || 1} rows={item.rows || 1}>
                            <img 
                                {...srcset(item.src, 121, item.rows, item.cols)}
                            />
                        </ImageListItem>
                    ))
                }
            </ImageList>
            </div>
        </BasicPageLayout>
    )
}

const images = [
    {
        src: WeirdAngle,
        rows: 2,
    },
    {
        src: BarbieShoes,
        rows: 3,
    },
    {
        src: NaturalHabitat,
        rows: 2
    },
    {
        src: Dog,
        rows: 4,
    },
    {
        src: Popcorn,
        rows: 4,
    }, 
    {
        src: Suspicious,
        rows: 5,
    },
    {
        src: BarbieFull,
        rows: 2,
    },
    {
        src: RunningAction,
        rows: 4,
    },
    {
        src: OriginalNomad,
        rows: 6,
        cols: 2,
    }, 
    {
        src: NomadNothing,
        rows: 3,
    }, 
    {
        src: Penguin,
        rows: 4,
        cols: 2,
    }, 
    {
        src: SittingNomad,
        rows: 3,
    },
    {
        src: BarbieHead,
        rows: 2,
        cols: 2,
    },
    {
        src: NomadHat,
        rows: 3,
    }, 
    {
        src: RunningCape,
        rows: 3,
    }, 
    {
        src: NomadShadow,
        rows: 4,
    },
    {
        src: Hiding,
        rows: 3,
    },
    {
        src: CowboyHat,
        rows: 2,
    },
    {
        src: NomadStuff,
        rows: 3,
    },
    {
        src: AltNomad,
        rows: 2,
    },
    {
        src: Attac,
    }
];

export default PhotoGallery;