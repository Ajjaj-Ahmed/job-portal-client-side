import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';
import { Link } from 'react-router-dom';

const MyPostedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/jobs?email=${user.email}`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [user.email])

    return (
        <div className='bg-base-200 my-5 rounded-lg'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Job Title</th>
                            <th>Category</th>
                            <th>Location</th>
                            <th>Application Count</th>
                            <th>Deadline</th>
                            <th>View Application</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        jobs.map((job, index) => <tr key={job.index}>
                            <th>{index + 1}</th>
                            <td>{job.title}</td>
                            <td>{job.category}</td>
                            <td>{job.location}</td>
                            <td>{job.applicationCount}</td>
                            <td>{job.applicationDeadline}</td>
                            <td>
                               <Link to={`/viewApplications/${job._id}`}>
                               <button className='btn btn-link'>View Application</button>
                               </Link>
                            </td>
                            
                        </tr>)
                        }
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostedJobs;