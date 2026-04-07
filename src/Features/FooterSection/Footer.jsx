import React from "react";

const Footer = () => {
  return (
    <footer className='mt-20 py-6 px-6 md:px-20 border-t border-white/50'>
      <div className='flex flex-col md:flex-row gap-10 align-center justify-between'>
        {/* Brand Section */}
        <div className='flex flex-col justify-between gap-6'>
          <h2 className='text-white text-2xl font-black tracking-tighter uppercase'>
            CONTRAX
          </h2>
          <p className='text-gray-300 max-w-xs md:max-w-full text-sm leading-relaxed'>
            Operating in stealth to redefine the foundation of business
            agreements.
          </p>
        </div>
        <span className='text-gray-300 text-xs uppercase tracking-widest'>
          © 2024 CONTRAX. All rights reserved.
        </span>
        {/* <div className='flex flex-col gap-4'>
          <h4 className='text-gray-200 text-xs font-bold uppercase tracking-widest'>
            PRODUCT
          </h4>
          <ul className='flex flex-col gap-2 text-sm text-gray-300'>
            <li className='hover:text-white cursor-pointer transition-colors'>
              About
            </li>
            <li className='hover:text-white cursor-pointer transition-colors'>
              Contact
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-4'>
          <h4 className='text-gray-200 text-xs font-bold uppercase tracking-widest'>
            LEGAL
          </h4>
          <ul className='flex flex-col gap-2 text-sm text-gray-300'>
            <li className='hover:text-white cursor-pointer transition-colors'>
              Privacy
            </li>
            <li className='hover:text-white cursor-pointer transition-colors'>
              Terms
            </li>
          </ul>
        </div> */}
      </div>
      {/* 
      <div className='max-w-7xl mx-auto  pt-8  flex flex-col md:flex-row justify-between items-center gap-6'>
        <span className='text-gray-300 text-xs uppercase tracking-widest'>
          © 2024 CONTRAX. All rights reserved.
        </span>

       <div className='flex gap-8 text-gray-200 text-xs uppercase tracking-widest'>
          <span className='hover:text-white cursor-pointer transition-colors'>
            Twitter
          </span>
          <span className='hover:text-white cursor-pointer transition-colors'>
            LinkedIn
          </span>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
