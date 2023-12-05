import React, { useReducer } from 'react';

//if the component has multiple state actions , then it is required to add
//handle functions for each actions. instead of that we can create a
// reducer function outside the component to handle all actions

function reducer(state,action)
{
  switch(action.type)
  {
    case "changename":
        return {
            ...state,
            name:action.newname,
        }
    case "changeage":
        return {
            ...state,
            age:action.newage,
        }
    
  }
}

function UseReducer(props) {
    const[state,dispatch]=useReducer(reducer,{name:"jim",age:"10"})
    console.log("Rendering....")
    return (
        <div>
            <p>{state.age}</p>
            <p>{state.name}</p>
            <button onClick={()=>dispatch({type:"changename",newname:"murali"})}>Change name</button>
            <button onClick={()=>dispatch({type:"changeage",newage:30})}>Change Age</button>
        </div>
    );
}

export default UseReducer;