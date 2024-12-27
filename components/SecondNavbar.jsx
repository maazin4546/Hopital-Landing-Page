import { nav_links } from '@/lib/data';
import Link from 'next/link'
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";

const SecondNavbar = () => {
    return (
        <div className='flex justify-between bg-blue-950 px-10 py-6'>
            <div className='flex text-lg text-white'>
                {nav_links.map((elem, index) => (
                    <div key={index} className='flex items-center mx-4'>
                        <Link href={elem.href} className='mx-2'>{elem.name}</Link>
                        <IoIosArrowDown />
                    </div>
                ))}
            </div>

            <div className='flex justify-center items-center'>
                <IoSearch  fontSize={30} className='mx-2 cursor-pointer text-white'/>
                <FaCartShopping fontSize={30} className='mx-2 cursor-pointer text-white'/>
            </div>
        </div>
    )
}

export default SecondNavbar