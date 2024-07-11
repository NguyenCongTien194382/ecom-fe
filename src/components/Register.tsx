'use client'

import React, { useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { TiArrowBack } from "react-icons/ti";
import { useSession, signIn, signOut } from "next-auth/react"
import { cssTransition, toast } from "react-toastify"
import Input from './ui/Input';
import Button from './ui/Button';
import Container from '@/components/ui/Container';

const Register = () => {
    const router = useRouter();
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const res = await fetch('http://localhost:9000/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userName: userName, email, password }),
        });

        const data = await res.json();
        if (!data.error) {
            toast.success("Đăng ký tài khoản thành công")
            router.push('/login');
        }
        else {
            toast.error(data.error.message)
        }
    };

    return (
        <Container>
            <h2 className='uppercase font-bold pb-4 mb-5 border-b border-black border-solid'>
                Đăng ký tài khoản
            </h2>
            <div className='flex flex-col gap-8 md:w-1/2 md:ml-[25%]'>
                <div className='text-lg font-medium text-[#323c3f]'>THÔNG TIN CÁ NHÂN</div>
                <div className='flex flex-col gap-4'>
                    <Input
                        type="text"
                        label='Họ và tên *'
                        placeholder="Họ và tên"
                        autoFocus={true}
                        onChange={setUserName}
                    />
                    <Input
                        type="text"
                        label='Email *'
                        placeholder="Email hoặc số điện thoại"
                        autoFocus={true}
                        onChange={setEmail}
                    />
                    <Input
                        type="password"
                        label='Mật khẩu *'
                        placeholder="Mật khẩu"
                        onChange={setPassword}
                    />
                    <Input
                        type="password"
                        label='Nhập lại mật khẩu *'
                        placeholder="Mật khẩu"
                        onChange={setConfirmPassword}
                    />
                    <p className=''>
                        Nếu đã có tài khoản, click vào <Link href="/login" className='font-bold'>đây</Link> để đăng nhập.
                    </p>
                    <div className='flex items-center justify-between'>
                        <Button onClick={handleSubmit}>Đăng ký</Button>
                        <Button
                            Component='a'
                            href='/login'
                        >
                            <TiArrowBack />
                            Quay lại
                        </Button>
                    </div>
                </div>
                <div className='text-lg font-medium text-[#323c3f]'>ĐĂNG NHẬP VỚI SOCIAL</div>
                <div className='flex gap-4'>
                    <div
                        className='inline-flex rounded-sm gap-2 px-5 items-center cursor-pointer text-white bg-[#3b5998]'
                        onClick={() => signIn('facebook', { callbackUrl: '/' })}
                    >
                        <FaFacebookF className='' />
                        <span className='pl-3 py-2 border-l border-[#cccccc29]'>Facebook</span>
                    </div>
                    <div
                        className='inline-flex rounded-sm gap-2 px-5 items-center cursor-pointer text-white bg-[#e14b33]'
                        onClick={() => signIn('google', { callbackUrl: '/' })}
                    >
                        <FaGoogle />
                        <span className='pl-3 py-2 border-l border-[#cccccc29]'>Google</span>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Register