import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const AddDoctor = () => {

    // const [imageData, setImageData] = useState('')


    const { data: specialties = [], isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentSpecialty`);
            const data = await res.json();
            return data
        }
    })

    // console.log(specialties);


    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleDoctor = (data) => {
        console.log(data)
        const image = data.image[0];
        const fromData = new FormData();
        fromData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_KEY}`;

        // uploaded to the imgbb 
        fetch(url, {
            method: 'POST',
            body: fromData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData)
                    toast.success('successfully IMG Added added')
                    // doctort objects
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.sepecialty,
                        image: imgData.data.url
                    }
                    console.log(doctor)
                    // server info docto to the database
                    fetch('http://localhost:5000/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('jwt_token')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                        })
                }
            })


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
                            <select className="select select-bordered w-full max-w-xs"
                                {...register("sepecialty", { required: "email is required" })}
                            >
                                {
                                    specialties.map(special => <option
                                        key={special._id}
                                        value={special.name}
                                    >{special.name}</option>)
                                }
                            </select>
                        </div>
                        {/* file  */}
                        <div className='form-control w-full max-w-xs'>
                            <label className='label'><span className='label-text'>File Upload</span></label>
                            <input type='file' className='input input-bordered w-full max-w-xs'
                                {...register("image", { required: "images is required" })}
                            />
                            {errors.image && <p className='text-red-600 font-semibold'>{errors?.image?.message}</p>}
                        </div>
                        <input className='btn btn-accent w-full' type="submit" value='Add Doctor' />
                    </form>
                </div>
            </section>
        </div>
    );
};

export default AddDoctor;