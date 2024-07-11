'use client'

import React from 'react'
import Link from 'next/link';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import CardItem from './CardItem';
import Container from '../ui/Container';



const SlideProduct = () => {
    var settings = {
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: false,
        touchMove: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }
        ],
        nextArrow: (
            <div>
                <div className=" absolute top-0 left-1 text-black ">
                    <IoIosArrowForward size={24} />
                </div>
            </div>
        ),

        prevArrow: (
            <div>
                <div className=" absolute top-0 right-1 text-black ">
                    <IoIosArrowBack size={24} />
                </div>
            </div>
        ),
    };

    return (
        <div>
            <Container>
                <h2 className='uppercase text-2xl font-bold mb-4 mt-8 hover:opacity-60'>
                    <Link href="">SẢN PHẨM BÁN CHẠY</Link>
                </h2>
                <Slider {...settings}>
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                </Slider>
            </Container>
        </div>

    );
}

export default SlideProduct