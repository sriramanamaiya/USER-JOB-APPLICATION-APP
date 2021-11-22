import React from 'react'

import UsersContainer from './UsersContainer'

const AdminDashBoard = (props) =>{
    return (
        <div className="container">
            <h1 className="display-6 mt-2 mb-2">Admin Dashboard</h1>
            <UsersContainer />
        </div>
    )
}

export default AdminDashBoard