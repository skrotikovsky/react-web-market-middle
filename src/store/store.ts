import {makeAutoObservable, runInAction} from "mobx";
import {AddedProduct, Color, Product, Size, ZeroColor, ZeroProduct} from "../consts";
import {getProduct, getProducts, getSizes} from "../services/api";

class Store {
    public products: Product[] = [];
    public currentProductDetails: Product = ZeroProduct;
    public basket: AddedProduct[] = [];
    public sizes: Size[] = [];
    public currentImg: string = ZeroColor.images[0];
    public basketID: number = 0;
    public currentColor: Color = ZeroColor;
    public currentSizeId: number = 0;
    public productPagesCounter: number = 1;

    constructor(){
        makeAutoObservable(this);
    }
    public incCountToShow():void{
        runInAction(()=>{
            this.productPagesCounter++;
        })
    }
    public decCountToShow():void{
        runInAction(()=>{
            this.productPagesCounter--;
        })
    }
    public setCurrentSize(id: number):void {
        runInAction(()=>{
            this.currentSizeId = id;
        })
    }
    public isInBasket(obj: AddedProduct): boolean {
        return Boolean(this.basket.find((item)=>
            item.name === obj.name &&
            item.size === obj.size &&
            item.color === obj.color
        ))
    }
    public setCurrentColor(id: number):void {
        runInAction(()=>{
            const color = this.currentProductDetails.colors.find((item)=> item.id === id);
            if (color) {
                this.currentColor = color;
                this.currentSizeId = color.sizes[0]??0;
            }
            else{
                this.currentColor = ZeroColor;
                this.currentSizeId = 0;
            }
        })
    }
    public iterId():void {
        runInAction(()=>{
            this.basketID++;
        })
    }
    public addBasketItem(item: AddedProduct): void{
        runInAction(()=>{
            this.basket.push(item)

        })
    }
    public removeBasketItem(id: number): void{
        runInAction(()=>{
            this.basket = this.basket.filter((item: AddedProduct) => item.id !== id)
        })
    }
    public resetCurrentProduct(): void{
        runInAction(()=>{
            this.currentProductDetails = ZeroProduct;
            this.currentImg = ZeroColor.images[0];
            this.currentSizeId = 0;
            this.currentColor = ZeroColor;
        })
    }
    public setMainImg(src: string): void{
        runInAction(()=>{
            this.currentImg = src;
        })
    }
    public setCurrentProduct(id: number): void {
        getProduct(id).then((res) => {
            runInAction(() => {
                this.currentProductDetails = res as Product;
                this.currentImg = this.currentProductDetails.colors[0].images[0];
                this.currentColor = this.currentProductDetails.colors[0];
                this.currentSizeId = this.currentColor.sizes[0]??0;
            });
        }).catch(()=>{
            this.currentProductDetails = ZeroProduct;
            this.currentImg = ZeroColor.images[0];
            this.currentColor = ZeroColor;
            this.currentSizeId = 0;
        });
    }
    public getProductsList(): void {
        getProducts().then((res) => {
            if (Array.isArray(res)) {
                runInAction(() => {
                    this.products = res;
                });
            }
        }).catch(()=>{
            this.products = [];
        });
    }

    public removeAddedItem(id: number): void{
        this.basket = this.basket.filter((prod)=> prod.id !== id)
    }
    public getSizesList(): void {
        getSizes().then((res) => {
            runInAction(() => {
                this.sizes = res as Size[];
            });
        }).catch(()=>{
            this.sizes = [];
        });
    }
}

const store = new Store();

export default store;
