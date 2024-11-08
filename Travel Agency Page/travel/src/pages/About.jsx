import React from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

const About = () => {
    return (
        <div className='bg-gray-100'>
            <div className='relative h-screen bg-cover bg-center' style={{ backgroundImage: "url('/Images-main/Images/hero.png')" }}>
                <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
                    <h4 className='text-4xl md:text-6xl font-bold text-white mb-4'>About</h4>
                </div>
            </div>
           <div className='container mx-auto px-4 py-12 '>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>

              <div className='flex items-center justify-center'>
                <img src='/Images-main/Images/hero.png' alt='' className='rounded-lg shadow-md w-full h-auto'/>
              </div>
              <div className='flex flex-col justify-center'>
                <h3 className='text-2xl font-bold mb-4'>Who are we</h3>
                <p className='text-gray-700 mb-4'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto dolor est excepturi omnis consectetur quis! Libero a unde deleniti iure, doloremque sit molestiae alias perferendis recusandae, quae quod pariatur!</p>
                <h3 className='text-2xl font-bold mb-4'>Our mission</h3>
                <p className='text-gray-700 mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quos quisquam, perferendis eos voluptatum praesentium accusamus temporibus nam repellendus nesciunt sit, accusantium, eius aliquid corrupti animi est alias deleniti? Eveniet.</p>
              </div>

            </div>
           </div>
        </div>
    );
}

export default About;