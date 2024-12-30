import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Doctors_data } from "@/lib/data"
import Link from "next/link"


const Doctors = () => {
    return (
        <div className="mt-12 p-8">
            <p className="md:text-lg text-sm text-blue-700">OUR DOCTORS</p>
            <h1 className="md:text-5xl text-3xl text-blue-950 mt-4">Trust the professionals</h1>

            <div className="flex flex-wrap justify-center mt-12 p-8">
                <Carousel>
                    <CarouselPrevious className="hidden md:block"/>
                    <CarouselContent className="flex justify-around px-4">
                        {Doctors_data.map((elem, index) => (
                            <CarouselItem key={index} className="basis-1/3 flex flex-col m-4">
                                <img
                                    src={elem.imgUrl}
                                    className="w-[400px] h-[300px] object-cover rounded-md shadow-lg"
                                    alt="Carousel Item 1"
                                />
                                <h1 className="text-xl text-blue-900 mt-4">{elem.name}</h1>
                                <p className="text-md text-blue-600">{elem.title}</p>
                                <p className="my-4 font-light">{elem.desc}</p>
                                <Link href={"/"} className="text-lg text-blue-600">Learn More&#8594;</Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselNext className="hidden md:block"/>
                </Carousel>

            </div>
        </div>


    )
}

export default Doctors