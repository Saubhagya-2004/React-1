import React from "react";
import { Outlet } from "react-router-dom";
const About=()=>{
    return(
        <>
        <div>About</div>
        <h1>Hi</h1>
        <Outlet/>
        </>
    )
}
export default About;
