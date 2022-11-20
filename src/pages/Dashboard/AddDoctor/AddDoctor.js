import React from 'react';
import { useForm } from 'react-hook-form';

const AddDoctor = () => {


    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleDoctor = (data) => {
        console.log(data)
    }



    return (
        <div>
            <h2 className='text-3xl'>Add Doctor</h2>
            <section className='flex flex-wrap flex-col justify-center items-center border'>
                <div className='w-96 border border-spacing-2 border-red-600 p-6 inline-table'>
                    <form onSubmit={handleSubmit(handleDoctor)} className='flex flex-col space-y-3'>
                        {/* name */}
                        <div className='form-control w-full max-w-xs'>
                            <label className='label'><span className='label-text'>Name</span></label>
                            <input type='text' className='input input-bordered w-full max-w-xs'
                                {...register("name", { required: "name is required" })}
                            />
                            {errors.name && <p className='text-red-600 font-semibold'>{errors?.name?.message}</p>}
                        </div>
                        {/* email */}
                        <div className='form-control w-full max-w-xs'>
                            <label className='label'><span className='label-text'>Email</span></label>
                            <input type='email' className='input input-bordered w-full max-w-xs'
                                {...register("email", { required: "email is required" })}
                            />
                            {errors.email && <p className='text-red-600 font-semibold'>{errors?.email?.message}</p>}
                        </div>
                        {/* password */}
                        <div className='form-control w-full max-w-xs'>
                            <label className='label'><span className='label-text'>Speciality </span></label>
                            <select className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Who shot first?</option>
                                <option>Han Solo</option>
                                <option>Greedo</option>
                            </select>
                        </div>
                        <input className='btn btn-accent w-full' type="submit" value='Add Doctor' />
                    </form>
                </div>
            </section>
        </div>
    );
};

export default AddDoctor;