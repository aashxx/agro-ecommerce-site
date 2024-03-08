import React from 'react';
import Link from 'next/link';

const Login = () => {

    return (
        <div className='signForm'>
            <h1>Login</h1>
                <form>
                    <div className="details">
                        <label htmlFor="name">Email ID</label>
                        <input type="email" name='email' required/>
                    </div>
                    <div className="details">
                        <label htmlFor="name">Password</label>
                        <input type="password" name='password' required/>
                        <div className="showPass"><input id='showPass' type="checkbox" /><label htmlFor="showPass">Show Password</label></div>
                    </div>
                    <button type='submit' id='button-anime'>Login</button>
                </form>
            <p>Don't have an account? <Link href="/auth/signup">Signup</Link></p>
        </div>
    )
}

export default Login;