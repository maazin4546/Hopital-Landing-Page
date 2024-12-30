import { Testimonials_data } from "@/lib/data";
import Image from "next/image";
import { RiDoubleQuotesL } from "react-icons/ri";

const Testimonials = () => {
    return (
        <div className='mt-20 bg-[#f8f5ff] py-16 p-0 sm:p-6'>
            <p className='text-center text-sx text-blue-600'>Testimonials</p>
            <h1 className='sm:text-5xl text-3xl mt-8 text-blue-950 text-center'>Don&apos;t take our word for it —<br />
                hear what our customers are saying</h1>

            <div className="flex flex-wrap justify-evenly items-center mt-10">
                {Testimonials_data.map((elem, index) => (
                    <div key={index} className="w-60 h-60 px-6 py-10 bg-white text-gray-600 md:m-0 m-4">
                        <RiDoubleQuotesL fontSize={30} color="skyBlue" />
                        <p>{elem.title}</p>
                    </div>
                ))}
            </div>

            <div className="mt-10 flex flex-wrap sm:justify-evenly items-center justify-start p-0 sm:p-4">
                {Testimonials_data.map((elem, index) => (
                    <div key={index} className="flex justify-center items-center m-3 sm:m-0">
                        <Image
                            src={elem.imgUrl}
                            width={50}
                            height={30}
                            alt="Testimonials"
                            className="rounded-full"
                        />
                        <div className="sm:ml-4 ml-0">
                            <h1 className="text-lg text-blue-950">{elem.name}</h1>
                            <p className="text-sm font-light">{elem.duration}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials