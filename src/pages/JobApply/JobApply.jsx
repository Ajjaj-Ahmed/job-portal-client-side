import React, { useContext } from 'react';
import Swal from 'sweetalert2'
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';
// import useAuth from '../../hooks/useAuth';


const JobApply = () => {

    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    console.log(id, user)

    const submitJobApplication = e => {
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedin.value;
        const gitHub = form.github.value;
        const resume = form.resume.value;
        form.reset()

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkedIn,
            gitHub,
            resume

        }
        fetch('http://localhost:5000/job-applications ',{
            method:'POST',
            headers:{
                'content-type':'application/json'
                },
            body:JSON.stringify(jobApplication)
        })
        .then(res => res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You have applied successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/myApplications')
            }
        })
    }
        return (
            <div className="card bg-base-200 w-full max-w-md mx-auto my-7">
                <form onSubmit={submitJobApplication} className="card-body">
                    <h2 className='text-xl font-bold text-center'>Apply Job and Good Luck!!</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">LinkedIn</span>
                        </label>
                        <input type="url" name='linkedin' placeholder="LinkedIn" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Github</span>
                        </label>
                        <input type="url" name='github' placeholder="GitHub" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Resume</span>
                        </label>
                        <input type="url" name='resume' placeholder="Resume" className="input input-bordered" required />
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Apply</button>
                    </div>
                </form>
            </div>
        );
    };

    export default JobApply;