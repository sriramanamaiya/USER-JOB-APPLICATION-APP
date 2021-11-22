import React from 'react'
import { Button } from 'react-bootstrap'

const ButtonComp = (props) => {
    const { handleClick, developer } = props

    return (
        <Button variant="outline-primary" className="me-2 mb-1" name={developer} onClick={handleClick}>{developer}</Button>
        
    )
}

export default ButtonComp