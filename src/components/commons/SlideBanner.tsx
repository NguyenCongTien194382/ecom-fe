'use client'

import React from 'react'
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideBanner = () => {
    var settings = {
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        draggable: false,
    };
    return (
        <Slider {...settings}>
            <div>
                <Image
                    src="/assets/slides/slide1.webp"
                    width={5000}
                    height={5000}
                    alt="Slide 1"
                    className='block h-full w-auto'
                />
            </div>
            <div>
                <Image
                    src="/assets/slides/slide2.webp"
                    width={5000}
                    height={5000}
                    alt="Slide 1"
                    className='block h-full w-auto'
                />
            </div>
            <div>
                <Image
                    src="/assets/slides/slide3.webp"
                    width={5000}
                    height={5000}
                    alt="Slide 1"
                    className='block h-full w-auto'
                />
            </div>
        </Slider>
    );
}

export default SlideBanner