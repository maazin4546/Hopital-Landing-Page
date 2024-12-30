import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";

const MakeAppointment = () => {
    return (
        <div className="p-20 bg-[#e0f3fd] h-full sm:h-[730px] mt-14">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-center md:text-5xl text-3xl md:leading-[60px] text-blue-950">Make an appointment with<br /> an ophthalmologist</h1>
                <div className="flex justify-center items-center mt-8">
                    <p className="font-light text-blue-900">Have Questions?</p>
                    <FaPhoneAlt fontSize={16} color='skyBlue' className="ml-4 mr-1" />
                    <p className="sm:text-xl text-sm font-semibold text-blue-950">(123) 456-7890</p>
                </div>
                <button className="mt-8 text-white bg-blue-950 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg sm:text-lg text-sm px-6 py-3 me-2 mb-2 focus:outline-none">Book An Appointment</button>
            </div>

            <div className="flex sm:flex-row flex-col justify-center items-center mt-16">
                <div>
                    <Image
                        src="/assets/bg1.jpg"
                        width={400}
                        height={200}
                        alt="bg"
                    />
                </div>

                <div className="sm:ml-6 mt-4 sm:mt-0">
                    <Image
                        src="/assets/bg2.jpg"
                        width={373}
                        height={200}
                        alt="bg"
                    />
                    <Image
                        src="/assets/bg3.jpg"
                        width={373}
                        height={200}
                        alt="bg"
                        className="mt-6"
                    />
                </div>
            </div>
        </div>
    )
}

export default MakeAppointment