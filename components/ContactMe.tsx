import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form';

type Props = {
    name: string;
    email: string;
    subject: string;
    message: string;
  };

function ContactMe({}: Props) {

    const { register, handleSubmit } = useForm<Props>();
    const onSubmit: SubmitHandler<Props> = (formData) => {
        window.location.href = `mailto:mahirpatel427@gmail.com?subject=${formData.subject}&body=Hi, My name is ${formData.name}. ${formData.message} (${formData.email})`
    };
  return (
    <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact
        </h3>

        <div className='flex flex-col space-y-10 mt-20'>
            <h4 className='text-3xl font-semibold text-center'>
                I have just got what you need.{" "} 
                <span className='underline decoration-[#F7AB0A]/50'>Lets Talk.</span> 
            </h4>

            <div className='space-y-10 '>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#F7AB0A] h-6 w-6 animate-pulse'/>
                    <p className='text-lg '>+1 840-666-5159</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#F7AB0A] h-6 w-6 animate-pulse'/>
                    <p className='text-lg '>100 Aberdeen Dr, Riverside, CA 92507</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#F7AB0A] h-6 w-6 animate-pulse'/>
                    <p className='text-lg '>mahirpatel427@gmail.com</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                    <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                </div>

                <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />

                <textarea {...register('message')} placeholder='Message' className='contactInput' />
                <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
            </form>

        </div>
    </div>
  )
}

export default ContactMe