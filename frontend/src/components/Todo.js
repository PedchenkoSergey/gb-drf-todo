import React from 'react'
import { Link } from 'react-router-dom'

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
                    <button class="col-sm btn btn-danger" onClick={() => deleteTodo(todo.id)} type="button">Delete</button>
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
            <Link class="col-sm btn btn-success" to='/todos/create'>Create</Link>
        </div>
    )
}
