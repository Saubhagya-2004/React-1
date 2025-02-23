import React from 'react'
import { useState,useEffect } from 'react'
function useOnline() {
    const [isOnline,setIsOnline]= useState(true);//give by default
useEffect(() => { //use hook for write eventli.. multiple time otherwise it only once
    window.addEventListener('online',()=>{
        setIsOnline(true);
    });
    window.addEventListener('offline',()=>{
        setIsOnline(false);
    },[])
})
  return isOnline;
}

export default useOnline
