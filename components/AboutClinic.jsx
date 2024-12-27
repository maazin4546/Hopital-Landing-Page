import { About_Clinic_Data } from "@/lib/data";
import { FaCircleCheck } from "react-icons/fa6";
const AboutClinic = () => {
    return (
        <div className='flex justify-around items-center py-14 mt-20 bg-[#f6f7f9]'>
            <div>
                <p className='text-lg text-blue-500'>ABOUT CLINIC</p>
                <h1 className='text-5xl text-blue-900 mt-6 leading-[55px]'>We are a recognized<br /> leader in high-tech<br /> ophthalmology services</h1>
            </div>
            <div className='flex flex-col justify-center items-center mt-6'>
                {About_Clinic_Data.map((elem, index) => (
                    <div key={index} className="flex justify-center items-center my-4">
                        <div><FaCircleCheck fontSize={50} color="gray" /></div>
                        <p className='ml-6 w-[395px] text-blue-950'>{elem.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AboutClinic