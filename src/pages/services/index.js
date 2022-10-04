import Hero from '../../layout/hero/Hero';
import ClientReview from '../../section/home/ClientReview';
import Processes from '../../section/home/Process';
import Remark from '../../section/home/Remark';
import Images from '../../util/images';
import { services } from '../../util/services';
import OurServices from '../../section/home/OurServices';
const serviceObject = [
  {
    image: Images.imageEight,
    icon: 'ri-home-4-fill',
  },
  {
    image: Images.imageSeven,
    icon: 'ri-home-4-fill',
  },
  {
    image: Images.imageNine,
    icon: 'ri-home-4-fill',
  },
  {
    image: Images.imageTen,
    icon: 'ri-user-fill',
  },
  {
    image: Images.imageEight,
    icon: 'ri-home-4-fill',
  },
  {
    image: Images.imageSeven,
    icon: 'ri-home-4-fill',
  },
  {
    image: Images.imageNine,
    icon: 'ri-home-4-fill',
  },
  {
    image: Images.imageTen,
    icon: 'ri-user-fill',
  },
];

const Services = () => {
  return (
    <div>
      <Hero bg="bg-residential">
        <div className="flex items-center lg:h-[35vh] h-[50vh]  justify-center flex-col">
          <h1 className="text-white leading-[1.5em] lg:leading-[1em] font-poppins tracking-wide text-center  font-bold text-[2.3em]  lg:text-[2.5em]">
            Services
          </h1>
          <p className=" px-3 max-w-[700px] tracking-wider md:px-0 text-base text-center  text-[#ebe7e7] leading-8 mt-3 font-poppins">
            Our Services spans across commercial, domestic and industrial
            sectors. We provide top notch quality our clients can trust.
          </p>
        </div>
      </Hero>
      <OurServices services={services} serviceObject={serviceObject} />
      <Processes />
      <ClientReview />
      <Remark />
    </div>
  );
};

export default Services;
