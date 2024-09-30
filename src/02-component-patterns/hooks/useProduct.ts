import { useEffect, useRef, useState } from 'react'
import { onChangeArgs, Product, InitialValues } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const useProduct = ({ product, onChange, value = 0, initialValues }: useProductArgs) => {
    const [counter, setCounter] = useState<number>(initialValues?.count || value);

    const isMounted = useRef(false);

    useEffect(() => {
        if (!isMounted.current) return;
        setCounter(initialValues?.count || value);
    }, [value]);

    useEffect(() => {
        isMounted.current = true;
    }, [])

    const increaseBy = (value: number) => {
        let count = Math.max(counter + value, 0);
        if (initialValues?.maxCount)
            count = Math.min(count, initialValues.maxCount);
        setCounter(count);
        onChange && onChange({ count, product });
    }

    const reset = ()=>{
        setCounter(initialValues?.count || value);
    }

    return {
        counter,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,

        increaseBy,
        reset
    }

}