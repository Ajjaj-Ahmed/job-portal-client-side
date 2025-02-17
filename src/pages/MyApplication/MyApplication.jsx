import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';

const MyApplication = () => {
    const { user } = useContext(AuthContext);
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/job-application?email=${user.email}`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [user.email])
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                           
                            <th>Name</th>
                            <th>Location</th>
                            <th>Company Name</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                jobs.map(job =>  <tr key={job._id}>
                                 
                                    <td>
                                      <div className="flex items-center gap-3">
                                        <div className="avatar">
                                          <div className="mask mask-squircle h-12 w-12">
                                            <img
                                              src={job.company_logo}
                                              alt="Avatar Tailwind CSS Component" />
                                          </div>
                                        </div>
                                        <div>
                                          <div className="font-bold">{job.company}</div>
                                          
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                    <div className="text-sm opacity-50">{job.location}</div>
                                    </td>
                                    <td>{job.company}</td>
                                  </tr>)
                            }               
                    </tbody>
                    
                </table>
            </div>
        </div>
    );
};

export default MyApplication;