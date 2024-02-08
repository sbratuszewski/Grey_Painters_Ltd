import React from 'react'

const ContactForm = () => {
    return (
        <div className='px-[8%] py-16' id='form'>
            <div>
                <form action="https://getform.io/f/add74499-0a56-47d5-952d-b6c55a8b6af8" method='POST' b encType='multipart/form-data' className=' md:w-[60%] mx-auto py-16'>
                    <div className='text-center mb-16'>
                        <h2 className="uppercase text-2xl px-2 mb-5">Get a quote</h2>
                        <p>Send us a query and we will contact you back as soon as possible </p>
                    </div>
                    <div className='grid xl:grid-cols-2 gap-4 py-5 px-4 md:px-10 mx-auto drop-shadow-md'>
                        <div className='flex flex-col'>
                            <div className='flex flex-col my-4 mt-0'>
                                <input className='border-2 rounded-lg p-3 flex border-grey-300' type="text" placeholder='Your / Company Name' name='name' />
                            </div>
                            <div className='flex flex-col my-4 mt-0'>
                                <input className='border-2 rounded-lg p-3 flex border-grey-300' type="text" placeholder='Phone' name='phone' />
                            </div>
                            <div className='flex flex-col my-4 mt-0'>
                                <input className='border-2 rounded-lg p-3 flex border-grey-300' type="email" placeholder='Email' name='email' />
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <textarea className='border-2 rounded-lg p-3 flex border-grey-300' rows='7' placeholder='Your Message' name='message'></textarea>
                        </div>
                    </div>
                    <button className='flex bg-red-500 px-10 py-2 ease-in-out duration-300 mx-auto drop-shadow-2xl' type='submit'>Send</button>
                </form>
            </div>

        </div>
    )
}

export default ContactForm
