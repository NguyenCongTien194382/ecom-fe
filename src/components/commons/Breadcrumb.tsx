import React from 'react'
import Link from 'next/link'
import { RiArrowDropRightLine } from "react-icons/ri";
import Container from '../ui/Container';

const Breadcrumb = () => {
    return (
        <Container>
            <div className='flex items-center py-3 mb-5'>
                <Link href="/" className='text-[#333]'>Trang chủ</Link>
                <RiArrowDropRightLine size={24} />
                <span className='font-bold text-base'>Đăng nhập tài khoản</span>
            </div>
        </Container>
    )
}

export default Breadcrumb