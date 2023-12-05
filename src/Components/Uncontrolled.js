import React, { useRef } from 'react';

function Uncontrolled(props) {
    let username=useRef()
    let pw=useRef()
    let handleSubmit=(event)=>{
        event.preventDefault();
        console.log("form submitted..")
        console.log(username.current.value)
        console.log(pw.current.value)

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                 <label>Username:
                <input ref={username} type="text"/>
                </label> 
                <label>Username:
                <input type="password" ref={pw}/>
                </label> 
                <input type="submit" value="Login"/>
            </form>
        </div>
    );
}

export default Uncontrolled;