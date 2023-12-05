import React, { useRef, useState } from 'react';

function UseRef(props) {
    const [counter,setcounter]=useState(0)
    let btn_count=useRef(0)
    let handleClick=()=>{
        console.log("clicked...")
        btn_count.current=btn_count.current+1
    }
    return (
        <div>
            <button onClick={handleClick}>Clicked {btn_count.current} times</button>
            <button onClick={()=>setcounter(counter+1)}>inc</button> 
        </div>
    );
}

export default UseRef;