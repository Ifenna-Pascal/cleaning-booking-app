import React, { useContext } from 'react';
import Card from '../../components/Card';
import Images from '../../util/images';
import ServiceRightLayout from './ServiceRightLayout';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ServiceContext } from '../../context/ServiceProvider';
import settings from '../../util/sliderSettings';

const imageArray = [
  Images.imageEight,
  Images.imageTen,
  Images.imageEleven,
  Images.imageSeven,
];

function ServiceLayout() {
  const { serviceDetails } = useContext(ServiceContext);
  return (
    <div className="grid lg:max-w-[1250px] gap-x-16 my-12 w-full h-full relative mx-auto  grid-cols-1 lg:grid-cols-5">
      <div className="lg:col-span-3 px-4 lg:px-0 col-span-1 flex flex-col items-start w-full">
        <div className="w-full cursor-pointer">
          <Slider {...settings}>
            {imageArray.map((x, index) => (
              <div key={index} className="h-[400px] w-full">
                <img
                  src={x}
                  className="w-full h-full object-center rounded-[15px] object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="py-6">
          <h1 className="text-gray-800 leading-[1.2em] lg:leading-[1.2em] py-2 font-poppins  text-left font-bold text-[1.4em] lg:text-[1.5em] w-full">
            {serviceDetails?.header}
          </h1>
          <p className="text-lg font-poppins leading-[24px] font-[400] py-2 text-gray-500 text-left w-full">
            {' '}
            {serviceDetails?.content}
          </p>
          <br />
          {/* <p className="text-base font-poppins leading-[18px] font-[400] text-gray-600 text-left w-full">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue.</p> */}
          <div className="grid w-full lg:grid-cols-2 grid-col-1 py-4 gap-4">
            <Card
              title="Experienced Staff"
              desc="Our cleaning squad consists of well trained and experienced individuals. Our aim is to produce high rate of customer satisfaction"
              icon="ri-group-fill"
            />
            <Card
              title="Quality Tools"
              desc="The presence of high quality and top notch tools makes our work stand out. Each tool for each service rendering ranging from domestic to industial cleaning agents"
              icon="ri-settings-2-line"
            />
          </div>
          <p className="text-lg py-2 font-poppins leading-[24px] font-[400] text-gray-500 text-left w-full">
            Patronice our {serviceDetails?.name?.toLowerCase()} we bring quality
            at your door step. Customer satisfaction indeed is the our main goal
            and target.
          </p>
        </div>
      </div>
      <div className="col-span-2 hidden lg:block max-w-[400px] w-full">
        <ServiceRightLayout />
      </div>
    </div>
  );
}

export default ServiceLayout;
