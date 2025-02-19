import React, { useContext } from 'react';
import logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';

const Navbar = () => {
    const { user , signOutUser} = useContext(AuthContext);
    const LogOut=()=>{
        signOutUser()
        .then(()=>console.log('successfully logout'))
        .catch(()=>console.log(error))
        
    }
    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/myApplications'}>My Application</NavLink></li>
        <li><NavLink to={'/addJOb'}>Add a Job</NavLink></li>
        
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost text-xl">
                <img className='w-12' src={logo} alt="" />
                <h2>Job Portal</h2>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? 
                    <>
                        <Link to={'/'}>
                            <button onClick={LogOut} className='btn btn-warning mr-2'>Log Out</button>
                        </Link>
                    </> :
                    <>
                        <Link to={'/register'}>
                            <button className='btn btn-info mr-2'>Register</button>
                        </Link>
                        <Link to={'/signin'}>
                            <button className='btn btn-info'>Sign In</button>
                        </Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;