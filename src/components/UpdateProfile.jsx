import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { BsListNested } from 'react-icons/bs';

const UpdateProfile = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = async(data) =>{
        const { name,photo } = data;
        await authClient.updateUser({
            name: name,
            image: photo,
        })
        document.getElementById('my_modal_1').close();
        router.push('/profile');
    }
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn btn-secondary" onClick={() => document.getElementById('my_modal_1').showModal()}>Edit profile</button>
            <dialog id="my_modal_1" className="modal">
              <div className='modal-box'>
                        <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-md flex flex-col p-5 gap-5 shadow-lg rounded-lg border'>
                        <input type="text" {...register("name", { required: "Name field is required" })} className='border p-3 rounded-xl' placeholder='Enter your name' />
                        {errors.name && <p className='text-red-500'>*{errors.name.message}</p>}
                        <input type="text" {...register("photo", { required: "Photo field is required" })} className='border p-3 rounded-xl' placeholder='Enter your photo url' />
                        {errors.photo && <p className='text-red-500'>*{errors.photo.message}</p>}
                            <div>
                                <button className='btn btn-primary' type='submit'>Update</button>
                                <button className='btn btn-error ml-3' type='button' onClick={() => document.getElementById('my_modal_1').close()} >Cancel</button>
                            </div>
                        </form>
                    </div>
            </dialog>
        </div>
    );
};

export default UpdateProfile;