import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import contrax from "../../../Images/contrax.png";

const ManagementSection = () => {
  const points = [
    "Native e-signature integration",
    "Clause library for rapid drafting",
    "Bank-grade audit trails",
  ];

  return (
    <section className=' py-15 px-6 md:px-20 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16'>
      {/* Left Content */}
      <div className='w-full lg:w-1/2 flex flex-col gap-6'>
        <h2 className='text-white text-4xl md:text-5xl font-bold leading-tight'>
          A better way to manage agreements.
        </h2>

        <p className='text-gray-400 text-lg leading-relaxed'>
          We re-imagined the entire contract stack from ground up. From initial
          draft to post execution management, contrax provides a unified
          environmnet that prioritizes speed and security withour compromise.
        </p>

        <ul className='flex flex-col gap-4 mt-4'>
          {points.map((text, index) => (
            <li
              key={index}
              className='flex items-center gap-3 text-white font-medium uppercase tracking-wider text-sm'
            >
              <IoCheckmarkCircle className='text-purple-500 text-xl' />
              {text}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Image Container (Glassmorphism Effect) */}
      <div className='w-full lg:w-1/2 relative group'>
        {/* Decorative Glow behind the card */}
        <div className='absolute -inset-4 bg-purple-500/10 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-700'></div>

        <div className='relative bg-white/5 border border-white/10 backdrop-blur-sm p-4 md:p-8 rounded-[2rem] shadow-2xl'>
          <div className='bg-gray-200/90 rounded-2xl overflow-hidden aspect-video shadow-inner flex items-center justify-center'>
            {/* Replace with your actual dashboard screenshot */}
            <img
              src={contrax}
              alt='Dashboard Preview'
              className='w-full h-full object-cover opacity-80 mix-blend-multiply'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagementSection;
