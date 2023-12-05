import React, { useMemo, useState } from 'react';

function Usememo(props) {
    const [faranhiet,setFaranheit]=useState(0)
    const [counter,setCounter]=useState(0)


    /*
    useMemo is used to prevent function execution for each re-renders

    - in this example the conver_to_celsius func should execute only if 
      faranheit changes.Not for counter changes.
    - to do that pass the function to useMemo()with dependecy param.
     - It helps to prevent execution of expensive functions for each
       re-rendering.

    */

    let conver_to_celsius=useMemo(()=>{
        console.log("Calculating celsius...")
    
        let r=(faranhiet-32)*5/9
        return r

    },[faranhiet])

    let inc=()=>setCounter(counter+1)
    let dec=()=>setCounter(counter-1)

    return (
        <div>
            <button onClick={inc}>+</button>
            <span>{counter}</span>
            <button onClick={dec}>-</button>
            <input type="text" onChange={(e)=>setFaranheit(parseInt(e.target.value))}/>
            <h2>{conver_to_celsius}</h2>
        </div>
    );
}

export default Usememo;