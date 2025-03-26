import React from 'react'
import { replace, useNavigate } from 'react-router-dom';
function Logout() {
    const navigate = useNavigate()

    const handleLogout = () => {

        localStorage.removeItem('access');
        localStorage.removeItem('role');
        navigate('/login',{replace: true})

    }
  return (
    <div>
        <button onClick={handleLogout}>logout</button>
    </div>
  )
}

export default Logout
