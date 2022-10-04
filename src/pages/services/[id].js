import { useContext, useEffect, useState } from 'react';
import Hero from '../../layout/hero/Hero';
import { useRouter } from 'next/router';
import ServiceLayout from '../../section/services/ServiceLayout';
import { ServiceContext } from '../../context/ServiceProvider';

function Service() {
  const {
    query: { id },
  } = useRouter();
  const { getEachService, serviceDetails } = useContext(ServiceContext);
  useEffect(() => {
    getEachService(id);
  }, [id]);
  return (
    <div>
      <Hero bg="bg-landscape">
        <div className="flex items-center lg:h-[35vh] h-[50vh]  justify-center flex-col">
          <h1 className="text-white leading-[1em] lg:leading-[1.3em] font-poppins tracking-wide text-center  font-bold text-[1.7em]  lg:text-[2.5em]">
            {' '}
            {serviceDetails?.name} Service
          </h1>
          {/* <p className=" px-3 lg:max-w-[700px] tracking-wider md:px-0 text-base text-center  text-[#ebe7e7] leading-6 mt-3 font-poppins">Duis mollis est non commodo luctus nisi erat porttitor ligula eget lacinia odio sem necid nibh ultricies vehicula.</p> */}
        </div>
      </Hero>
      <div className="my-8">
        <ServiceLayout />
      </div>
    </div>
  );
}

export default Service;
