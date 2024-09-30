

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === "development";

import { useEffect, useRef } from "react";

const useDevEffect = (cb: () => void, deps: any[]) => {
  const ran = useRef(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development' || ran.current) return;

    cb();
    ran.current = true;

    // No es necesario limpiar nada en este caso
    return () => {};
  }, deps);
};

export const useOnceEffect = isDev ? useDevEffect : useEffect;