import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

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
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>

            {/* 输入邮箱 */}
            <div>
                <label htmlFor='email'>
                    Email:
                </label>
                <input type="email" name='email' value={email} onChange={(e) => {
                    setEmail(e.target.value)
                }} required />
            </div>

            {/* 输入密码 */}
            <div>
                <label htmlFor='password'>
                    Password:
                </label>
                <input type="password" name='password' value={password} onChange={(e) => {
                    setPassword(e.target.value)
                }} required />
            </div>

            <button type='submit'>Log In</button>
        </form>
      </div>
    </>
  );
}

export default LoginPage;