import { MouseEventHandler } from "react";

interface IAnimatedMenuItem {
    id?: string,
    onClick?: (event: React.MouseEvent<HTMLElement> | React.MouseEvent<HTMLButtonElement>) => void,
    style?: React.CSSProperties,
    title?: string,
    className?: string,
    url?: string,
}

export default IAnimatedMenuItem;