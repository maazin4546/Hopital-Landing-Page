import { About_Clinic_Data } from "@/lib/data";
import { FaCircleCheck } from "react-icons/fa6";
import Form from "./Form";

const AboutClinic = () => {
    return (
        <div className="bg-[#f6f7f9] h-[900px]">
            <div className='flex md:flex-row flex-col md:justify-evenly justify-start items-center p-12 md:py-14 mt-20 '>
                <div>
                    <p className='text-lg text-blue-500'>ABOUT CLINIC</p>
                    <h1 className='md:text-5xl text-3xl text-blue-900 mt-6 md:leading-[55px]'>We are a recognized<br /> leader in high-tech<br /> ophthalmology services</h1>
                </div>
                <div className='flex flex-col justify-center items-center mt-6'>
                    {About_Clinic_Data.map((elem, index) => (
                        <div key={index} className="flex md:flex-row flex-col justify-center items-center my-4">
                            <div><FaCircleCheck fontSize={50} color="gray" /></div>
                            <p className='ml-6 w-[395px] text-blue-950 mt-3 md:mt-0'>{elem.title}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Form/>
        </div>
    )
}

export default AboutClinic