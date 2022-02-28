import React from 'react'
import { Link } from 'react-router-dom'
import '../static/css/bootstrap.min.css'


const ProjectItem = ({ project }) => {
    return (
        <tbody>
            <tr>
                <td>
                    <Link to={`project/${project.name}`}>{project.name}</Link>
                </td>
                <td>
                    {project.url}
                </td>
                <td>
                    {project.users.map((user) => user.username)}
                </td>
            </tr>
        </tbody>
    )
}

const ProjectList = ({ projects }) => {
    return (
        <div class="container">
            <table class="table ">
                <th>
                    Project Name
                </th>
                <th>
                    Project URL
                </th>
                <th>
                    Users
                </th>
                {projects.map((project) => <ProjectItem project={project} />)}
            </table>
        </div>
    )
}


export default ProjectList
