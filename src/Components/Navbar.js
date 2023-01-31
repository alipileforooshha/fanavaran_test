import React from 'react'
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const signOut = (e) => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        navigate('/login')
    }
    return (
        <ul className='d-flex justify-content-end flex-row text-decoration-none list-unstyled border border-primary'>
            {localStorage.getItem('token') ? <li className='px-4'><button className='btn btn-danger text-decoration-none' onClick={(e) => {signOut(e)}}>خروج</button></li> : ""}
        </ul>
    )
}

export default Navbar
