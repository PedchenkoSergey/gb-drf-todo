import React from 'react'
import { Link } from 'react-router-dom'
import '../static/css/bootstrap.min.css'


const ProjectItem = ({ project, deleteProject }) => {
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
                <td>
                    <button onClick={() => deleteProject(project.id)} type="button">Delete</button>
                </td>
            </tr>
        </tbody>
    )
}

const ProjectList = ({ projects, deleteProject }) => {
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
                {projects.map((project) => <ProjectItem project={project} deleteProject={deleteProject}/>)}
            </table>
        </div>
    )
}


export default ProjectList
