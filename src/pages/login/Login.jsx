import './login.css'

const Login = () => {
    return (
        <div className="login">
            <div className="login-title">Login</div>
            <form className="login-form">
                <label>Email</label>
                <input type="text" placeholder='Enter your email' />
                <label>Password</label>
                <input type="password" placeholder='Enter your password' />
                <button className="login-button">
                    Login
                </button>
            </form>
            <button className="login-register-button">
                Register
            </button>
        </div>
    )
}

export default Login