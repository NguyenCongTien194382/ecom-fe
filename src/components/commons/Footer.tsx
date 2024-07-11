'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { TiSocialFacebook, TiSocialGooglePlus, TiSocialTwitter, TiSocialInstagram } from "react-icons/ti";
import { IoIosSend, IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import Container from '../ui/Container';
import IconSocial from '../ui/IconSocial'

const Footer = () => {
    return (
        <footer className='mt-10'>
            <div className='bg-primary'>
                <Container>
                    <div className='flex justify-between flex-col md:flex-row pt-10 pb-5 gap-8'>
                        <div className='w-full md:w-1/2'>
                            <Image
                                src="/assets/images/logo.webp"
                                width={176}
                                height={20}
                                alt="logo"
                                style={{ width: '176px', height: '20px' }}
                            />
                            <div className='ml-3 my-8'>
                                <div className='mb-8'>
                                    <div className='flex items-center gap-2 text-base'>
                                        <IoLocationSharp />
                                        <span className='cursor-pointer hover:text-white'>Định Công, Hoàng Mai, Hà Nội</span>
                                    </div>
                                    <div className='flex items-center gap-2 text-base'>
                                        <IoLocationSharp />
                                        <span className='cursor-pointer hover:text-white'>Bạch Mai, Hà Nội</span>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex items-center gap-2 text-base'>
                                        <FaPhoneAlt />
                                        <span className='cursor-pointer hover:text-white'>0862330289</span>
                                    </div>
                                    <div className='flex items-center gap-2 text-base'>
                                        <IoMdMail />
                                        <span className='cursor-pointer hover:text-white'>admin@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full md:w-1/2'>
                            <div className='mb-10'>
                                <div className='uppercase text-xl font-bold mb-3'>
                                    Đăng ký nhận tin
                                </div>
                                <div className='flex w-full'>
                                    <input
                                        type="text"
                                        placeholder='Nhập email của bạn...'
                                        className='w-full px-4 py-2 outline-none'
                                    />
                                    <button className='flex items-center justify-center w-11 bg-white'>
                                        <IoIosSend />
                                    </button>
                                </div>
                            </div>
                            <div className=''>
                                <div className='uppercase text-xl font-bold mb-3'>
                                    Kết nối với chúng tôi
                                </div>
                                <div className='flex gap-1'>
                                    <IconSocial>
                                        <TiSocialFacebook />
                                    </IconSocial>
                                    <IconSocial>
                                        <TiSocialGooglePlus />
                                    </IconSocial>
                                    <IconSocial>
                                        <TiSocialTwitter />
                                    </IconSocial>
                                    <IconSocial>
                                        <TiSocialInstagram />
                                    </IconSocial>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className='bg-black'>
                <Container>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-1 py-4'>
                        <Link
                            href=""
                            className='text-sm text-[#ebb40a]'>
                            Hướng dẫn mua hàng
                        </Link>
                        <Link
                            href=""
                            className='text-sm text-[#ebb40a]'>
                            Hình thức thanh toán
                        </Link>
                        <Link
                            href=""
                            className='text-sm text-[#ebb40a]'>
                            Chính sách giao hàng
                        </Link>
                        <Link
                            href=""
                            className='text-sm text-[#ebb40a]'>
                            Chính sách bảo hành đổi trả
                        </Link>
                        <Link
                            href=""
                            className='text-sm text-[#ebb40a]'>
                            Chính sách bảo mật thông tin
                        </Link>
                    </div>
                </Container>
            </div>
            <div className='bg-primary py-3 text-center'>
                Bản quyền thuộc về NCT
            </div>
        </footer>
    )
}

export default Footer