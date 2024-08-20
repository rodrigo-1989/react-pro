import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";
import { products } from '../data/productos';


export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
        setShoppingCart(oldSc => {
            if (count === 0) {
                delete oldSc[product.id];
                //const {[product.id]:toDelete, ...rest}= oldSc
                //return rest;
                return { ...oldSc }
            }
            return { ...oldSc, [product.id]: { ...product, count } }
        });
    }

    return { onProductCountChange, shoppingCart, products }
}