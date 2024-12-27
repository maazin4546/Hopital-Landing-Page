import Link from 'next/link'
import { FaAngleUp } from "react-icons/fa";

const GoToTop = () => {
    return (
        <Link href={"/"}>
            <div className='absolute right-2 bg-blue-400 p-4 rounded-full'>
                <FaAngleUp fontSize={30} color='white' />
            </div>
        </Link>
    )
}

export default GoToTop