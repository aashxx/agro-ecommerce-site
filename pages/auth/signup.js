import React from 'react';
import Link from 'next/link';

const Signup = () => {

    return (
        <div className='signForm'>
            <h1>Signup</h1>
            <form>
                <div className="details">
                    <label htmlFor="name" required>Name</label>
                    <input type="text" name='name'/>
                    {/* Validation */}
                    {/* {errors.name && <span className='validation'>{errors.name}</span>} */}
                </div>
                <div className="details">
                    <label htmlFor="name">Email ID</label>
                    <input type="email" name='email'/>
                    {/* Validation */}
                    {/* {errors.email && <span className='validation'>{errors.email}</span>} */}
                </div>
                <div className="details">
                    <label htmlFor="name">Password</label>
                    <input type="password" name='password'/>
                    {/* Validation */}
                    {/* {errors.password && <span className='validation'>{errors.password}</span>} */}
                </div>
                <div className="details">
                    <label htmlFor="name">Confirm Password</label>
                    <input type="password" name='cpassword'/>
                    {/* Validation */}
                    {/* {errors.cpassword && <span className='validation'>{errors.cpassword}</span>} */}
                </div>
                <div className="showPass"><input id='showPass' type="checkbox" style={{marginRight: '7px'}} /><label htmlFor="showPass">Show Password</label></div>
                <button type='submit' id='button-anime'>Signup</button>
            </form>
            <p>Already have an account? <Link href="/auth/login">Login</Link></p>
        </div>
    )
}

export default Signup;