import React from 'react'
import { Navigate, Outlet, Route } from 'react-router-dom'


function PrivateRoute() {
    const getToken = () => {
        return localStorage.getItem('token')
    }

    const token = getToken();

    return (
        token ? <Outlet/> : <Navigate to="/register" />
    )
}

export default PrivateRoute