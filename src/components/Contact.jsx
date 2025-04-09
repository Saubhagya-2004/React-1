import { title } from "process";
import React from "react";
import { useState } from "react";
const Phone=({title,description,visible,setVisible})=>{
    // const[visible,setVisible]=useState(false)
    return(
        <div>
            <p>{title}</p>
            {visible && <h6>{description}</h6> }
            {visible?<button onClick={()=>setVisible(false)}>hide</button>:<button onClick={()=>setVisible(title)}>show</button>}
        </div>
    )
}
const Contact=()=>{
const [visiblesection,setVisiblesection] =useState(title)
    
    return(
        <>
        <h1>Contact Us : +12345678</h1>
        <Phone  title={'about'} description={'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of'} 
         visible={visiblesection==='about'} 
         setVisible={setVisiblesection}
          />
        <Phone  title={'contact'} description={'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of'} visible={visiblesection==='contact'} 
       setVisible={setVisiblesection}/>
        <Phone  title={'product'} description={'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of'} visible={visiblesection==='product'} 
        setVisible={setVisiblesection}/>
       
        </>
    )
}
export default Contact;