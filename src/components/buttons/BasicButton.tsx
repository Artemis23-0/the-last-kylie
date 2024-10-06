import React from "react";
import { Button } from "@mui/material"
import IBasicButton from "../../props/components/buttons/IBasicButton";

function BasicButton(props: IBasicButton) {
    return (
        <Button
            id={props.id}
            onClick={props.onClick}
            style={{
                ...props.style,
                fontSize: 40,
            }}
            variant={props.variant ?? "text"}
            title={props.title}
        >
            {props.children}
        </Button>
    )
}

export default BasicButton;