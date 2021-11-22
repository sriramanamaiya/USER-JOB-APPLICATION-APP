import React from 'react'

import { Link, Route } from 'react-router-dom'

import ApplicationForm from './job-application/ApplicationForm'
import AdminDashBoard from './admin-dashboard/components/AdminDashBoard'

const Navs = (props) => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar navbar-light" style={{backgroundColor: "#e3f2fd"}}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Home</Link>

                    <div className="collapse navbar-collapse">
                        <div className="navbar-nav">
                            <Link className="nav-link" to="/application-form">Apply for Job</Link>
                            <Link className="nav-link" to="/admin-dashboard">Admin DashBoard</Link>
                        </div>
                    </div>
                </div>
            </nav>
            
            <Route path="/application-form" component={ApplicationForm} />
            <Route path="/admin-dashboard" component={AdminDashBoard} />
        </div>
    )
}

export default Navs