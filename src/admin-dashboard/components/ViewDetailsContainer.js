import React, { useState } from "react"
import axios from 'axios'

import ShowDetails from "./ShowDetails"

const ViewDetailsContainer = (props) => {
    const { id } = props
    const [ user, setUser ] = useState({})
    const [ show, setShow ] = useState(false)
      
    const handleClick =() => {
        axios.get(`https://dct-application-form.herokuapp.com/users/application-form/${id}`)
            .then((response) => {
                setUser(response.data)
                setShow(true)
            })
            .catch((err) => {
                alert(err.message)
            })   
    }

    const handleClose = () => setShow(false)
    
    return (
        <>
            <ShowDetails user={user} handleClick={handleClick} handleClose={handleClose} show={show} />
        </>
    )
}

export default ViewDetailsContainer