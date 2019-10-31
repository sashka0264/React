import React from 'react';
import iconPizza from "./icons/pizza.png";
import iconSalad from "./icons/salad.png";
import iconMeat from "./icons/steak.png";
import './menu-list-item.scss';

const MenuListItem = ({menuItem, onAddToCard}) => {
    const {title, price, category, url} = menuItem;
    let icon;
    switch (category) {
        case ("pizza"):
            icon = iconPizza;
            break;
        case ("salads"):
            icon = iconSalad;
            break;
        case ("meat"):
            icon = iconMeat;
            break;
        default:
            break;
    }

    return (
        <li className="menu__item">
            <div className="menu__title">{title}</div>
            <img className="menu__img" src={url} alt={title}></img>

            <div className="menu__category">
                Category: <img className="menu__iсon" src={icon} alt={category}/><span>{category}</span>
            </div>

            <div className="menu__price">Price: <span>{price}$</span></div>
            <button onClick={() => onAddToCard()} className="menu__btn">Add to cart</button>

        </li>
   
    )
}

export default MenuListItem;