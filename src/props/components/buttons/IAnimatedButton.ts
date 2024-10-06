import { MouseEventHandler } from "react";

interface IAnimatedButton {
    id?: string,
    children?: string | React.ReactNode,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    style?: React.CSSProperties,
    variant?: "text" | "contained" | "outlined",
    title?: string,
    imageUrl?: string,
    className?: string
    onMouseOver?: MouseEventHandler<HTMLButtonElement>,
    onMouseLeave?: MouseEventHandler<HTMLButtonElement>,
}

export default IAnimatedButton;