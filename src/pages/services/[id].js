import {useEffect, useState} from 'react'
import Hero from '../../layout/hero/Hero';
import {useRouter} from 'next/router';
import { findService } from '../../util/services';
import ServiceLayout from '../../section/services/ServiceLayout';
import backkDrop from '../../util/serviceBackdrop';

function Service() {
    const {query: {id}} = useRouter();
  return (
    <div>
           <Hero bg="bg-landscape">
            <div className='flex items-center lg:h-[35vh] h-[50vh]  justify-center flex-col'>
            <h1 className='text-white leading-[1.1em] lg:leading-[1em] font-poppins tracking-wide text-center  font-bold text-[1.7em]  lg:text-[2.5em]'>{id && id.charAt(0).toUpperCase() + id.slice(1)} Cleaning <br /> Service</h1>
          <p className=" px-3 lg:max-w-[700px] tracking-wider md:px-0 text-sm text-center  text-[#ebe7e7] leading-6 mt-3 font-poppins">Duis mollis est non commodo luctus nisi erat porttitor ligula eget lacinia odio sem necid nibh ultricies vehicula.</p>
            </div>
        </Hero>
        <div className='my-8'>
            <ServiceLayout /> 
        </div>
    </div>
  )
}

export default Service