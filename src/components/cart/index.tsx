import React, {FC, useState} from 'react';
import s from "./Cart.module.scss"
import {classNames} from "../../utils";

interface Props {
    title: string
    content: string
    image: string
}

const Cart:FC<Props> = ({title,content, image}) => {
    const [state, setState] = useState(false)


    return (
        <section className={s.cart} onClick={() => setState(!state)}>
            <div className={classNames(s.cart_inner, (state) ? s.ifFlipper : "")}>
                <div className={classNames(s.cart_face, s.card__faceFront)} >
                    <h2>{title}</h2>
                </div>
                <div className={classNames(s.cart_face, s.card__faceBack)} >
                    <div >
                        {/*   header   */}
                        <div className={s.card__header}>
                            <img
                                src={image}
                                alt="image"
                                className="pp"
                            />
                            <h2>{title}</h2>
                        </div>
                        <div className={s.card_body}>
                            <h3>JavaScript Wizard</h3>
                            <p>
                                {content}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;