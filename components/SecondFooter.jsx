import Link from 'next/link'
import React from 'react'

const SecondFooter = () => {
    return (
        <div className='bg-blue-950 flex justify-start items-center p-4'>
            <p className="text-xs text-white ml-8">Copyright © 2020 Ocularis.</p>
            <Link href={'/'} className='text-sky-300 text-xs mx-2 ml-6'>Privacy Policy</Link>
            <Link href={'/'} className='text-sky-300 text-xs mx-2'>Terms of Use</Link>
        </div>
    )
}

export default SecondFooter