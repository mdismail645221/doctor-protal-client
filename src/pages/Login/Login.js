import React, {useContext, useState} from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { useToken } from '../hooks/useToken';


const Login = () => {
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    

    // custom useToken Hooks ===
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token]= useToken(loginUserEmail)
    if(token){
        navigate(from, { replace: true });
    }




    const {signInUser} = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLogin = data => {
        console.log(data)
        // console.log(errors)
        signInUser(data.email, data.password)
        .then(result=> {
            const user = result.user;
            console.log(user)
            setLoginUserEmail(data.email)
            
        })
        .catch((e)=> {
            console.log(e)
            toast.error(e.message)
        })

    }



    return (
        <section className='h-[800px] flex flex-wrap flex-col justify-center items-center border'>
            <div className='w-96 border border-spacing-2 border-red-600 p-6 inline-table'>
                <div>
                    <h2 className='text-center font-bold text-lg'>Login</h2>
                </div>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className='form-control w-full max-w-xs'>
                        <label className='label'><span className='label-text'>Email</span></label>
                        <input type='text'
                            {...register("email", { required: "Email is Required" })}
                            className='input input-bordered w-full max-w-xs'
                        />
                        {errors.email && <p className='text-red-600'>{errors?.email.message}</p>}
                    </div>
                    <div className='form-control w-full max-w-xs'>
                        <label className='label'><span className='label-text'>Password</span></label>
                        <input type='text'
                            {...register("password", {
                                required: "Password is Required",
                                minLength: { value: 6, message: "Password must be 6 characters" }
                            })}
                            className='input input-bordered w-full max-w-xs'
                        />
                        {errors.password && <p className='text-red-600'>{errors?.password.message}</p>}
                        <label className='label'><span className='label-text'>Fotgot password</span></label>
                    </div>
                    <input className='btn btn-accent w-full' type="submit" value='Login' />
                </form>
                <div className='mt-6'>
                    <p>New to doctor portal <Link to='/signUp' className='text-secondary font-semibold'>Create a new account</Link></p>
                    <div className='divider'>OR</div>
                    <input className='btn btn-accent btn-outline w-full' type="submit" value='CONTINUE WITH GOOGLE' />
                </div>
            </div>
        </section>
    );
};

export default Login;