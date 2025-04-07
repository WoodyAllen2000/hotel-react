import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import '../css/Login.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useContext(AuthContext);

    async function handleSubmit(e) {
        e.preventDefault();

        // 将邮箱密码发送至后端
        try {
            const response = await fetch("/auth/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password}),
            });

            const data = await response.json();

            if (response.ok) {
                login();
            } else {
                alert(data.message || "Something Wrong");
            }

        } catch (error) {
            console.error(error);
        }
        console.log("log in");
    }

  return (
    <>
      <div className='login-container'>
        <div className='internal-container'>
            <img src="/logo.png" />
            <h2>Log In</h2>
            <form onSubmit={handleSubmit}>

                <div className='border'>
                    {/* 输入邮箱 */}
                    <div className='field-container'>
                        <label htmlFor='email'>
                            Email:
                        </label>
                        <input type="email" name='email' value={email} onChange={(e) => {
                            setEmail(e.target.value)
                        }} required />
                    </div>

                    {/* 输入密码 */}
                    <div className='field-container'>
                        <label htmlFor='password'>
                            Password:
                        </label>
                        <input type="password" name='password' value={password} onChange={(e) => {
                            setPassword(e.target.value)
                        }} required />
                    </div>
                </div>

                <div className='btn-container'>
                    <button type='submit'>Confirm</button>
                </div>

                {/* 还没有账号？提供注册链接 */}
                <div className='p-container'>
                    <p>
                        <Link to='/signup'>
                            Don&apos;t have an account?
                        </Link>
                    </p>
                </div>
            </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;