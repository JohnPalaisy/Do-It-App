import React from 'react'

const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todos => {
            return(
                <li className="collection-item" key={todos.id}>
                    <div>
                        {todos.content}
                        <a href="#!" onClick={ () => {deleteTodo(todos.id)} } className="secondary-content grey-text">
                            <i className="material-icons">delete</i>
                        </a>
                    </div>
                </li>
            )
        })
    ) : (
        <p>Wow! Job well done!</p>
    )
    return(
        <ul className="collection with-header" >
            <li className="collection-header blue white-text"><h3>todos</h3></li>
            {todoList}
        </ul>
    )
}

export default Todos