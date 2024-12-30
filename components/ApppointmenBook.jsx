import { FaPhoneAlt } from "react-icons/fa";
import Form from "./Form";

const ApppointmenBook = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center bg-[#e0f3fd] p-8 md:p-20 md:h-[570px]">
            {/* Left Section */}
            <div className="md:w-1/2 md:mt-20 mt-6 text-center md:text-left">
                <h1 className="w-full md:w-[500px] leading-[40px] md:leading-[50px] text-3xl md:text-5xl text-blue-950">
                    Make an appointment with an ophthalmologist
                </h1>
                <p className="mt-8 font-light text-blue-900">Have questions?</p>
                <div className="flex justify-center md:justify-start items-center mt-2">
                    <FaPhoneAlt fontSize={16} color="skyBlue" className="mr-2" />
                    <p className="text-blue-950 text-lg md:text-xl font-semibold">(123) 456-7890</p>
                </div>
                <button className="mt-8 text-white bg-blue-950 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-6 py-3 focus:outline-none">
                    Book An Appointment
                </button>
            </div>

            {/* Right Section */}
            <div className="mt-12 md:mt-36 md:w-1/2">
                <Form />
            </div>
        </div>

    )
}

export default ApppointmenBook