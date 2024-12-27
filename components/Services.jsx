import { Servcies_data } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Services = () => {
    return (
        <div className='mt-10'>
            <div className='text-center'>
                <p className='text-blue-700 mb-4'>OUR SERVICES</p>
                <h1 className='text-blue-900 text-5xl leading-[60px]'>We offer a whole range of treatments<br /> for you, your family and friends</h1>
            </div>

            <div className="flex flex-wrap justify-center">
                <div className="grid grid-cols-4 gap-4 mt-12">
                    {Servcies_data.map((elem, index) => (
                        <div
                            key={index}
                            className="border border-black h-48 w-48 p-4 cursor-pointer flex flex-col items-center justify-center"
                        >
                            <Image
                                src={elem.imgUrl}
                                height={80}
                                width={80}
                                alt="logo"
                            />
                            <p className="mt-4 text-center text-gray-700">{elem.title}</p>
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