import './login.css'

export default function Login() {
  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Larrocasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Larrocasocial.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder='Email' className="loginInput" />
            <input placeholder='Password' className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">Create a New Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}
