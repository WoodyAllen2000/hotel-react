import React, { useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../css/Signup.css'

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  const { login } = useContext(AuthContext);

  async function handleSubmit(e) {
    e.preventDefault();

    // TODO：将表单发送到后端
    try {
      const response = await fetch("/auth/signup", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json;

      if (response.ok) {
        login();
      } else {
        alert(data.message || "Something wrong");
      }

    } catch (error) {
      console.error(error);
    }

    console.log("Sign Up");
  }


  return (
    <>
      <div className='signup-container'>

      <div className='internal-container'>
        <img src="/logo.png" />
        <h2>Sign Up</h2>

        <form onSubmit={handleSubmit}>

          {/* 输入邮箱 */}
          <div className='field-container'>
            <label htmlFor='email'>
              Email:
            </label>
            <input type="email" name='email' value={email} onChange={(e) => {
              setEmail(e.target.value);
            }} required />
          </div>

          {/* 输入密码 */}
          <div className='field-container'>
            <label htmlFor='password'>
                Password:
            </label>
            <input type="password" name="password" value={password} onChange={(e) => {
                setPassword(e.target.value);
            }} required />
          </div>

          {/* 确认密码 */}
          <div className='field-container'>
            <label htmlFor="confirmedPassword">
              Confirm the password:
            </label>
            <input type="password" name='confirmedPassword' value={confirmedPassword} onChange={(e) => {
              setConfirmedPassword(e.target.value);
            }} required />
          </div>

          <div className='btn-container'>
            <button type='submit'>Confirm</button>
          </div>

          {/* 已有账号？ 直接登录 */}
          <div className='p-container'>
            <p>
                <Link to='/login'>
                    Already has an account?
                </Link>
            </p>
          </div>
        </form>

      </div>
      </div>
    </>
  );
}

export default SignupPage;