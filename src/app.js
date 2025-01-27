import React from 'react';
import ReactDOM from 'react-dom/client';
//default export
import HeaderComponent from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
//Named export
// import { Title,HeaderComponent }  from './components/Header';
//or
// import HeaderComponent,{ Title } from './components/Header.jsx'; 


// const Title=()=>(
//     <img 
//     className='logo'
//     src='https://th.bing.com/th/id/OIP.WV9sVQ5yJJ94ZqPoAWh7OAHaEK?w=280&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='logo'/>
// );

const AppLayout=()=>(
    <>
    <HeaderComponent/>
    <Body/>
    <Footer/>
    </>
)
//react fragment
// const jsx=(
//     <React.Fragment>
//     <h1>Jsx</h1>
//     <h2>This is jsx</h2>
//     </React.Fragment>
    
// );

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);