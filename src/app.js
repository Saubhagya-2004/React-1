import React from 'react';
import ReactDOM from 'react-dom/client';
// Default export
import HeaderComponent from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestauMenu from './components/RestauMenu';
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom'; // Correct import from 'react-router-dom'

// Named export
// import { Title, HeaderComponent } from './components/Header';
// or
// import HeaderComponent, { Title } from './components/Header.jsx'; 

const AppLayout = () => (
    <>
        <HeaderComponent />
        <Outlet/>
        <Footer />
    </>
);

// Also write it under AppLayout component
const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error/>,
        children:[

            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurant/:id',
                element: <RestauMenu />
            },
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
// router{} => pass some configuration props