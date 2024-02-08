import React from 'react';
import brand1 from '../assets/logos/Hempel_Logo.jpeg';
import brand2 from '../assets/logos/international-short.png';
import brand3 from '../assets/logos/Sigma-Paint_ppg-min-300x233.png';
import brand4 from '../assets/logos/Sigma-Paint_Logo-021.png';

const Brands = () => {
  return (
    <div className='w-full py-16 text-center'>
      <h2 className='uppercase text-2xl px-2'>We use only high-quality paint brands</h2>
      <div className='flex flex-wrap justify-around py-16'>
        <img src={brand1} alt="logo" className='h-[10vh] p-2 object-contain'/>
        <img src={brand3} alt="logo" className='h-[10vh] p-2 object-contain'/>
        <img src={brand4} alt="logo" className='h-[10vh] p-2 object-contain'/>
        <img src={brand2} alt="logo" className='h-[10vh] p-2 object-contain'/>

      </div>
    </div>
  )
}

export default Brands
