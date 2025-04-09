import React from 'react'
import { useState,useEffect } from 'react'
function useOnline() {
    const [isOnline,setIsOnline]= useState(true);//give by default
    useEffect(() => {
    //use hook for write eventli.. multiple time otherwise it only once
    // const handleOnline = ()=>{
    //     setIsOnline(true);
    // };
    // const handleOffline = ()=>{
    //     setIsOnline(true);
    // }
    window.addEventListener('online',()=>{
            setIsOnline(true);
        });
    window.addEventListener('offline',()=>{
            setIsOnline(false);
        })
    //remove/unmount for good practice
    // return ()=>{
    //     window.removeEventListener('online',handleOnline);
    //     window.removeEventListener('offline',handleOffline);
    // }
})
  return isOnline;
}

export default useOnline
