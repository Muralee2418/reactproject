import React, { useCallback, useState } from 'react';
import TodoList from './TodoList';
function Parent(props) {
    const [counter,setCounter]=useState(0)
    const [todos,settodos]=useState()
    let getTodo=useCallback((todoitem)=>{
       fetch("https://jsonplaceholder.typicode.com/todos").then((res)=>res.json()).then((data)=>settodos(data))
       console.log(todos)

    },[todos])

    /* without using useCallback() the gettodo func will be created for each
    re-render. which changes the props of TodoList comp  and cause  re-render.
    To avoid recreation of function, useCallback is used to CACHE THE FUNCTION. it will be 
    recreated if the dependency chages

    Note: Chlid component should be wrapped with React.memo() eg:export default React.Memo(Childcomp)
    */
    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={()=>setCounter(counter+1)}>+</button>
            <button onClick={()=>setCounter(counter-1)}>-</button>
            <TodoList todos={todos} getTodo={getTodo}/>
        </div>
    );
}

export default Parent;