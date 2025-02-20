import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';

const MyPostedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/jobs?email=${user.email}`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [user.email])

    return (
        <div>
<h2>My posted jobs:{jobs.length}</h2>
        </div>
    );
};

export default MyPostedJobs;