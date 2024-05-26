import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
/* import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
const { login, register } = useKindeAuth(); */

function LoginAndSignupPage() {

    const [userEntry, setUserEntry] = useState(true);

    return (
        <>

            <Helmet>
                <title>Login and Signup</title>
                <meta name='description' content='login-and-signup-page' />
            </Helmet>

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
                                <div className='signup-form-user-entry-info'>
                                    <div className='group'>
                                        <label htmlFor='username' className='user'>Username</label>
                                        <input id='username' type="text" className='input-log-sign' placeholder='example' />
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
                                        <input id='email' type="email" className='input-log-sign' placeholder='example@example.com' />
                                    </div>
                                    <div className='group'>
                                        <label htmlFor="gender" className='gender'>Gender</label>
                                        <select id='gender'>
                                            <option value="default-gender">Select Your Gender...</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                    <div className='group'>
                                        <label htmlFor="address" className='address'>Address</label>
                                        <input id='address' type="text" className='input-log-sign' placeholder='New York/NYC, United States' />
                                    </div>
                                    <div className='group'>
                                        <label htmlFor="contact-num" className='contact-num'>Contact Number</label>
                                        <input id='contact-num' type="tel" className='input-log-sign' placeholder='05XX XXX XX XX' />
                                    </div>
                                </div>

                                <button className='signup-btn' type='button' value="Sign Up" /* onClick={register} */>Sign up</button>

                                <span className='hr' />

                                <div className='already-member'>
                                    <a href="#">Already Member?</a>
                                </div>
                            </form>
                        </div>

                        :

                        <form className='login-form'>
                            <div className='group'>
                                <label htmlFor='username' className='user'>Username</label>
                                <input id='username' type="text" className='input-log-sign' placeholder='example' />
                            </div>

                            <div className='group'>
                                <label htmlFor='email' className='email'>Email Address</label>
                                <input id='email' type="email" className='input-log-sign' />
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

                            <button className='login-btn' type='button' value="Log In" /* onClick={login} */>Log in</button>

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