import React, { useState } from 'react';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // TODO：将表单发送到后端
    console.log("Sign Up");
  }


  return (
    <>
      <div className='signup-container'>
        <h2>Sign Up</h2>

        <form onSubmit={handleSubmit}>

          {/* 输入邮箱 */}
          <div>
            <label htmlFor='email'>
              Email:
            </label>
            <input type="email" name='email' value={email} onChange={(e) => {
              setEmail(e.target.value);
            }} required />
          </div>

          {/* 输入密码 */}
          <div>
            <label htmlFor='password'>
                Password:
            </label>
            <input type="password" name="password" value={password} onChange={(e) => {
                setPassword(e.target.value);
            }} required />
          </div>

          {/* 确认密码 */}
          <div>
            <label htmlFor="confirmedPassword">
              Confirm the password:
            </label>
            <input type="password" name='confirmedPassword' value={confirmedPassword} onChange={(e) => {
              setConfirmedPassword(e.target.value);
            }} required />
          </div>

          <button type='submit'>Sign Up</button>
        </form>
      </div>
    </>
  );
}

export default SignupPage;