import React, {FC} from 'react';
import s from "./DropDown.module.scss"
import MenuItems from "../menuItems";
import {DropState, DropTitleState} from "../../../typing";



interface Props {
    submenus: DropState<DropTitleState>[]
    dropdown: boolean
    depthLevel: number
}
const DropDown:FC<Props> = ({ submenus, dropdown, depthLevel }) => {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? s.dropdown_submenu : "";
    return (
        <ul className={`${s.dropdown} ${dropdownClass} ${dropdown ? s.show : ""}`}>
            {submenus.map((submenu: DropState<DropTitleState>, index: number) => (
                <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
            ))}
        </ul>
    );
};

export default DropDown;