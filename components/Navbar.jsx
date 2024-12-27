import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

const Navbar = () => {
  return (
    <div className='flex justify-around items-center py-4 bg-white'>
      <div>
        <Image
          src={'/assets/logo.png'}
          width={120}
          height={120}
          alt='logo'
          className='cursor-pointer'
        />
      </div>
      <div className='flex justify-center items-center text-gray-900'>
        <div className='flex justify-around items-center py-4'>
          <MdLocationPin fontSize={30} color='skyBlue' />
          <Link href={'/'} className='pr-8 text-lg'>670 Lafayette Ave, Brooklyn, NY 11216</Link>
        </div>
        <Link href={'/'} className='px-2 text-lg'>Have questions?</Link>
        <div className='flex justify-center items-center ml-3'>
          <FaPhoneAlt fontSize={25} color='skyBlue' />
          <Link href={'/'} className='px-2 text-2xl'>
            (123) 456-7890</Link>
        </div>
      </div>
      <div>
        <button className='focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-lg px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'>Book An Appointment</button>
      </div>
    </div>
  )
}

export default Navbar