import AboutClinic from '@/components/AboutClinic'
import ApppointmenBook from '@/components/ApppointmenBook'
import Brands from '@/components/Brands'
import Doctors from '@/components/Doctors'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Form from '@/components/Form'
import GoToTop from '@/components/GoToTop'
import Main from '@/components/Main'
import MakeAppointment from '@/components/MakeAppointment'
import Navbar from '@/components/Navbar'
import SecondFooter from '@/components/SecondFooter'
import SecondNavbar from '@/components/SecondNavbar'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <Navbar />
      <SecondNavbar />

      <div className='bg-white py-4'>
        <p className='text-gray-700 text-center text-lg'>
          <span className='text-blue-800 text-xl'>SPECIAL OFFERS APRIL!</span>
          <span className='font-semibold text-xl'> -30% </span>
          for comprehensive vision diagnostics.
          <Link href={'/'} className='ml-9 underline'>Learn More.</Link>
        </p>
      </div>

      <Main />
      <Brands />
      {/* <GoToTop/> */}
      <AboutClinic />
      <Form />
      <Services />
      <MakeAppointment/>  
      <Features/>
      <Testimonials/>
      <Doctors/>
      <ApppointmenBook/>
      <Footer/>
      <SecondFooter/>
    </div>
  )
}

export default page