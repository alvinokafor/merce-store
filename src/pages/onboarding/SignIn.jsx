import React from 'react'

export default function SignIn() {
  return (
    <div className=' border h-screen bg-light-grey '>
      <div className='lg:w-1/4 w-3/4 m-auto mt-32  '>
     <div className='flex mb-5'>
      <img src='/assets/frame 583.svg' className=''/>
       <p className='text-logo-color text-5xl ml-3 font-black'>  merce</p>
       </div> 
       <p className='text-black text-4xl font-black mb-5'>Sign In</p>
       <p className='text-black font-black mb-5'>Sign in google</p>
       <button className='text-black font-black flex mb-5 border-gray-300 w-full rounded-lg h-9 justify-center border pt-1'> <img src="/assets/icons/google.svg" alt="" className='mr-4' /> Google</button>
       <p className='text-gray-300'>This site is protected by reCAPTCHA and the Google Privacy Policy.</p>
      </div>
    </div>
  )
}
