import { useRouter } from 'next/router';
import { useState } from 'react'
import MobileNav from './MobileNav';
import Navbar from './Navbar'

function Hero({ children, bg }) {
  const router = useRouter();
  const [show, setShow] = useState(false);
  return (
    <div className={`min-h-screen ${router.pathname === "/" ? "md:min-h-[90vh]" : "md:min-h-[70vh]"} h-full w-full ${bg} bg-no-repeat bg-cover bg-center bg-fixed relative`}>
      <div className='max-w-[1250px] w-full h-full relative mx-auto'>
        <Navbar show={show} setShow={setShow} />
        <MobileNav show={show} />
        <div className=" flex flex-col lg:mt-24 ">{children}</div>
      </div>
    </div>
  )
}

export default Hero