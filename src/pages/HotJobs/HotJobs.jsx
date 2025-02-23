import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { Link, useLoaderData } from 'react-router-dom';
// import { Briefcase, Heart, Clock, Home } from "lucide-react";
import { BiBriefcaseAlt, BiHeartCircle, BiHomeAlt, BiTrophy } from 'react-icons/bi';
import { CgLockUnlock } from 'react-icons/cg';


const HotJobs = () => {
    const job = useLoaderData();
    const { _id, category, company, company_logo, description, hr_email, hr_name, location, requirements,
        jobType, responsibilities, salaryRange, status, title } = job
    console.log(job);
    return (
        <div className='flex justify-between gap-6 my-6'>
            <div className="card card-compact border-2 w-1/2">
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
                <div className="card-body space-y-3">
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
                            requirements.map((requirment, index) => <button key={index} className='btn bg-blue-100  btn-sm btn-outline'>{requirment}</button>)
                        }
                    </div>
                    <div className="flex items-center mt-5 justify-between">
                        <p className='text-lg font-semibold'>Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                        <Link to={`/jobApply/${_id}`}>
                            <button className="btn btn-primary">Apply Now</button>
                        </Link>

                    </div>
                </div>
            </div>

            <div className="bg-pink-100 rounded-2xl p-6 w-1/2 ">
                <h2 className="text-xl font-semibold mb-4">Job Benefits</h2>
                <ul className="space-y-3">
                    <div className="flex items-start gap-3">
                        <BiBriefcaseAlt className="text-blue-500 mt-1" size={24} />
                        <div>
                            <h3 className="font-semibold">Career Growth Opportunities</h3>
                            <p className="text-gray-600 text-sm">
                                We provide training programs, mentorship, and career advancement opportunities to help you grow within the company.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <BiHeartCircle className="text-red-500 mt-1" size={24} />
                        <div>
                            <h3 className="font-semibold">Comprehensive Health Insurance</h3>
                            <p className="text-gray-600 text-sm">
                                Enjoy medical, dental, and vision insurance to ensure the well-being of you and your family.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CgLockUnlock className="text-yellow-500 mt-1" size={24} />
                        <div>
                            <h3 className="font-semibold">Flexible Working Hours</h3>
                            <p className="text-gray-600 text-sm">
                                Maintain a perfect work-life balance with our flexible schedules and remote work options.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <BiHomeAlt className="text-green-500 mt-1" size={24} />
                        <div>
                            <h3 className="font-semibold">Remote Work Option</h3>
                            <p className="text-gray-600 text-sm">
                                Work from anywhere with our remote and hybrid work models, giving you freedom and flexibility.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <BiTrophy className="text-purple-500 mt-1" size={24} />
                        <div>
                            <h3 className="font-semibold">Performance Bonuses</h3>
                            <p className="text-gray-600 text-sm">
                                Get rewarded for your hard work with performance-based incentives and bonuses.
                            </p>
                        </div>
                    </div>
                </ul>
            </div>
        </div>

    );
};

export default HotJobs;