import {JSX} from "react";
import {AddedProduct} from "../../consts";
import {observer} from "mobx-react-lite";
import store from "../../store/store";

function BasketItem({id, name, color, size, price, image,}: AddedProduct): JSX.Element {
    return (
        <div className="added-item">
        <img className="added-cloth" src={image} alt="cloth"/>
        <div className="stats">
            <span>{name}</span>
            <span>Размер: {size}</span>
            <span>Цвет: {color}</span>
            <span>Цена: {price}</span>
        </div>
        <svg onClick={()=>store.removeAddedItem(id)} width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_5_180" maskUnits="userSpaceOnUse" x="0" y="0" width="37"
                  height="37">
                <rect width="37" height="37" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_5_180)">
                <path
                    d="M10.7916 32.375C9.94371 32.375 9.21784 32.0731 8.61402 31.4693C8.0102 30.8655 7.70829 30.1396 7.70829 29.2917V9.25H6.16663V6.16667H13.875V4.625H23.125V6.16667H30.8333V9.25H29.2916V29.2917C29.2916 30.1396 28.9897 30.8655 28.3859 31.4693C27.7821 32.0731 27.0562 32.375 26.2083 32.375H10.7916ZM26.2083 9.25H10.7916V29.2917H26.2083V9.25ZM13.875 26.2083H16.9583V12.3333H13.875V26.2083ZM20.0416 26.2083H23.125V12.3333H20.0416V26.2083Z"
                    fill="#1C1B1F"/>
            </g>
        </svg>
    </div>)
}
export default observer(BasketItem)
