"use client";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { client, urlFor } from "../lib/sanity";
import Image from 'next/image';


async function getData() {
  const query = `*[_type == 'heroImage'][0]{
    images
  }`;

  const data = await client.fetch(query);

  return data;
}

const Carousel = async ()=> {

  const data = await getData();

  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="">
      <div 
      style={{
        marginTop: '6%',
        marginBottom: '3',
        backgroundColor: 'rgba(232, 195, 158, 0.7)',
        borderRadius: '20px' }}
        className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          
      <Slider {...settings}>
        {data.images.map((image: any, index: any)=>{

          return(
            <div key={index}>
             <Image
              src={urlFor(image).url()}
              width={200}
              height={200}
              alt="photo"
            />
            </div>
          )
        })}
      </Slider>
      </div>
    </div>
  );
};
export default Carousel;