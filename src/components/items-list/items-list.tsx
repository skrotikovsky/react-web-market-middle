import {JSX} from "react";
import store from "../../store/store";
import ClothItem from "../cloth-item/cloth-item";
import {observer} from "mobx-react-lite";

function ItemsList():JSX.Element{
    return (<>
        {store.products
            .slice((store.productPagesCounter-1)*8, store.productPagesCounter*8)
            .map((prod) => <ClothItem key={prod.id} id={prod.id} src={prod.colors[0].images[0]} kind={prod.name}/>)}
        </>
    )
}
export default observer(ItemsList)
