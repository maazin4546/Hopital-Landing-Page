import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Features = () => {
    return (
        <div className='md:mt-[250px] mt-10 md:p-0 p-8'>
            <p className='text-center text-xs text-blue-700 font-light'>OUR FEATURES</p>
            <h1 className='text-center text-blue-950 text-4xl mt-4'>Why we are</h1>

            <div className='flex sm:flex-row flex-col justify-center items-center sm:mt-12 mt-6'>
                <div className='bg-[#f8f5ff] w-64 px-6 py-10 rounded-lg'>
                    <h1 className='text-3xl font-bold text-[#9985ca]'>24</h1>
                    <p className='font-light mt-2 text-xs'>Years of Work</p>
                </div>
                <div className='border border-gray-300 sm:ml-8 ml-0 sm:mt-0 mt-4 w-64 px-6 py-10 rounded-lg'>
                    <h1 className='text-3xl font-bold text-[#9985ca]'>500+</h1>
                    <p className='font-light mt-2 text-xs'>Operations per year</p>
                </div>

                <div className='sm:ml-20 ml-0 sm:mt-0 mt-6'>
                    <h1 className='text-4xl text-blue-950'>We guarantee</h1>
                    <p className='w-80 text-sm font-semibold mt-4'>Turpis in eu mi bibendum neque egestas congue quisque. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus.</p>
                    <Link href={'/'}>
                        <p className='text-blue-800 mt-4'>See All Services &#8594;</p>
                    </Link>
                </div>
            </div>

            <div className='flex md:flex-row flex-col justify-evenly items-center mt-16'>
                <div>
                    <h1 className='text-2xl font-semibold text-blue-950'>Unique Technology</h1>
                    <p className='w-96 mt-6 font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua feugiat.</p>
                    <li className='font-light mt-6 ml-4'>Magnis dis parturient montes nascetur</li>
                    <li className='font-light mt-2 ml-4'>Libero id faucibus nisl tincidunt eget</li>
                    <p className='font-light mt-6'>Feugiat in ante metus dictum at.</p>
                    <button className="mt-8 text-white bg-blue-950 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-6 py-4 me-2 mb-2 focus:outline-none">Ask Us Anything!</button>
                </div>

                <div className='mt-8 md:mt-0'>
                    <div>
                        <Image
                            src={"/assets/bg4.jpg"}
                            width={300}
                            height={300}
                            alt='bg'
                        />
                    </div>

                    <div className='flex mt-8'>
                        <Image
                            src={"/assets/bg6.jpg"}
                            width={130}
                            height={50}
                            alt='bg'
                            className='h-24'
                        />
                        <Image
                            src={"/assets/bg5.jpg"}
                            width={400}
                            height={400}
                            alt='bg'
                            className='h-64 ml-8'
                        />

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Features