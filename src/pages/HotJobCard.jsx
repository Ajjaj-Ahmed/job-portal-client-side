import React from 'react';
import { CiLocationOn } from "react-icons/ci";

const HotJobCard = ({ job }) => {
    const { category, company, company_logo, description, hr_email, hr_name, location, requirements, 
        jobType,responsibilities, salaryRange, status, title } = job

    return (
        <div className="card card-compact ">
            <div className='flex justify-start items-center gap-2 p-2'>
                <img className='w-16'
                    src={company_logo}
                    alt="logo" />
                <div>
                    <h2>{company}</h2>
                    <div className='flex items-center gap-1'>
                        <CiLocationOn />
                        <h2>{location}</h2>
                    </div>
                    
                </div>
            </div>
            <div className="card-body">
                <div className='flex items-center gap-2'>
                    <h2 className="card-title">{title}</h2>
                    <div className="badge badge-secondary">NEW</div>
                </div>
                <div>
                <button className='btn bg-pink-50 btn-sm'>{jobType}</button>
                
                </div>
                <p className='text-justify'>{description}</p>
                <div className='grid grid-cols-2 gap-2'>
                {
                    requirements.map(requirment=><button className='btn bg-blue-100  btn-sm btn-outline'>{requirment}</button>)
                }
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default HotJobCard;