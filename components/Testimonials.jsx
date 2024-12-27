import { Testimonials_data } from "@/lib/data";
import Image from "next/image";
import { RiDoubleQuotesL } from "react-icons/ri";

const Testimonials = () => {
    return (
        <div className='mt-20 bg-[#f8f5ff] py-16'>
            <p className='text-center text-sx text-blue-600'>Testimonials</p>
            <h1 className='text-5xl mt-8 text-blue-950 text-center'>Don&apos;t take our word for it —<br />
                hear what our customers are saying</h1>

            <div className="flex flex-wrap justify-evenly items-center mt-10">
                {Testimonials_data.map((elem, index) => (
                    <div key={index} className="w-60 h-60 px-6 py-10 bg-white text-gray-600">
                        <RiDoubleQuotesL fontSize={30} color="skyBlue" />
                        <p>{elem.title}</p>
                    </div>
                ))}
            </div>

            <div className="mt-10 flex justify-evenly items-center">
                {Testimonials_data.map((elem, index) => (
                    <div key={index} className="flex justify-center items-center">
                        <Image
                            src={elem.imgUrl}
                            width={50}
                            height={30}
                            alt="Testimonials"
                            className="rounded-full"
                        />
                        <div className="ml-4">
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