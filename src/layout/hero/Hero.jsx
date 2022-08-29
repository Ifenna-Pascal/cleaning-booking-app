import { useRouter } from 'next/router';
import { useState } from 'react'
import MobileNav from './MobileNav';
import Navbar from './Navbar'

function Hero({ children, bg }) {
  const router = useRouter();
  const [show, setShow] = useState(false);
  return (
    <div className={`${router.pathname === "/" ? "md:min-h-[80vh] min-h-screen" : "md:min-h-[70vh] min-h-[60vh]"} h-full w-full ${bg} bg-no-repeat bg-cover bg-center bg-fixed relative`}>
      <div className='lg:max-w-[1250px] w-full h-full relative lg:px-4 mx-auto'>
        <Navbar show={show} setShow={setShow} />
        <MobileNav show={show} />
        <div className=" flex flex-col items-center justify-center h-full  lg:pt-28 ">{children}</div>
      </div>
    </div>
  )
}

export default Hero