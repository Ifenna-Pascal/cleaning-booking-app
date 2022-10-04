import Link from 'next/link';
import React from 'react';
import ServiceCard from '../../components/ServiceCard';

function OurServices({ services, serviceObject, show }) {
  return (
    <div className="bg-[#e2e7f6]">
      <div className="lg:max-w-[1300px] min-h-[600px] flex flex-col w-full h-full items-start py-12  relative mx-auto">
        <div className="w-full flex flex-col md:flex-row justify-between items-center">
          <div>
            <h1 className="font-semibold font-poppins leading-[1.2em] text-center md:text-left text-[1.5em] lg:text-[2.2em] text-text_primary ">
              Our Services
            </h1>
            <p className="text-text_secondary font-poppins leading-[1.7rem] md:leading-[1.8rem]  text-center md:text-left  max-w-[680px] text-[1rem] px-4 lg:px-0 md:text-[1.2rem]  lg:mb-4 py-2">
              You can rely on us make anywhere neat, clean and tidy
            </p>
          </div>
          {show && (
            <Link href="/services">
              <button className="bg-primary  border-none flex items-center mt-6 md:mt-0 py-3 px-20 md:px-12  hover:cursor-pointer hover:opacity-95 hover:-translate-x-[6px] hover:text-gray-100 duration-300 font-poppins uppercase cursor-pointer text-white font-semibold rounded-md justify-center">
                View All Services
              </button>
            </Link>
          )}
        </div>
        <div className="my-4 grid mx-6 md:mx-0 lg:grid-cols-4 py-4 md:py-6 gap-8 md:gap-4 md:grid-cols-2 grid-cols-1">
          {services.map((x, i) => {
            let service = { ...x, ...serviceObject[i] };
            return (
              <ServiceCard
                key={service.type}
                type={service.type}
                image={service.image}
                icon={service.icon}
                header={service.name}
                content={`${service.content
                  .split(' ')
                  .slice(0, 15)
                  .join(' ')}...`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OurServices;
