export enum AppRoute{
    MAIN = '/',
    DETAILS = '/details/:id',
    BASKET = '/basket',
}
export type Color = {
    id: number,
    name: string,
    images: string[],
    price: string,
    description: string,
    sizes: number[],
}
export type Product = {
    id: number,
    name: string,
    colors: Color[],
}
export type AddedProduct = {
    id: number,
    name: string,
    color: string,
    size: string,
    price: string,
    image: string,
}
export const ZeroColor = {
    id: 0,
    name: '',
    images: ['/images/pict-none.png'],
    price: "0.00",
    description: '',
    sizes: [],
}
export const ZeroProduct =  {
    id: 0,
    name: '',
    colors: [ZeroColor],
};
export type Size = {
    id: number,
    label: string,
    number: number,
}

