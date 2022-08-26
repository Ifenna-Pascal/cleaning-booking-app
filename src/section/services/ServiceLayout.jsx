import React from 'react'
import Card from '../../components/Card'
import Images from '../../util/images'
import ServiceRightLayout from './ServiceRightLayout';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ServiceLayout() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='grid max-w-[1250px] gap-x-16 my-12 w-full h-full relative mx-auto  grid-cols-1 lg:grid-cols-5'>
            <div className='lg:col-span-3 col-psan-1 flex flex-col items-start rounded-[20px]   min-h-fit w-full'>
                <div className="w-full flex items-center lg:min-h-[400px] ">
                    <img src={Images.imageNine} className="w-full h-full object-center rounded-[6px] object-cover" />
                </div>
                <h1 className='text-gray-800 leading-[1em] lg:leading-[1.4em] py-4 font-poppins tracking-wide text-center lg:text-left font-bold text-[2.3em] lg:text-[2em] w-full'>Regardless of how messy things are, we do our best to clean.</h1>
                <p className="text-lg font-poppins leading-[22px] font-[500] text-gray-600 text-left w-full">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue.</p>
                <br />
                <p className="text-lg font-poppins leading-[22px] font-[500] text-gray-600 text-left w-full">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue.</p>
                <div className='grid w-full grid-cols-2 py-8 gap-4'>
                    <Card title="Experienced Staff" desc="Morbi leo risus, porta ac consectetur acit vestibulum at eros. Integer posuere erat a ante venenatis dapibus." icon="ri-group-fill" />
                    <Card title="Experienced Staff" desc="Morbi leo risus, porta ac consectetur acit vestibulum at eros. Integer posuere erat a ante venenatis dapibus." icon="ri-group-fill" />
                </div>
                <p className="text-lg font-poppins leading-[22px] font-[500] text-gray-600 text-left w-full">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue.</p>
            </div>
            <div className='col-span-2 max-w-[400px] w-full'>
                <ServiceRightLayout />
            </div>
        </div>
    )
}

export default ServiceLayout