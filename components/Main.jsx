import Image from 'next/image'
import React from 'react'

const Main = () => {
    return (
        <div className='flex flex-col justify-center items-center pt-20 bg-[#e0f3fd]'>
            <div className='flex justify-center items-center flex-col'>
                <h1 className='leading-[70px] text-5xl text-center text-blue-950'>The face is a picture <br /> of the mind with an eyes</h1>
                <p className='text-2xl text-center mt-6 text-blue-950'>The face is a picture of the mind with an eyes</p>
                <button className="mt-8 text-white bg-blue-950 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-7 py-4 me-2 mb-2 focus:outline-none">Learn More About Us</button>
            </div>

            <div>
                <Image
                    src={'/assets/main-bg.png'}
                    width={900}
                    height={900}
                    alt='image'
                />
            </div>
        </div>
    )
}

export default Main