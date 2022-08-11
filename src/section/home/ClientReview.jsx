import React from 'react'
import Review from '../../components/Review'
import Images from '../../util/images'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ClientReview() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="w-screen min-h-[400px] px-24 flex items-center justify-end bg-clientReview bg-no-repeat bg-center bg-cover">
      <div className="max-w-[500px] flex flex-col items-center">
        <h1 className="text-center leading-[1.5em] text-white font-outfit mb-5  font-bold text-[2.4em] ">Our Client Love Us</h1>
        <div className="">
        <Slider {...settings}>
          <div><Review img={Images.imageFive} name="Joseph S.Swan" title="Ornadal FL" review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque laboriosam nobis magni earum vitae deleniti necessitatibus odit, quia ipsam autem voluptate magnam tempore, iure omnis quo unde vel voluptates cupiditate."  /> </div>
          {/* <div><Review img={Images.imageFive} name="Joseph S.Swan" title="Ornadal FL" review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque laboriosam nobis magni earum vitae deleniti necessitatibus odit, quia ipsam autem voluptate magnam tempore, iure omnis quo unde vel voluptates cupiditate."  /> </div> */}
          {/* <Review img={Images.imageFive} name="Joseph S.Swan" title="Ornadal FL" review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque laboriosam nobis magni earum vitae deleniti necessitatibus odit, quia ipsam autem voluptate magnam tempore, iure omnis quo unde vel voluptates cupiditate."  /> */}
          {/* <Review img={Images.imageFive} name="Joseph S.Swan" title="Ornadal FL" review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque laboriosam nobis magni earum vitae deleniti necessitatibus odit, quia ipsam autem voluptate magnam tempore, iure omnis quo unde vel voluptates cupiditate."  /> */}
        </Slider>
        </div>
      </div>
    </div>
  )
}

export default ClientReview