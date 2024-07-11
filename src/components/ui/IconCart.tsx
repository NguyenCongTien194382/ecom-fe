import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CiShoppingCart } from "react-icons/ci";

const IconCart = () => {
    return (
        <div className='relative cursor-pointer h-full items-center flex'>
            <CiShoppingCart size={28} />
            <div className='absolute w-3 h-3 rounded-[50%] bg-[#ff0000] text-[#fff] text-xs flex items-center justify-center top-2 left-4'>
                6
            </div>
            <div className='hidden absolute top-full right-0 bg-white'>
                <div className='w-80 h-8 max-h-[582px] p-1'>
                    <div className='max-h-[260px] overflow-y-auto'>
                        <div>
                            <Link href="">
                                <Image
                                    src="/profile.png"
                                    width={500}
                                    height={500}
                                    alt="product"
                                />
                            </Link>
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default IconCart;
