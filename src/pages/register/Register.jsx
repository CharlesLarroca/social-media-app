import './register.css'

export default function Register() {
  return (
    <div className="registerContainer">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Larrocasocial</h3>
          <span className="registerDesc">
            Connect with friends and the world around you on Larrocasocial.
          </span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <input placeholder='Username' className="registerInput" />
            <input placeholder='Email' className="registerInput" />
            <input placeholder='Password' className="registerInput" />
            <input placeholder='Password Again' className="registerInput" />
            <button className="registerButton">Sign Up</button>
            <button className="registerRegisterButton">Login into a Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}
