import { Menu } from "@mui/material";
import React, { useState } from "react";
import AnimatedButton from "../buttons/AnimatedButton";
import IAnimatedMenu from "../../props/components/menu/IAnimatedMenu";
import AnimatedMenuItem from "./AnimatedMenuItem";

function AnimatedMenu(props: IAnimatedMenu) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };


    const handleClick = () => {
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div
            style={props.style}
        >
        <AnimatedButton
            id={props.id}
            onClick={handleMenuClick}
            style={{
                fontSize: "25px",
                width: "100%",
                textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
            }}
            imageUrl={props.imageUrl}
            className={props.className}
        >
            {props.text}
        </AnimatedButton>
        <Menu
            key={props.id}
            id={props.id}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                sx: { 
                    width: anchorEl && anchorEl.offsetWidth,
                    fontSize: 18,
                    fontWeight: "900",
                    color: "#c9c1a0",
                }
            }}
            slotProps={{
                paper: {
                    style: {
                        backgroundColor: "#5f725d"
                    }
                }
            }}
        >
            {
                props.children?.map((item) => {
                    return (
                        <AnimatedMenuItem 
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            onClick={handleClick}
                            url={item.url}
                        />
                    );
                })
            }
        </Menu>
        </div>
    );
}

export default AnimatedMenu;