import {useEffect, useState} from 'react'
import Hero from '../../layout/hero/Hero';
import {useRouter} from 'next/router';
import { findService } from '../../util/services';
import ServiceLayout from '../../section/services/ServiceLayout';

function Service() {
    const {query: {id}} = useRouter();
    // const [service, setService] = useState({});
    // useEffect(() => {
    //     const result = findService(id);
    //     console.log(result, "results")
    //     setService(result);
    // },[id])
  return (
    <div>
           <Hero bg="bg-aboutHero">
            <div className='flex items-center lg:h-[35vh] h-[50vh]  justify-center flex-col'>
            <h1 className='text-white leading-[1.5em] lg:leading-[1.3em] font-poppins tracking-wide text-center  font-bold text-[2.3em]  lg:text-[3.3em]'>{id && id.charAt(0).toUpperCase() + id.slice(1)} Cleaning <br /> Service</h1>
          <p className="font-semibold px-3 max-w-[700px] tracking-wider md:px-0 text-xl text-center  text-[#ebe7e7] leading-8 mt-3 font-poppins">Duis mollis est non commodo luctus nisi erat porttitor ligula eget lacinia odio sem necid nibh ultricies vehicula.</p>
            </div>
        </Hero>
        <div className='my-8'>
            <ServiceLayout />
        </div>
    </div>
  )
}

export default Service