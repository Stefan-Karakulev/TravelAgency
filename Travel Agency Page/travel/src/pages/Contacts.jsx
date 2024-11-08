import React from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

const Contacts = () => {
    return (
        <div className='bg-gray-100'>
            <div className='relative h-screen bg-cover bg-center' style={{ backgroundImage: "url('/Images-main/Images/hero.png')" }}>
                <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
                    <h4 className='text-4xl md:text-6xl font-bold text-white mb-4'>Contact</h4>
                </div>
            </div>
            <div className='container mx-auto px-4 py-12'>
                <div className='grid gap-8 md:grid-cols-2'>
                    <div className='bg-white rounded-lg shadow-md p-6'>
                        <h3 className='text-xl font-bold mb-4'>Contact Details</h3>
                        <div className='flex items-center mb-4'>
                            <FaEnvelope className='text-blue-500 mr-4'/>
                            <p>info@gmail.com</p>
                        </div>
                        <div className='flex items-center mb-4'>
                            <FaPhone className='text-blue-500 mr-2'/>
                            <p>+3323 929292</p>
                        </div>
                        <div className='flex items-center'>
                            <FaMapMarkedAlt className='text-blue-500 mr-2'/>
                            <p>123, Street</p>
                        </div>
                    </div>
                    <div className='bg-white rounded-lg shadow-md p-6'>
                        <h3 className='text-xl font-bold mb-4'>Get in Touch</h3>
                        <form>
                            <div className='mb-4'>
                                <label htmlFor='Name' className='block text-gray-700 mb-2'>Name</label>
                                <input 
                                    type='text' 
                                    id='Name'
                                    placeholder='Enter Name' 
                                    className='w-full p-2 border border-gray-300 rounded'
                                />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor='Email' className='block text-gray-700 mb-2'>Email</label>
                                <input 
                                    type='email' 
                                    id='Email'
                                    placeholder='Enter Email' 
                                    className='w-full p-2 border border-gray-300 rounded'
                                />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor='Message' className='block text-gray-700 mb-2'>Message</label>
                                <textarea 
                                    id='Message'
                                    placeholder='Write Message' 
                                    className='w-full p-2 border border-gray-300 rounded'
                                ></textarea>
                            </div>
                            <button className='py-2 px-4 bg-blue-500 text-white rounded'>Send me</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;