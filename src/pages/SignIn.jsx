import React, { useContext } from 'react';
import loginAnimation from '../assets/lottiee/login.json'
import Lottie from 'lottie-react';
import { AuthContext } from '../Context/AuthContext/AuthProvider';
import { sendPasswordResetEmail } from 'firebase/auth';

const SignIn = () => {
    const {loginUser} = useContext(AuthContext);

    const handleLogin=(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({email, password})

        loginUser(email, password)
        .then(result=>{
            console.log('login',result.user)
        })
        .then(error=>{
            console.log(error)
        })
        
        form.reset()
    }
    return (
        <div className=" min-h-screen">
        <div className="hero-content items-center justify-around">      
            <div>
                <div className="text-center pb-7 space-y-3">
                    <p className='text-blue-500'>Welcome Back !</p>
                    <h1 className="text-5xl font-bold">Member Login</h1>
                    <p>Access to all features, no payment is required</p>
                </div>
                <div className="card bg-base-200 w-full max-w-sm shrink-0 shadow-xl">
                <form onSubmit={handleLogin}  className="card-body">
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
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
            </div>
            <div className='w-96'>
            <Lottie animationData={loginAnimation} loop={true} />
            </div>
        </div>
    </div>
    );
};

export default SignIn;