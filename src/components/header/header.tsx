import {JSX} from "react";
import {Link} from "react-router-dom";
import {AppRoute} from "../../consts";
import {observer} from "mobx-react-lite";
import store from "../../store/store";

function Header(): JSX.Element {
    return (

        <header>
            <Link to={AppRoute.MAIN}><div className="logo"><span style={{textDecoration:"none"}}>SuperNova</span></div></Link>
            <div className="basket">
                <Link to={AppRoute.BASKET}><img src="/images/shopping_cart.svg" alt="cloth"/></Link>
                <div className="counter"><span>{store.basket.length}</span></div>
            </div>
        </header>
)
}
export default observer(Header)
