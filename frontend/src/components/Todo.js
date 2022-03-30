import React from 'react'
import '../static/css/bootstrap.min.css'


const TodoItem = ({ todo, deleteTodo }) => {
    return (
        <tbody>
            <tr>
                <td>
                    {todo.project.name}
                </td>
                <td>
                    {todo.text}
                </td>
                <td>
                    {todo.user.username}
                </td>
                <td>
                    {todo.createAt}
                </td>
                <td>
                    <button onClick={() => {
                        console.log(todo)
                        deleteTodo(todo.id)}} type="button">Delete</button>
                </td>
            </tr>
        </tbody>
    )
}

export const TodoList = ({ todos, deleteTodo }) => {
    return (
        <div class="container">
            <table class="table ">
                <th>
                    Project Name
                </th>
                <th>
                    ToDo Text
                </th>
                <th>
                    Owner
                </th>
                <th>
                    Created
                </th>
                {todos.filter((todo) => todo.isActive).map((todo) => <TodoItem todo={todo} deleteTodo={deleteTodo} />)}
            </table>
        </div>
    )
}
