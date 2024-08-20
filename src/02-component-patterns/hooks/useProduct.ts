import { useEffect, useState } from 'react'
import { onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number,
}

export const useProduct = ({ product, onChange, value = 0 }: useProductArgs) => {
    const [counter, setCounter] = useState(value);

    useEffect(() => {
        setCounter(value);
    }, [value]);


    const increaseBy = (value: number) => {
        const count = Math.max(counter + value, 0);
        setCounter(count);
        onChange && onChange({ count, product });
    }

    return { counter, increaseBy }
}