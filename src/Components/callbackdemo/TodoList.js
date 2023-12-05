import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function TodoList({todos,getTodo}) {
    console.log("Todolist renders")

    let items=todos?todos.map((todo)=><li><Link to={`/parent/todos/${todo.id}`} todos={todos}>{todo.title}</Link></li>):<li></li>

    return (
        <div>
            <button onClick={getTodo}>get Todo</button>
            <ul>
              {items}
            </ul>
        </div>
    );
}

export default React.memo(TodoList);