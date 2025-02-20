import { Outlet } from "react-router-dom";
const About =()=>{
    return(
        <>
        <div className="about">
            <h1>Hi</h1>
            <h2>i'm Chiku</h2>
            {Outlet}
        </div>
        </>
    )
}
export default About;