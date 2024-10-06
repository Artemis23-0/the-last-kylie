import { useCallback } from "react";
import { MenuItem } from "@mui/material";
import React from "react";
import IAnimatedMenuItem from "../../props/components/menu/IAnimatedMenuItem";
import { useNavigate } from "react-router-dom";

function AnimatedMenuItem(props: IAnimatedMenuItem) {
    const navigate = useNavigate();
    
    const handleClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
        if (props.onClick !== undefined) {
            props.onClick(event)
        }
        if (props.url !== undefined) {
            navigate(props.url);
        }
    }, []);

    return (
        <MenuItem
            id={props.id} 
            onClick={handleClick}
        >
            {props.title}
        </MenuItem>
    );
}

export default AnimatedMenuItem;