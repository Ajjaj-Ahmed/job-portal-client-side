import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';

const GoogleLogin = () => {
    const {googleSignIn} = useContext(AuthContext)

    const handleGoogleLogin=()=>{
        googleSignIn()
        .then(result=>{
            console.log(result.message)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
            <button onClick={handleGoogleLogin}>Sign in with Google</button>
        </div>
    );
};

export default GoogleLogin;