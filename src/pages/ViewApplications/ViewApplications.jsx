import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewApplications = () => {
    const applications = useLoaderData();
    return (
        <div className='my-4 rounded-xl'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                     {
                        applications.map((application, index)=> <tr key={index} className="bg-base-200">
                            <th>{index + 1}</th>
                            <td>{application.applicant_email}</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                        )
                     }
                      
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplications;