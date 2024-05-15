import React, {useState} from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const login = ()=>{
    if ((username === 'admin') && (password === 'admin'))  {
      navigate('/operator')
    }else{
      alert('Invalid username or password')
    }
  }
  return (
    <>
      <div className="offcanvas offcanvas-start bg- body" tabIndex="-1" id="offcanvas" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">Login</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <form className='p-3'>
            <div className="form-group my-3">
              <label htmlFor="email" className='ms-1 mb-2'>Email address</label>
              <input type="email" className="form-control py-2" id="username"  value={username} onChange={(e) => { setUsername(e.target.value) }} /> <div id="usernameVerify" className="invalid-feedback"></div>
            </div>
            <div className="form-group my-3">
              <label htmlFor="passwordLogin" className='ms-1 mb-2'>Password</label>
              <div className="input-group">
                <input type={showPassword ? "text" : "password"} className="form-control py-2" id="passwordLogin" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <button className="btn btn-light border rounded-end" type="button" onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
                <div id="passwordLoginVerify" className="invalid-feedback"></div>
              </div>
            </div>
            <div className="mt-2">
              <a href="/signup" className='text-decoration-none link-light'>New User? Register!</a>
            </div>
            <div className="d-flex flex-column justify-content-center text-center mt-2">
              <button type="button" className="btn border btn-light px-3 my-2 fs-6" onClick={login}>Log In</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login