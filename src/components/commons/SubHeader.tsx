'use client'

import React from 'react'
import Link from 'next/link'
import DropdownHeader from '../ui/DropdownHeader';

const SubHeader = () => {
    return (
        <div className='flex items-center justify-center gap-5 uppercase font-medium'>
            <Link href="" className='py-4'>NEW ARRIVAL</Link>
            <Link href="" className='py-4'>FLASH SALE</Link>
            <DropdownHeader
                label='SẢN PHẨM'
            />
            <Link href="" className='py-4'>TIN TỨC</Link>
            <Link href="" className='py-4'>HỆ THỐNG CỬA HÀNG</Link>
        </div>
    )
}

export default SubHeader