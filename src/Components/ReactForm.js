import React, { useState } from 'react';
//controlled components - form state is controlled by react
//each field is mapped with state.
//Easy to test and maintain



function ReactForm(props) {
    const [user, setUser]=useState({})

    let handleChange=(event)=>{
     setUser(prevalue=>({...prevalue,[event.target.name]:event.target.value}))
    }
    let handleSubmit=(e)=>{
        e.preventDefault()
        console.log(user)
        //send values to server
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div><input type="text" name="username" value={user.name} onChange={handleChange} /></div>
                <div><input type="text" name="age" value={user.age} onChange={handleChange}/></div>
                <div><input type="submit" value="Submit" /></div>
            </form>
        </div>
    );
}

export default ReactForm;