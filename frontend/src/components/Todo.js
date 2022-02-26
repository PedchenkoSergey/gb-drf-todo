import React from 'react'
import '../static/css/bootstrap.min.css'


const TodoItem = ({ todo }) => {
    return (
        <tbody>
            <tr>
                <td>
                    {todo.project}
                </td>
                <td>
                    {todo.text}
                </td>
                <td>
                    {todo.user}
                </td>
                <td>
                    {todo.createAt}
                </td>
            </tr>
        </tbody>
    )
}

export const TodoList = ({ todos }) => {
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
                {todos.map((todo) => <TodoItem todo={todo} />)}
            </table>
        </div>
    )
}
