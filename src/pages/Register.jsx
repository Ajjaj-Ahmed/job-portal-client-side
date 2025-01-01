import React, { useContext } from 'react';
import animationPic from '../assets/lottiee/register.json'
import Lottie from 'lottie-react';
import { AuthContext } from '../Context/AuthContext/AuthProvider';
import GoogleLogin from './shared/googleLogin';

const Register = () => {
    const {createUser} = useContext(AuthContext)

    const handleRegister=(event)=>{
        event.preventDefault();
        const form = event.target;
        const email=form.email.value;
        const password = form.password.value;
        console.log(email,password)
        createUser(email, password)
        .then(result=>console.log(result.user))
        .catch(error=>console.log(error.message))
        form.reset()
    }
    return (
        <div className=" min-h-screen">
            <div className="hero-content items-center justify-around">      
                <div>
                    <div className="text-center pb-7">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className=' btn btn-secondary flex justify-center mb-3'>
                    <GoogleLogin></GoogleLogin>
                    </div>
                    <div className="card bg-base-200 w-full max-w-sm shrink-0 shadow-xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
                </div>
                <div className='w-96'>
                <Lottie animationData={animationPic} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Register;