import React from "react";
import { Button } from "@mui/material";
import IAnimatedButton from "../../props/components/buttons/IAnimatedButton";

function AnimatedButton(props: IAnimatedButton) {
    return (
        <Button
            id={props.id}
            className={props.className}
            onClick={props.onClick}
            style={{
                ...props.style,
                position: "relative",
                overflow: "hidden",
            }}
            onMouseOver={props.onMouseOver}
            onMouseLeave={props.onMouseLeave}
            sx={{
                "&:before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0,
                    background: `url(${props.imageUrl})`,
                    backgroundSize: "110%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    transform: "translateY(20px)",
                    transition: "opacity .5s ease, transform 0.5s ease",
                    zIndex:1,
                },
                "&:hover::before": {
                    opacity: 1,
                    transform: "translateY(0)"
                }
            }}
            variant={props.variant ?? "text"}
            title={props.title}
        >
            {props.children}
        </Button>
    )
}

export default AnimatedButton;