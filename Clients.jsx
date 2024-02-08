import React from 'react'
import client1 from '../assets/logos/273174443_306298048197017_3011601835683210559_n.png';
import client2 from '../assets/logos/djrlonglogosmaller.png'

const Clients = () => {
  return (
    <div className='w-full py-16 text-center'>
      <h2 className='uppercase text-2xl px-2'>Our clients</h2>
      <div className='flex flex-wrap justify-around py-16'>
        <img src={client1} alt="logo" className='h-[200px] p-2 object-contain rounded-full drop-shadow-xl'/>
        <img src={client2} alt="logo" className='w-[200px] p-2 object-contain drop-shadow-xl'/>
        <img src={client1} alt="logo" className='h-[200px] p-2 object-contain rounded-full drop-shadow-xl'/>
        <img src={client1} alt="logo" className='h-[200px] p-2 object-contain rounded-full drop-shadow-xl'/>
      </div>
    </div>
  )
}

export default Clients
