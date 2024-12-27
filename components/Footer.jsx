import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaBookOpen } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { IoMailOpenSharp } from "react-icons/io5";

const Footer = () => {
    return (
        <div className='bg-blue-900 flex justify-around pt-44'>
            <div>
                <h1 className='text-4xl text-white'>Oscularis</h1>
                <p className='text-xs text-blue-400 font-light'>OPTHIMOLOGICAL CLINIC</p>
                <p className='text-sm w-72 text-gray-300 my-6'>We are a recognized leader in high-tech ophthalmology services</p>
                <div className="flex">
                    <FaFacebookF fontSize={30} color="skyBlue" className="mx-2 cursor-pointer" />
                    <FaTwitter fontSize={30} color="skyBlue" className="mx-2 cursor-pointer" />
                    <FaInstagram fontSize={30} color="skyBlue" className="mx-2 cursor-pointer" />
                </div>
            </div>

            <div className="flex flex-col justify-start">
                <h1 className="text-white text-lg font-bold mb-4">What We Treat</h1>
                <Link href={"/"} className="text-blue-400 text-sm my-[2px]">Astigmatism</Link>
                <Link href={"/"} className="text-blue-400 text-sm my-[2px]">Myopia</Link>
                <Link href={"/"} className="text-blue-400 text-sm my-[2px]">Cataract</Link>
                <Link href={"/"} className="text-blue-400 text-sm my-[2px]">Farsightedness</Link>
                <Link href={"/"} className="text-blue-400 text-sm my-[2px]">Glaucoma</Link>
                <Link href={"/"} className="text-blue-400 text-sm my-[2px]">Strabismus</Link>
                <Link href={"/"} className="text-blue-400 text-sm my-[2px]">Amblyopia</Link>
                <Link href={"/"} className="text-blue-400 text-sm my-[2px]">Retinal diseases</Link>
                <Link href={"/"} className="text-blue-400 text-sm my-[2px]">Keratoconus</Link>
            </div>

            <div>
                <h1 className="text-white text-lg font-bold mb-4">Contacts</h1>
                <div className="flex items-center">
                    <MdLocationPin fontSize={25} className="text-blue-400"/>
                    <Link href={'/'} className="text-blue-400 text-sm ml-2 my-2">670 Lafayette Ave, Brooklyn, NY 11216</Link>
                </div>
                <div className="flex items-center">
                    <IoMdCall fontSize={25} className="text-blue-400"/>
                    <Link href={'/'} className="text-blue-400 text-sm ml-2 my-2">(123) 456-7890</Link>
                </div>
                <div className="flex items-center">
                    <IoMailOpenSharp fontSize={25} className="text-blue-400"/>
                    <Link href={'/'} className="text-blue-400 text-sm ml-2 my-2">info@demolink.org</Link>
                </div>
                <div className="flex items-center">
                    <FaBookOpen fontSize={25} className="text-blue-400"/>
                    <Link href={'/'} className="text-blue-400 text-sm ml-2 my-2">Book an Appointment</Link>
                </div>
            </div>

            <div className="text-white">
                <h1 className="text-white text-lg font-bold mb-4">Opening Hours</h1>
                <p className="text-sm text-gray-300">Monday — 8am – 7pm</p>
                <p className="text-sm text-gray-300">Tuesday — 8am – 7pm</p>
                <p className="text-sm text-gray-300">Wednesday — 8am – 7:30pm</p>
                <p className="text-sm text-gray-300">Thursday — 8am – 6:30pm</p>
                <p className="text-sm text-gray-300">Friday —8am – 5pm</p>
                <p className="text-sm text-gray-300">Saturday — 8am – 2pm</p>
            </div>


        </div>
    )
}

export default Footer