import React from 'react'


function Login() {
    return (
       <div className="formContainer">
        <div className="formWrapper">
            <span className='logo'> Bussiness Chat</span>
            <span className='title'>Login</span>
            <form >
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                
                <button>Login</button>
                
            </form>
            <p>you don't have an account ? Register</p>
        </div>
       </div>
    )
}

export default Login
