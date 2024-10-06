import { MouseEventHandler } from "react";
import AnimatedMenuItemInfo from "../../../items/components/menu/AnimatedMenuItemInfo";

interface IAnimatedMenu {
    id?: string,
    children?: AnimatedMenuItemInfo[],
    style?: React.CSSProperties,
    text?: string,
    className?: string,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    imageUrl?: string,
}

export default IAnimatedMenu;