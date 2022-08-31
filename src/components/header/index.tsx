import s from "./Header.module.scss"
import MenuItems from "./menuItems";
import React from "react";
import {DropState, DropTitleState} from "../../typing";

const menuItems = [
    {
        title: "Home"
    },{
        title: "Services",
        submenu: [
            {
                title: "Web Design"
            },
            {
                title: "Web Developer",
                submenu: [
                    {title: "Frontend"},
                    {
                        title: "Backend",
                        submenu: [
                            {
                                title: "Node.js"
                            },
                            {
                                title: "PHP"
                            }
                        ]
                    },
                ]
            },
            {
                title: "SEO"
            }
        ]
    },
    {
        title: "About US",
        submenu: [
            {
                title: "Who we are"
            },
            {
                title: "Our Values"
            }
        ]
    }
]

const Header = () => {
    return (
        <header>
            <div className={s.header}>
                <nav>
                    <ul className={s.header_menu}>
                        {menuItems.map((menu: DropState<DropState<DropTitleState>>, index) => {
                            const depthLevel = 0;
                            return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;