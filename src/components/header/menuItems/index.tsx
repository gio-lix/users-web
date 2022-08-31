import React, {useEffect, useRef, useState} from 'react';
import s from "./MenuItems.module.scss"
import DropDown from "../dropDown";
import {DropState, DropTitleState} from "../../../typing";



interface TabProps {
    items: DropState<DropTitleState>;
    depthLevel: number
}

const MenuItems = ({ items, depthLevel }: TabProps) => {
    const [dropdown, setDropdown] = useState(false);

    let ref = useRef<HTMLLIElement | null>(null);

    useEffect(() => {
        const handler = (event: any) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);

    const onMouseEnter = () => {
        window.innerWidth > 960 && setDropdown(true);
    };

    const onMouseLeave = () => {
        window.innerWidth > 960 && setDropdown(false);
    };

    return (
        <li
            ref={ref}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={s.menu}
        >
            {items.submenu ? (
                <>
                    <button
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={() => setDropdown((prev) => !prev)}
                    >
                        {items.title} {" "}
                        {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
                    </button>
                    <DropDown
                        depthLevel={depthLevel}
                        submenus={items.submenu}
                        dropdown={dropdown}
                    />
                </>
            ) : (
                <p>{items.title}</p>
            )}
        </li>
    );
};

export default MenuItems;