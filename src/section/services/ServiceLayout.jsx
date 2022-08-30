/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useContext } from 'react'
import Card from '../../components/Card'
import Images from '../../util/images'
import ServiceRightLayout from './ServiceRightLayout';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ServiceContext } from '../../context/ServiceProvider';

const imageArray = [Images.imageEight, Images.imageTen, Images.imageEleven, Images.imageSeven]

function ServiceLayout() {

    const { serviceDetails } = useContext(ServiceContext);

    // slider setttings
    const settings = {
        dotsClass: 'slick-dots slick-thumb',
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '0px',
        speed: 700,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        pauseOnHover: true,
        arrows: false,
        dots: true
    };
    return (
        <div className='grid lg:max-w-[1250px] gap-x-16 my-12 w-full h-full relative mx-auto  grid-cols-1 lg:grid-cols-5'>
            <div className='lg:col-span-3 px-4 lg:px-0 col-span-1 flex flex-col items-start w-full'>
                <div className="w-full cursor-pointer">
                    <Slider {...settings}>
                        {
                            imageArray.map((x, index) => (
                                <div key={index} className="h-[400px] w-full">
                                    <img src={x} className="w-full h-full object-center rounded-[15px] object-cover" />
                                </div>
                            ))
                        }
                    </Slider>
                </div>
                <div className='py-6'>
                    <h1 className='text-gray-800 leading-[1.2em] lg:leading-[1.2em] py-2 font-poppins  text-left font-bold text-[1.3em] lg:text-[1.5em] w-full'>{serviceDetails?.header}</h1>
                    <p className="text-base font-poppins leading-[20px] font-[400] text-gray-500 text-left w-full"> {serviceDetails?.content}</p>
                    <br />
                    {/* <p className="text-base font-poppins leading-[18px] font-[400] text-gray-600 text-left w-full">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue.</p> */}
                    <div className='grid w-full lg:grid-cols-2 grid-col-1 py-4 gap-4'>
                        <Card title="Experienced Staff" desc="Morbi leo risus, porta ac consectetur acit vestibulum at eros. Integer posuere erat a ante venenatis dapibus." icon="ri-group-fill" />
                        <Card title="Experienced Staff" desc="Morbi leo risus, porta ac consectetur acit vestibulum at eros. Integer posuere erat a ante venenatis dapibus." icon="ri-group-fill" />
                    </div>
                    <p className="text-sm font-poppins leading-[18px] font-[400] text-gray-600 text-left w-full">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue.</p>
                </div>
            </div>
            <div className='col-span-2 hidden lg:block max-w-[400px] w-full'>
                <ServiceRightLayout />
            </div>
        </div>
    )
}

export default ServiceLayout