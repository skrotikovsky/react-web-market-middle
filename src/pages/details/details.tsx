import {JSX, useEffect} from "react";
import Header from "../../components/header/header";
import store from "../../store/store";
import {useParams} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {AddedProduct, Size} from "../../consts";

function Details():JSX.Element {
    const id = useParams().id;
    useEffect(() => {
        store.setCurrentProduct(Number(id));
        store.getSizesList();
        return store.resetCurrentProduct();
    },[])

    const colors = store.currentProductDetails.colors;
    const isSizeInList = (size: Size) => Boolean(colors.find((item)=> item.id === store.currentColor.id)?.sizes.includes(size.id))
    return (<>
        <Header/>
        <section className="item-description">
            <h1>{store.currentProductDetails.name}</h1>
            <div className="description-container">
                <div className="img-switcher">
                    {store.currentColor.images.map((src) => <img
                        className={`${store.currentImg === src?'active-prev':''}`}
                        onMouseOver={() => {store.setMainImg(src)}}
                        key={src}
                        src={src}
                        alt="cloth"/>)}
                </div>
                <div>
                    {<img className="main-img"
                          key={store.currentColor.images[0]}
                          src={store.currentImg}
                          alt="cloth"/>}
                </div>
                <div className="props">
                    <h2>Инфо:</h2>
                    <div className="description">
                        {store.currentColor.description}
                    </div>
                    <h2>Цвет:</h2>
                    <div className="choose-color">
                        {store.currentProductDetails.colors
                            .map((front,index) => <img
                                className={`${store.currentColor.id === front.id?'active':''}`}
                                onClick={()=> {
                                    store.setCurrentColor(front.id);
                                    store.setMainImg(colors[front.id-1].images[0])
                                }}
                                key={front.images[0]}
                                src={front.images[0]}
                                alt="cloth"/>)}
                    </div>
                    <h2>Размер:</h2>
                    <div className="choose-size">
                        {store.sizes.map((size)=> <div
                            key={size.id}
                            onClick={()=>{
                                if (isSizeInList(size)){
                                    store.setCurrentSize(size.id??0)
                                }
                            }}
                            className={`size 
                                ${store.currentSizeId === size.id && isSizeInList(size)
                                ?'active':''} 
                                ${isSizeInList(size)?'':'disabled'}`
                            }>
                            <span>{size.label}</span>
                            <span className="size-number">{size.number}</span>
                        </div>)}
                    </div>
                    <h2 className="price">Цена:</h2>
                    <span className="price">{store.currentColor.price}</span>
                    <button onClick={()=>{
                        const addedItem = {
                            id: store.basketID,
                            name: store.currentProductDetails.name,
                            color: colors.find((item)=> item.id === store.currentColor.id)?.name,
                            size: store.sizes.find((item)=> item.id === store.currentSizeId)?.label,
                            price: store.currentColor.price,
                            image: store.currentColor.images[0],
                        } as AddedProduct
                        if (store.currentSizeId !== 0 && !store.isInBasket(addedItem)) {
                            store.addBasketItem(addedItem);
                            store.iterId();
                        }
                    }} className={`add-item ${store.currentSizeId === 0?'disabled':''}`}>Добавить в корзину</button>
                </div>
            </div>
        </section>
    </>)
}
export default observer(Details)
