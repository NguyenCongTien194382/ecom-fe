'use client'

import React, { useState } from 'react'
import Link from 'next/link';
import { CiUser } from "react-icons/ci";
import { signOut, useSession } from 'next-auth/react';


const IconUser = () => {
    const { data: session, status } = useSession()
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='relative' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <CiUser
                size={28}
                className='cursor-pointer'
            />
            {isHovered && (
                <div className='absolute top-full left-0 w-48 z-10 bg-white' style={{ boxShadow: '0 6px 12px rgba(0,0,0,0.175)' }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    {session ? (
                        <>
                            <div className='ml-2 px-3 py-1 text-[#333] font-medium cursor-pointer border-b border-[#ddd] border-dashed hover:opacity-90'>
                                Tài khoản của tôi
                            </div>
                            <div
                                className='ml-2 px-3 py-1 text-[#333] font-medium cursor-pointer border-b border-[#ddd] border-dashed hover:opacity-90'
                                onClick={() => signOut()}
                            >
                                Đăng xuất
                            </div>
                        </>
                    ) : (
                        <>
                            <Link href="/login">
                                <div className='ml-2 px-3 py-1 text-[#333] font-medium cursor-pointer border-b border-[#ddd] border-dashed hover:opacity-90'>
                                    Đăng nhập
                                </div>
                            </Link>
                            <Link href="/register">
                                <div className='ml-2 px-3 py-1 text-[#333] font-medium hover:opacity-90'>
                                    Đăng ký
                                </div>
                            </Link>
                        </>
                    )}
                </div >
            )}
        </div >
    )
}

export default IconUser
