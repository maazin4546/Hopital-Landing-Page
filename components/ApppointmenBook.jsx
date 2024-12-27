import { FaPhoneAlt } from "react-icons/fa";
import Form from "./Form";

const ApppointmenBook = () => {
    return (
        <div className="flex justify-around bg-[#e0f3fd] p-20 h-[570px]">
            <div className="mt-20">
                <h1 className="w-[500px] leading-[50px] text-5xl text-blue-950">Make an appointment with an ophthalmologist</h1>
                <p className="mt-8 font-light text-blue-900">Have questions?</p>
                <div className="flex items-center mt-2">
                    <FaPhoneAlt fontSize={16} color='skyBlue' className="mr-2" />
                    <p className="text-blue-950 text-xl font-semibold">(123) 456-7890</p>
                </div>
                <button className="mt-8 text-white bg-blue-950 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-6 py-3 me-2 mb-2 focus:outline-none">Book An Appointment</button>
            </div>

            <Form />
        </div>
    )
}

export default ApppointmenBook