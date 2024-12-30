"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaPhoneAlt,FaAngleRight } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { nav_links } from '@/lib/data';


const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleLink, setToggleLink] = useState(false)

  return (
    <div className='flex justify-around items-center py-4 bg-white'>
      <div className='block md:hidden'>
        {toggleLink
          ? <RxCross2 color="skyBlue" size={27} onClick={() => setToggleLink(false)} />
          : <GiHamburgerMenu fontSize={30} color='blue' onClick={() => setToggleLink(true)} />
        }

      </div>
      <div>
        <Image
          src={'/assets/logo.png'}
          width={120}
          height={120}
          alt='logo'
          className='cursor-pointer'
        />
      </div>

      <div className='flex md:hidden'>
        {toggleMenu
          ? <RxCross2 color="skyBlue" size={27} onClick={() => setToggleMenu(false)} />
          : <BsThreeDotsVertical color="skyBlue" size={27} onClick={() => setToggleMenu(true)} />
        }
        <IoSearch fontSize={30} color='blue' className='mx-2' />
        <FaCartShopping fontSize={30} color='blue' className='mx-2' />
      </div>

      <div className='hidden justify-center items-center text-gray-900 md:flex'>
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
      <div className='hidden md:block'>
        <button className='focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-lg px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'>Book An Appointment</button>
      </div>

      {toggleMenu && (
        <div className='scale-up-center flex flex-col justify-center items-center bg-gray-100 absolute top-24 text-gray-900 p-4 rounded-md'>
          <div className='flex justify-around items-center'>
            <MdLocationPin fontSize={20} color='skyBlue' className='mr-1' />
            <Link href={'/'} className='text-sm'>670 Lafayette Ave, Brooklyn, NY 11216</Link>
          </div>
          <Link href={'/'} className='text-sm'>Have questions?</Link>
          <div className='flex justify-center items-center'>
            <FaPhoneAlt fontSize={20} color='skyBlue' className='mr-1' />
            <Link href={'/'} className='text-lg'>
              (123) 456-7890</Link>
          </div>
          <button className='mt-2 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-sm rounded-lg text-sm px-2 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'>Book An Appointment</button>
        </div>
      )}


      {toggleLink && (
        <div className='scale-up-center  flex flex-col text-lg text-black absolute top-24 left-4 bg-gray-100 p-4 rounded-lg'>
          {nav_links.map((elem, index) => (
            <div key={index} className='flex justify-between w-64 items-center my-2'>
              <Link href={elem.href} className='mx-2'>{elem.name}</Link>
              <FaAngleRight />
            </div>
          ))}
        </div>
      )}

    </div>
  )
}

export default Navbar