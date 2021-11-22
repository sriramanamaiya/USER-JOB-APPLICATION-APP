import React from "react"
import { Table } from 'react-bootstrap'

import ApplicationStatus from "./ApplicationStatus"
import ViewDetailsContainer from "./ViewDetailsContainer"

const Developer = (props) => {
    const { filterData, updateUserStatus } = props

    return (
        <div className="mt-3">
            <h3>{filterData[0].jobTitle}s</h3>
            <h4 className="mb-3">{`List of candiates applied for ${filterData[0].jobTitle} job`}</h4>
            <Table  striped bordered hover size="sm" >
                <thead className="align-middle">
                    <tr className="align-middle">
                        <th  className="align-middle">Name</th>
                        <th>Techanical Skills</th>
                        <th>Experience</th>
                        <th>Applied Date</th>
                        <th>View Details</th>
                        <th>Update Application Status</th>
                    </tr>
                </thead>
                <tbody className="align-middle">
                    { filterData.map((user) => {
                        return (
                            <tr key={user._id}>
                                <td >{user.name}</td>
                                <td className="text-break">{user.skills}</td>
                                <td>{user.experience}</td>
                                <td>{new Date(user.createdAt).toDateString()}</td>
                                <td><ViewDetailsContainer id={user._id}/></td>
                                <td className="text-center"><ApplicationStatus 
                                        status={user.status} 
                                        id={user._id} 
                                        updateUserStatus={updateUserStatus}
                                /></td>
                            </tr>
                        )
                    }) }
                </tbody>
            </Table>
        </div>
    )
}

export default Developer