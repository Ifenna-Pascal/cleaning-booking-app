import React from 'react'
import Review from '../../components/Review'
import Images from '../../util/images'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings from '../../util/sliderSettings';

function ClientReview() {

  return (
    <div className="min-h-[400px]  md:px-24 py-8 md:py-0 flex items-center justify-center lg:justify-end bg-clientReview bg-no-repeat bg-center bg-cover">
      <div className="md:max-w-[500px] w-full flex flex-col  items-center">
        <h1 className="text-center leading-[1.2em] text-white font-outfit mb-5  font-bold text-[1.5em] lg:text-[2.2em] ">Our Client Love Us</h1>
        <div className="w-full px-2">
          <Slider {...settings}>
            <Review img={Images.imageFive} name="Joseph S.Swan" title="Ornadal FL" review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque laboriosam nobis magni earum vitae deleniti necessitatibus odit, quia ipsam autem voluptate magnam tempore, iure omnis quo unde vel voluptates cupiditate." />
            <Review img={Images.imageFive} name="Joseph S.Swan" title="Ornadal FL" review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque laboriosam nobis magni earum vitae deleniti necessitatibus odit, quia ipsam autem voluptate magnam tempore, iure omnis quo unde vel voluptates cupiditate." />
            <Review img={Images.imageFive} name="Joseph S.Swan" title="Ornadal FL" review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque laboriosam nobis magni earum vitae deleniti necessitatibus odit, quia ipsam autem voluptate magnam tempore, iure omnis quo unde vel voluptates cupiditate." />
            <Review img={Images.imageFive} name="Joseph S.Swan" title="Ornadal FL" review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque laboriosam nobis magni earum vitae deleniti necessitatibus odit, quia ipsam autem voluptate magnam tempore, iure omnis quo unde vel voluptates cupiditate." />
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default ClientReview