import React,{lazy,Suspense, useState} from 'react';
import ReactDOM from 'react-dom/client';
// Default export
import HeaderComponent from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestauMenu from './components/RestauMenu';
import Profile from './components/profile';
import Cart from './components/Cart';
// import Instamart from './components/instamart';
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom'; // Correct import from 'react-router-dom'
import { Provider } from 'react-redux';
import Store from '../utils/Store';
// Named export
// import { Title, HeaderComponent } from './components/Header';
// or
// import HeaderComponent, { Title } from './components/Header.jsx'; 
const Instamart=lazy(()=>import('./components/instamart'));
const AppLayout = () => {
//  
    return(
    <Provider store={Store}>
 
        <HeaderComponent />
        <Outlet/>
        <Footer />
      
    </Provider>
)
};

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
                element: <About />,
                children:[
                    {
                        path:"Profile",//if write  /profile then it goes onto localhost124/profile
                        element:<Profile/>
                    }
                ]
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurant/:id',
                element: <RestauMenu />
            },
            {
                path: '/cart',
                element:<Cart/>,
            }
            // {
            //     path:'/instamart',
            //     element: 
            //     <Suspense>
            //         <Instamart/>
            //     </Suspense> 
            // }
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
// router{} => pass some configuration props