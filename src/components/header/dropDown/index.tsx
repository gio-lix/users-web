import React, {FC} from 'react';
import s from "./DropDown.module.scss"
import MenuItems from "../menuItems";


interface Props {
    submenus: any
    dropdown: any
    depthLevel: number
}
const DropDown:FC<Props> = ({ submenus, dropdown, depthLevel }) => {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? s.dropdown_submenu : "";
    return (
        <ul className={`${s.dropdown} ${dropdownClass} ${dropdown ? s.show : ""}`}>
            {submenus.map((submenu: any, index: number) => (
                <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
            ))}
        </ul>
    );
};

export default DropDown;