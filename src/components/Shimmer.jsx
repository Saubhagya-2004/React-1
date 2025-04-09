const Shimmer=()=>{
    return(
        <>
        <input type="text" name="btn" id=""  placeholder="search" style={{borderRadius: "4rem"}}/>
        <button type="btn" style={{marginLeft:'0.5rem'}}>search</button>
        <div className="shimmer-container">
        {Array(12).fill('').map((e,index)=>(<div key={index} className="shimmer">
        <h1 className="Demo">
            <img  alt="" />
           <p >
            
           </p>
        </h1>
       
        </div>))}</div>
       
        
        
            </>
        
        
    )
}
export default Shimmer;