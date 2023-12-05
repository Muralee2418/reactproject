import React from 'react';
import { useParams } from 'react-router-dom';

function Todo({todos}) {
    let params=useParams()
    let todo=todos.filter((todo)=>todo.id==params["id"])
    return (
        <div>
            <h1>{todo[0].title}</h1>
            <h3>{todo[0].completed}</h3>
        </div>
    );
}

export default Todo;