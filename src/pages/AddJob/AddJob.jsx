import React from 'react';

const AddJob = () => {
    return (
        <div className="bg-base-200 w-full rounded-md my-10">
            <form className="card-body">
                {/* job title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <input type="text" placeholder="Job Title" className="input input-bordered" name='title' required />
                </div>
                {/* location */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Location</span>
                    </label>
                    <input type="text" placeholder="Job Location" className="input input-bordered" name='location' required />

                </div>
                {/* Job Type */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job type</span>
                    </label>
                    <select className="select select-bordered">
                        <option disabled selected>Pick One</option>
                        <option>Full-time</option>
                        <option>Part-time</option>
                        <option>Intern</option>
                    </select>

                </div>
                {/* Job field */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Field</span>
                    </label>
                    <select className="select select-bordered">
                        <option disabled selected>Pick One</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                        <option>Teaching</option>
                        <option>Developer</option>
                    </select>
                </div>

                {/* salary range */}
                <div className='grid grid-cols-3 gap-4 items-end'>
                    <div className="form-control">
                        {/* min */}
                        <label className="label">
                            <span className="label-text">Salary Range</span>
                        </label>
                        <input type="test" placeholder="min" className="input input-bordered" name='title' required />
                    </div>

                    <div className="form-control">
                        {/* max */}
                        <input type="test" placeholder="Max" className="input input-bordered" name='title' required />
                    </div>
                    {/* currency */}
                    <div className="form-control">
                        <select className="select select-bordered">
                            <option disabled selected>Pick One</option>
                            <option>BDT</option>
                            <option>USD</option>
                            <option>INR</option>
                            <option>RUPEE</option>
                        </select>
                    </div>
                </div>

                {/* job description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Description</span>
                    </label>
                    <textarea className="textarea textarea-bordered" name='description' placeholder="Description" required></textarea>
                </div>

                {/* Company Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Name</span>
                    </label>
                    <input type="text" placeholder="Company Name" className="input input-bordered" name='location' required />

                </div>

                {/* Requirments */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Requirments</span>
                    </label>
                    <textarea className="textarea textarea-bordered" name='requirments' placeholder="Each requirnent type in a new line" required></textarea>
                </div>
                {/* responsibilities */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Responsibilites</span>
                    </label>
                    <textarea className="textarea textarea-bordered" name='responsibilites' placeholder="Each responsibilites type in a new line" required></textarea>
                </div>

                {/* Hr email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Hr Email</span>
                    </label>
                    <input type="email" placeholder="Hr Email" className="input input-bordered" name='hr_email' required />
                </div>
                {/* Hr name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Hr Name</span>
                    </label>
                    <input type="text" placeholder="Hr Name" className="input input-bordered" name='hr_name' required />
                </div>
                {/* Company logo */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company logo URL</span>
                    </label>
                    <input type="url" placeholder="Company logo url" className="input input-bordered" name='logo' required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit</button>
                </div>

            </form>
        </div>
    );
};

export default AddJob;