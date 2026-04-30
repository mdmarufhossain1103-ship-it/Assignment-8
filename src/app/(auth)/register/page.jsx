'use client'
import { authClient } from '@/lib/auth-client';
import { error } from 'better-auth/api';
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const handleRegister = async (data) => {
        const { name, email, password } = data;

        const { data: res, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            callbackURL: '/',
        })

        if (error) {
            alert(error.message)
        }
        if (res) {
            alert("Registered successfully!")
        }
    }
    return (
        <div className='w-full flex min-h-[80vh] items-center justify-center my-20'>
            <form onSubmit={handleSubmit(handleRegister)} className='w-full max-w-md flex flex-col p-5 gap-5 shadow-lg rounded-lg border'>
                <h1 className='text-2xl font-bold text-center my-5'>Register</h1>
                <input type="text" {...register("name", { required: "Name field is required" })} className='border p-3 rounded-xl' placeholder='Enter your name' />
                {errors.name && <p className='text-red-500'>*{errors.name.message}</p>}
                <input type="email" {...register("email", { required: "Email field is required" })} className='border p-3 rounded-xl' placeholder='Enter your email' />
                {errors.email && <p className='text-red-500'>*{errors.email.message}</p>}
                <input type="password" {...register("password", { required: "Password field is required" })} className='border p-3 rounded-xl' placeholder='Enter your password' />
                {errors.password && <p className='text-red-500'>*{errors.password.message}</p>}
                <button className='btn btn-primary mb-3' type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default RegisterPage;