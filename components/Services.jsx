import { Servcies_data } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Services = () => {
    return (
        <div className='mt-52'>
            <div className='text-center'>
                <p className='text-blue-700 mb-4'>OUR SERVICES</p>
                <h1 className='text-blue-900 md:text-5xl text-3xl md:leading-[60px]'>We offer a whole range of treatments<br /> for you, your family and friends</h1>
            </div>

            <div className="flex flex-col items-center justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
                    {Servcies_data.map((elem, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 p-4 cursor-pointer flex flex-col items-center justify-center h-48 w-full max-w-[12rem] sm:max-w-[10rem] lg:max-w-[12rem] transition-all duration-300 hover:shadow-lg hover:bg-gray-100 
                            "
                        >
                            <Image
                                src={elem.imgUrl}
                                height={80}
                                width={80}
                                alt="logo"
                            />
                            <p className="mt-4 text-center text-gray-700 hover:text-purple-600 transition-colors duration-300">
                                {elem.title}
                            </p>
                        </div>
                    ))}
                </div>

            </div>


            <Link href={'/'}>
                <p className='text-blue-800 text-center mt-10'>See All Services &#8594;</p>
            </Link>

        </div>
    )
}

export default Services