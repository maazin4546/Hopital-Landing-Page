import Link from 'next/link'
import { nav_links } from '@/lib/data';
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";


const SecondNavbar = () => {

    const homeItems = ["Home Clinic V1", "Home Clinic V2", "Home Clinic V3", "Home Clinic V4", "Home Doctor v1", "Home Doctor V2", "Home Store"];
    const aboutItems = ["About Clinic V1", "About Clinic V2", "About Clinic V3"];
    const ServciesItems = ["Servcies V1", "Servcies V2", "Servcies V3", "Servcies V4"];
    const treatItems = ["Astigmatism"];
    const pricesItems = ["Price V1", "Price V2", "Price V3"];
    const otherItems = ["Servcies V1", "Servcies V2", "Servcies V3", "Servcies V4", "Price V1", "Price V2", "Price V3", "About Clinic V1", "About Clinic V2", "About Clinic V3"];
    const blogItems = ["Listing without Slider", "Listing", "Grid", "Single Post"]
    const storeItems = ["Collections", "Single Product", 'Archive', "Cart"]

    return (
        <div className='md:flex hidden justify-between bg-blue-950 px-10 py-6'>
            <div className="flex text-lg text-white">
                {nav_links.map((elem, index) => (
                    <div key={index} className="relative group flex items-center mx-4">
                        <Link href={elem.href} className="mx-2 hover:text-blue-300 transition-colors">
                            {elem.name}
                        </Link>
                        <IoIosArrowDown />

                        {/* Dropdown Menu */}
                        {elem.name === "Home" && (
                            <div className="absolute left-0 top-8 w-72 hidden group-hover:flex flex-col bg-white text-black shadow-lg p-4">
                                {homeItems.map((item, idx) => (
                                    <Link
                                        key={idx}
                                        href="#"
                                        className="px-2 py-2 hover:bg-blue-100 rounded-lg transition"
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        )}

                        {elem.name === "About Clinic" && (
                            <div className="absolute left-0 top-8 w-72 hidden group-hover:flex flex-col bg-white text-black shadow-lg p-4">
                                {aboutItems.map((item, idx) => (
                                    <Link
                                        key={idx}
                                        href="#"
                                        className="px-2 py-2 hover:bg-blue-100 rounded-lg transition"
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        )}

                        {elem.name === "Servcies" && (
                            <div className="absolute left-0 top-8 w-72 hidden group-hover:flex flex-col bg-white text-black shadow-lg p-4">
                                {ServciesItems.map((item, idx) => (
                                    <Link
                                        key={idx}
                                        href="#"
                                        className="px-2 py-2 hover:bg-blue-100 rounded-lg transition"
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        )}

                        {elem.name === "What we treat" && (
                            <div className="absolute left-0 top-8 w-72 hidden group-hover:flex flex-col bg-white text-black shadow-lg p-4">
                                {treatItems.map((item, idx) => (
                                    <Link
                                        key={idx}
                                        href="#"
                                        className="px-2 py-2 hover:bg-blue-100 rounded-lg transition"
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        )}

                        {elem.name === "Prices" && (
                            <div className="absolute left-0 top-8 w-72 hidden group-hover:flex flex-col bg-white text-black shadow-lg p-4">
                                {pricesItems.map((item, idx) => (
                                    <Link
                                        key={idx}
                                        href="#"
                                        className="px-2 py-2 hover:bg-blue-100 rounded-lg transition"
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        )}
                        {elem.name === "Other pages" && (
                            <div className="absolute left-0 top-8 w-72 h-96 hidden group-hover:flex flex-col overflow-y-auto bg-white text-black shadow-lg p-4">
                                {otherItems.map((item, idx) => (
                                    <Link
                                        key={idx}
                                        href="#"
                                        className="px-2 py-2 hover:bg-blue-100 rounded-lg transition"
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        )}

                        {elem.name === "Blog" && (
                            <div className="absolute left-0 top-8 w-72 hidden group-hover:flex flex-col overflow-y-auto bg-white text-black shadow-lg p-4">
                                {blogItems.map((item, idx) => (
                                    <Link
                                        key={idx}
                                        href="#"
                                        className="px-2 py-2 hover:bg-blue-100 rounded-lg transition"
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        )}

                        {elem.name === "Store" && (
                            <div className="absolute left-0 top-8 w-72 hidden group-hover:flex flex-col overflow-y-auto bg-white text-black shadow-lg p-4">
                                {storeItems.map((item, idx) => (
                                    <Link
                                        key={idx}
                                        href="#"
                                        className="px-2 py-2 hover:bg-blue-100 rounded-lg transition"
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className='flex justify-center items-center'>
                <IoSearch fontSize={30} className='mx-2 cursor-pointer text-white' />
                <FaCartShopping fontSize={30} className='mx-2 cursor-pointer text-white' />
            </div>
        </div>
    )
}

export default SecondNavbar