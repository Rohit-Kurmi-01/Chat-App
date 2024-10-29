import React from 'react'

function Navebar() {
    return (
        <div className='navebar'>
            <span className='logo'>Bussines Chat</span>
            <div className='user'>
                <img src="./src/Img/profile.jpg" alt="R" />
                <span>Rohit</span>
                <button>logOut</button>
            </div>
        </div>
    )
}

export default Navebar
