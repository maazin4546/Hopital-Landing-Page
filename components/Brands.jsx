import { brands_data } from '@/lib/data'
import Image from 'next/image'
import React from 'react'

const Brands = () => {
    return (
        <div>
            <div className='text-center md:pt-20 pt-14'>
                <p className='md:text-xl text-sm text-blue-700'>OUR ADVANTAGES</p>
                <h1 className='md:text-6xl text-4xl md:my-8 my-4 text-blue-950'>Good vision for many years</h1>
            </div>

            <div className='flex flex-wrap justify-around items-center py-6'>
                {brands_data.map((elem, index) => (
                    <div key={index} className='flex flex-col m-4 md:m-0 md:flex-row md:justify-center md:p-0 justify-between items-center'>
                        <Image
                            src={elem.imgUrl}
                            width={80}
                            height={80}
                            alt='brand'
                        />
                        <p className='mx-3 text-2xl text-blue-950'>{elem.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Brands