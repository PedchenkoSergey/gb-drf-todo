import React from 'react'
import '../static/css/bootstrap.min.css'


const UserItem = ({ user }) => {
    return (
        <tbody>
            <tr>
                <td>
                    {user.username}
                </td>
                <td>
                    {user.firstName}
                </td>
                <td>
                    {user.lastName}
                </td>
                <td>
                    {user.email}
                </td>
            </tr>
        </tbody>
    )
}

const UserList = ({ users }) => {
    return (
        <div class="container">
            <table class="table ">
                <th>
                    Username
                </th>
                <th>
                    First name
                </th>
                <th>
                    Last Name
                </th>
                <th>
                    Email
                </th>
                {users.map((user) => <UserItem user={user} />)}
            </table>
        </div>
    )
}


export default UserList
