import { MouseEventHandler } from "react";

interface IBasicButton {
    id?: string,
    children?: string | React.ReactNode,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    style?: React.CSSProperties,
    variant?: "text" | "contained" | "outlined",
    title?: string,
    type?: "button" | "reset" | "submit",
    disabled?: boolean,
}

export default IBasicButton;