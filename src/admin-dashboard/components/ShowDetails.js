import React from "react"
import { Modal, Button } from "react-bootstrap"

const ShowDetails = (props) => {
    const { handleClick, user, handleClose, show } = props

    return (
        <>
            <Button variant="primary" className="p-1" onClick={handleClick}>ViewDetails</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title><p>{user.name} Profile</p></Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    { Object.keys(user).length > 0 && (
                        <>
                        <div className="d-flex justify-content-between">
                            <span>Contact No</span><span>{user.phone}</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            <span>Email ID</span><span>{user.email}</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            <span>Skills</span><span>{user.skills}</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            <span>Experience</span><span>{user.experience}</span>
                        </div>
                        </> 
                     ) }
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ShowDetails