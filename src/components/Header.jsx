 export const Title=()=>(<a href="/">
<img 
className="logo"
alt="logo"
src="https://th.bing.com/th/id/OIP.WV9sVQ5yJJ94ZqPoAWh7OAHaEK?w=280&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
</a>
);
const HeaderComponent=()=>(
    <div className='header'>
        <Title/>
        <div className='nav-items' >
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);
export default HeaderComponent;
