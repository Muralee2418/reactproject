import React, { useState } from 'react';

function Names(props) {
    const [names,setNames]=useState([])
    const [filteredNames,setFilteredNames]=useState([])
    let name=""
    let handleSearch=(event)=>{
        console.log(event.target.value)
        if(event.target.value!=""){
        let f_names=names.filter((n)=>n.startsWith(event.target.value))
        setFilteredNames(f_names)
        }
        else{
            setFilteredNames(names)
        }

    }
    let handleAdd=()=>
    {
     if(name){
       setNames([...names,name])
     }
    }

    let handleChange=(event)=>
    {
        name=event.target.value
    }

    return (
        <div>
            <input type="text" placeholder="enter name" onChange={handleChange}></input>
            <input type="text" placeholder="search name" onChange={handleSearch}></input>
            <button onClick={handleAdd}>add</button>
            <div>
                <ul>
                    {
                        names.map((n)=><li>{n}</li>)
                    }
                </ul>
            </div>
            <div>
                <ul>
                    {
                        filteredNames.map((n)=><li>{n}</li>)
                    }
                </ul>
            </div>
        </div>
    );
}

export default Names;