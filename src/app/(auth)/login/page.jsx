'use client'
import { authClient } from '@/lib/auth-client';
import { error } from 'better-auth/api';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';

const LoginPage = () => {
    const { register,handleSubmit, formState: {errors},} = useForm();

    const handleGoogleLogin = async() =>{
        const data = await authClient.signIn.social({
            provider: "google",
        })
    }

    const handlelogin = async(data) =>{
        const {email,password} = data;
        
        const {data:res,error} = await authClient.signIn.email({
            email: email,
            password: password,
            rememberMe: true,
            callbackURL: '/',
        })
        
        if (error) {
            alert(error.message);
            return;
        }
        if (res) {
        alert("Login successfully!")
        }
    }
    return (
        <div className='w-full flex min-h-[80vh] items-center justify-center my-20'>
            <form onSubmit={handleSubmit(handlelogin)} className='w-full max-w-md flex flex-col p-5 gap-5 shadow-lg rounded-lg border'>
                <h1 className='text-2xl font-bold text-center my-5'>Login</h1>
                <input type="email" {...register("email", { required: "Email feild is required" })} className='border p-3 rounded-xl' placeholder='Enter your email' />
                {errors.email && <p className='text-red-500'>*{errors.email.message}</p>}
                <input type="password" {...register("password", { required: "Password feild is required" })} className='border p-3 rounded-xl' placeholder='Enter your password'/>
                {errors.password && <p className='text-red-500'>*{errors.password.message}</p>}
                <button className='btn btn-primary mb-3' type='submit'>Submit</button>
                <p className='text-center text-md'>Don't have an account?<Link className='text-blue-400' href={'/register'}>Register</Link></p>
                <div className="w-full">
                    <div className="divider">OR</div>
                </div>
                <div>
                    <p onClick={handleGoogleLogin} className='flex items-center justify-center gap-1 text-xl btn btn-info text-white font-bold'><FaGoogle />SingIn with Google</p>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;