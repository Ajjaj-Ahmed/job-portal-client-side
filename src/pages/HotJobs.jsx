import React, { useEffect, useState } from 'react';
import HotJobCard from './HotJobCard';

const HotJobs = () => {
    const [jobs, setJobs] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/jobs`)
        .then(res=>res.json())
        .then(data =>setJobs(data))
    },[])
    return (
        <div>
           <div className='grid grid-cols-3 gap-4 my-4'>
            {
                jobs.map(job =><HotJobCard job={job} key={job._id}></HotJobCard>)
            }
           </div>
        </div>
    );
};

export default HotJobs;