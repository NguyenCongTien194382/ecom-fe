import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaEye } from "react-icons/fa";

const CardItem = () => {
    return (
        <div className='group'>
            <div className='relative'>
                <Link href="" className='uppercase'>
                    <Image
                        src="/assets/images/product.webp"
                        width={4000}
                        height={4000}
                        alt="product"
                        className='w-full h-auto'
                    />
                </Link>
                <div className='hidden group-hover:flex justify-center items-center cursor-pointer text-white w-14 h-14 absolute top-[50%] right-[50%] translate-x-2/4 -translate-y-2/4 rounded-[50%] bg-[#7a7a7a] opacity-80 hover:opacity-100'>
                    <FaEye size={24} />
                </div>
                <div className='absolute bottom-0 invisible flex justify-center items-center text-white font-bold h-0 w-full cursor-pointer bg-[#7a7a7a] opacity-80 hover:opacity-100 group-hover:h-11 group-hover:visible duration-100 ease-in-out'>
                    Chọn sản phẩm
                </div>
            </div>
            <div>
                <Link href="" className='block uppercase font-bold mt-4 mb-2'>FAPAS RELAXED KOI TEE</Link>
                <div className=''>
                    <span className='font-medium mr-2'>279.0000đ</span>
                    <span className='text-[#707070] line-through'>310.0000đ</span>
                </div>
            </div>
        </div>
    )
}

export default CardItem