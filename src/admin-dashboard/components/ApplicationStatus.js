import React from "react"
import axios from 'axios'

const ApplicationStatus = (props) => {
    const { status, id, updateUserStatus } = props

    const handleClick =(e) => {
        if( e.target.name === 'shortlist'){
            axios.put(`https://dct-application-form.herokuapp.com/users/application-form/update/${id}`, { status:'shortlisted' })
                .then((response) => {
                    updateUserStatus(response.data)
                })
                .catch((err) => {
                    alert(err.message)
                })
        }else if( e.target.name === 'reject' ){
            axios.put(`https://dct-application-form.herokuapp.com/users/application-form/update/${id}`, { status:'rejected' })
            .then((response) => {
                updateUserStatus(response.data)
            })
            .catch((err) => {
                alert(err.message)
            })
        }
    }

    let button
    if( status ==='applied' ){
        button =(
        <>
            <button className="btn btn-success p-1 me-1 mb-1" name="shortlist" onClick={(e)=>handleClick(e)}>Shortlist</button>
            <button className="btn btn-danger p-1" name="reject" onClick={(e)=>handleClick(e)}>Reject</button>
        </>)
    }else if( status ==='shortlisted' ){
        button =<button className="btn btn-success p-1" disabled={true}>Shortlisted</button>
    }else if( status === 'rejected' ){
        button =<button className="btn btn-danger p-1" disabled={true}>Rejected</button>
    }
    
    return (
        <>
            { button }
        </>
    )
}

export default ApplicationStatus