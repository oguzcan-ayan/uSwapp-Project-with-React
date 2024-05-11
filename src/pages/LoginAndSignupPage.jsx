import React, { useState } from 'react';

function LoginAndSignupPage() {

    const [userEntry, setUserEntry] = useState(true);

    return (
        <>

            <div className='login-and-signup-container'>

                <img className='swap-image' src="assets\images\handshake-for-login-and-signup.jpg" alt="content not found" />

                <div className='entries-project-logo'>
                    <img src="assets\images\uswapp-logo.svg" alt="content not found" />
                </div>

                <div className='entries-container'>
                    <div className='login-container'>
                        <input id='tab1' type="radio" name='tab' checked className='login' />
                        <label htmlFor="tab1" className='tab' onClick={() => setUserEntry(false)}>Log in</label>

                        <input id='tab2' type="radio" name='tab' checked className='signup' />
                        <label htmlFor="tab2" className='tab' onClick={() => setUserEntry(true)}>Sign up</label>


                    </div>

                    {userEntry ?
                        <div className='signup-container'>
                            <form className='signup-form'>
                                <div className='group'>
                                    <label htmlFor='username' className='user'>Username</label>
                                    <input id='username' type="text" className='input-log-sign' />
                                </div>
                                <div className='group'>
                                    <label htmlFor='password' className='password'>Password</label>
                                    <input id='password' type="password" className='input-log-sign' />
                                </div>
                                <div className='group'>
                                    <label htmlFor="repeat-password" className='repeat-password'>Repeat Password</label>
                                    <input id='repeat-password' type="password" className='input-log-sign' />
                                </div>
                                <div className='group'>
                                    <label htmlFor="email" className='email'>Email Address</label>
                                    <input id='email' type="email" className='input-log-sign' />
                                </div>

                                <button className='signup-btn' type='submit' value="Sign Up">Sign up</button>

                                <span className='hr' />

                                <div className='already-member' /* onClick={() => setUserEntry(false)} */>
                                    <a href="#">Already Member?</a>
                                </div>
                            </form>
                        </div>

                        :

                        <form className='login-form'>
                            <div className='group'>
                                <label htmlFor='username' className='user'>Username</label>
                                <input id='username' type="text" className='input-log-sign' />
                            </div>

                            <div className='group'>
                                <label htmlFor='password' className='password'>Password</label>
                                <input id='password' type="password" className='input-log-sign' />
                            </div>

                            <div className='group'>
                                <input id='keep-login' type="checkbox" className='keep-login' />
                                <label htmlFor="keep-login" className='keep-login-confirmator'>
                                    <span className='check-icon'></span>
                                    Keep me Logged in
                                </label>
                            </div>

                            <button className='login-btn' type='submit' value="Log In">Log in</button>

                            <span className='hr' />

                            <div className='forgot-password'>
                                <a href="#">Forgot Password?</a>
                            </div>
                        </form>
                    }
                </div>
            </div>
        </>
    )
}

export default LoginAndSignupPage;