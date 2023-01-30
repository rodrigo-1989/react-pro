import { Suspense } from 'react';
import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom'
import logo from '../react.svg';
import { routes } from './routes';

export const Navigation = () => {
    return (
        <Suspense fallback={ <span>Loadin...</span>}>
            <BrowserRouter>
                <div className='main-layout'>
                    <nav>
                        <img src={logo} alt="React Logo" />
                        <ul>
                            {routes.map(({ to, name }) => (
                                <li key={to}> <NavLink to={to} className={({ isActive }) => isActive ? 'nav-active' : ''}>{name}</NavLink> </li>
                            ))}
                        </ul>
                    </nav>
                    <Routes>
                        {routes.map(({ path, name }) => (
                            <Route key={path} path={path} element={<h1>{name}</h1>} />
                        ))}
                        <Route path='/*' element={<Navigate to={routes[0].to} replace />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    )
}
