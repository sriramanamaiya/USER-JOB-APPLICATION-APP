import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Developer from './Developer'
import { filteredData, updateData } from '../helperfunctions/fiter-update-Data'
import ButtonComp from './ButtonComp'

const UsersContainer = (props) => {
    const [ userData, setUserData ] = useState([])
    const [ appliedJob, setAppliedJob ] = useState([])

    const developers =['Front-End Developer','Node.js Developer','MEAN Stack Developer','FULL Stack Developer']

    useEffect(() => {
        axios.get('https://dct-application-form.herokuapp.com/users/application-forms')
            .then((response) => {
                setUserData(response.data)
            })
            .catch((err) => {
                alert(err.message)
            })
        return () => {
            setUserData([])
        }
    },[])

    const handleClick =(e) => {
        const btnName = e.target.name
        const result = filteredData(btnName, userData)
        setAppliedJob(result)
    }

    const updateUserStatus =(data) => {
        const result = updateData(data, appliedJob)
        setAppliedJob(result)
    }

    return (
        <>
            { developers.map((dev,i) => {
                return (
                    <ButtonComp key={i} developer={dev} handleClick={(e) => handleClick(e)} />
                )
            }) }
            { appliedJob.length > 0 && (
                <Developer filterData={appliedJob} updateUserStatus={updateUserStatus} />
            ) }
        </>
    )
}

export default UsersContainer