import {JSX, useEffect} from "react";
import Header from "../../components/header/header";
import ItemsList from "../../components/items-list/items-list";
import {observer} from "mobx-react-lite";
import store from "../../store/store";
function MainPage():JSX.Element{

    useEffect(()=>{
        store.getProductsList();
    },[])
    return (<>
        <Header/>
        <section className="item-list">
            <ItemsList/>
        </section>
        <div className="butt-container">
            <button onClick={()=>store.decCountToShow()} disabled={store.productPagesCounter === 1} className="move-butt">Назад</button>
            <button onClick={()=>store.incCountToShow()}  disabled={store.productPagesCounter * 8 >= store.products.length} className="move-butt">Вперед</button>
        </div>
    </>)
}
export default observer(MainPage)
