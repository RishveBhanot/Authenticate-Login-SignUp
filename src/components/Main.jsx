import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Main = () => {

    const navigate = useNavigate();

const backToSignUp = () => {
    navigate('/login');
}

return (
    <div>
        <Link to="/main">Main Page</Link>

        <button onClick={backToSignUp}>Sign Out</button>
    </div>
    )
}

export default Main