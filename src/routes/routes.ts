import { lazy, LazyExoticComponent } from "react";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
import LazyLayout from "../01-lazyload/layout/LazyLayout";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: JSXComponent | LazyExoticComponent<JSXComponent>;
    name: string;
}

const lazy1 = lazy(() => import(/*webPackChunkName "Lazy Layout"*/'../01-lazyload/layout/LazyLayout'));
const lazy2 = lazy(() => import(/*webPackChunkName "LazyPage2"*/'../01-lazyload/pages/LazyPage2'));
const lazy3 = lazy(() => import(/*webPackChunkName "LazyPage3"*/'../01-lazyload/pages/LazyPage3'));

export const routes: Route[] = [
    { to: '/lazyload/', path: '/lazyload/*', Component: LazyLayout, name: 'LazyLayout - Dash' },
    { to: '/no-lazy', path: 'no-lazy', Component: NoLazy, name: 'No lazy' },
] 