import React, { useEffect, useState } from 'react';
import styles from './Comp1.module.css';


function Comp1(props) {
    const [msg, setMsg]=useState("hello wor")
    const [counter,setCounter]=useState(0)
    

   
    let changeCounter=()=>{
        setCounter(counter+1)
    }

    let info=()=>{
        return msg
    }

    function greet(m){
     return m
    }

    useEffect(()=>{
      setCounter(counter+1)
       console.log("useeffect executed...")
    },[msg])
    return (
        <div className={styles.compdiv}>
            <h2>{greet("good morning")}</h2>
            <hr></hr>
             <h2>{counter}</h2>
            <button>click</button>
            <button onClick={changeCounter}>change</button>
            
        </div>
    );
}

export default Comp1;