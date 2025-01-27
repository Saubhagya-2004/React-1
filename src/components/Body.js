import{ ResturantList} from '../components/constant';
import { useState } from 'react';
const Body=()=>{
    const [search,setSearch]=useState('');//state variable search is  state variable & setSearch is updated fxn
    return (
    <>
    <div className='search-container'>
        <input className='search-box' 
        type='text' 
        placeholder='search'
        value={search}
        onChange={(e)=>{//onchange method
            setSearch(e.target.value);
        }}>
        </input>
        <button className='search-btn'>search</button>
    </div>
    <div>
     <ResturantList/>
    </div></>
 )};
 export default Body;