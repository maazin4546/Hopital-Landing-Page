import Link from 'next/link'
import React from 'react'

const SecondFooter = () => {
    return (
        <div className='bg-blue-950'>
            <p className="text-lg text-white">Copyright © 2020 Ocularis.</p>
            <Link href={'/'}>Privacy Policy</Link>
            <Link href={'/'}>Terms of Use</Link>
        </div>
    )
}

export default SecondFooter