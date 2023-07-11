import {JSX} from "react";
import Header from "../../components/header/header";
import store from "../../store/store";
import BasketItem from "../../components/basket-item/basket-item";
import {observer} from "mobx-react-lite";

function Basket(): JSX.Element{
    return (<>
        <Header/>
        <section className="items-bag">
                {store.basket.map((item) => <BasketItem
                    id={item.id}
                    name={item.name}
                    color={item.color}
                    size={item.size}
                    price={item.price}
                    image={item.image}
                    key={item.id}
                />)
                }
        </section>
    </>)
}
export default observer(Basket)
