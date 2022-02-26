import React from 'react'
import { useParams } from 'react-router-dom'
import '../static/css/bootstrap.min.css'


const ProjectItem = ({ project }) => {
    return (
        <tbody>
            <tr>
                <td>
                    {project.name}
                </td>
                <td>
                    {project.url}
                </td>
                <td>
                    {project.users}
                </td>
            </tr>
        </tbody>
    )
}

const ProjectDetailList = ({ projects }) => {
    let { projectName } = useParams();
    let filtered_items = projects.filter((project => project.name.includes(projectName)))

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
                {filtered_items.map((project) => <ProjectItem project={project} />)}
            </table>
        </div>
    )
}


export default ProjectDetailList
