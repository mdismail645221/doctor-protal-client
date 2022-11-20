import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import  { useToken } from '../hooks/useToken';



const SignUp = () => {
    const [signError, setSignError]= useState('')
    const  {createUser, updateUser, googleSignIn} = useContext(AuthContext);
    
    // custom useToken Hooks ===>
    const [createUserEmail, setCreateUserEmail] = useState('');
    const [token]= useToken(createUserEmail)
    const navigate = useNavigate()
    if(token){
        navigate('/')
    }


    const {register, handleSubmit, formState: {errors}} = useForm();


    const handleSignUp = data => {
        console.log(data)


        // signin method
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
                .then(() => {
                    savedUser(data.name, data.email)
                })
                .catch(err => {
                    console.log(err)
                    toast.error(err.message)
                });

        })
        .catch((e) => {
            setSignError(e.message);
            toast.error(e.message)
            console.log(e.message);
        })

    }


    // ======SavedUser in database======//
    const savedUser = (name, email) => {
        const userInfo = {name, email};
        fetch(`http://localhost:5000/users`, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(userInfo)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            setCreateUserEmail(email)
        })

    }



    // const getUserToken = (email) => {
    //     fetch(`http://localhost:5000/jwt?email=${email}`)
    //     .then(res=> res.json())
    //     .then(data=> {
    //         if(data.accessToken){
    //             localStorage.setItem('jwt_token', data.accessToken)
    //             navigate('/')
    //         }
    //     })
    // }





    // handleGoogleSignIn
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        googleSignIn(provider)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch((e)=> {
            console.log(e)

        })
    }



    return (
        <section className='h-[800px] flex flex-wrap flex-col justify-center items-center border'>
            <div className='w-96 border border-spacing-2 border-red-600 p-6 inline-table'>
                <div>
                    <h2 className='text-center font-bold'>SignUp</h2>
                </div>
                <form onSubmit={handleSubmit(handleSignUp)} className='flex flex-col space-y-3'>
                    {/* name */}
                    <div className='form-control w-full max-w-xs'>
                        <label className='label'><span className='label-text'>Name</span></label>
                        <input type='text' className='input input-bordered w-full max-w-xs' 
                            {...register("name", {required: "name is required"})}
                        />
                        {errors.name && <p className='text-red-600 font-semibold'>{errors?.name?.message}</p>}
                    </div>
                    {/* email */}
                    <div className='form-control w-full max-w-xs'>
                        <label className='label'><span className='label-text'>Email</span></label>
                        <input type='email' className='input input-bordered w-full max-w-xs'
                            {...register("email", {required: "email is required"})}
                        />
                        {errors.email && <p className='text-red-600 font-semibold'>{errors?.email?.message}</p>}
                    </div>
                    {/* password */}
                    <div className='form-control w-full max-w-xs'>
                        <label className='label'><span className='label-text'>Password</span></label>
                        <input type='password'  className='input input-bordered w-full max-w-xs'
                         {...register("password", {
                            required: "password is required",
                            minLength: {value: 6, message: "password must be 6 character and long"}
                        })}
                        />
                        {errors.password && <p className='text-red-600 font-semibold'>{errors?.password?.message}</p>}
                    </div>

                    <input className='btn btn-accent w-full' type="submit" value='SignUp' />
                </form>
                <div className='mt-8'>
                    <p>Already have a account <Link to='/login' className='text-secondary font-semibold'>Please Login</Link></p>
                    <div className='divider'>OR</div>
                    <input onClick={handleGoogleSignIn} className='btn btn-accent btn-outline w-full' type="submit" value='CONTINUE WITH GOOGLE' />
                </div>
            </div>
        </section>
    );
};

export default SignUp;