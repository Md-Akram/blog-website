import './register.css'

const Register = () => {
    return (
        <div className="register">
            <div className="register-title">Register</div>
            <form className="register-form">
                <label>Username</label>
                <input type="text" placeholder='Enter your username' />
                <label>Email</label>
                <input type="text" placeholder='Enter your email' />
                <label>Password</label>
                <input type="password" placeholder='Enter your password' />
                <button className="register-button">
                    Register
                </button>
            </form>
            <button className="register-login-button">
                Login
            </button>
        </div>
    )
}

export default Register