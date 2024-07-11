'use client'

import React, { useState } from 'react'
import Link from 'next/link';
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react"
import { validateEmail } from '@/utils/validation'
import Input from './ui/Input';
import Button from './ui/Button';
import Container from '@/components/ui/Container'

const Login = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [errorForm, setErrorForm] = useState<any>({})

    const handleLogin = async () => {
        const isValid = handleValidate()
        if (isValid) {
            const res = await signIn("credentials", {
                email: email,
                password: password,
                redirect: true,
                callbackUrl: '/'
            })
        }
    }

    const handleValidate = () => {
        let isValid = true;
        const errors: any = {};
        if (password === '') {
            errors.password = 'Vui lòng nhập mật khẩu'
            isValid = false
        }
        if (!validateEmail(email)) {
            errors.email = 'Địa chỉ email không hợp lệ'
        }
        if (Object.keys(errors).length > 0) {
            setErrorForm(errors);
            isValid = false;
        } else {
            setErrorForm({});
        }
        return isValid;
    }

    return (
        <Container >
            <h2 className='uppercase font-bold pb-4 mb-5 border-b border-black border-solid'>
                Đăng nhập tài khoản
            </h2>
            <div className='flex flex-col gap-8 md:w-1/2 md:ml-[25%]'>
                <div className='text-lg font-medium text-[#323c3f]'>KHÁCH HÀNG ĐĂNG NHẬP</div>
                <div className='font-semibold text-sm'>Nếu bạn có một tài khoản, xin vui lòng đăng nhập</div>
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
                <div className='flex flex-col gap-4'>
                    <Input
                        type="text"
                        label='Email *'
                        placeholder="Email"
                        autoFocus={true}
                        value={email}
                        onChange={setEmail}
                        messageError={errorForm.email}
                    />
                    <Input
                        type="password"
                        label='Mật khẩu *'
                        placeholder="Mật khẩu"
                        value={password}
                        onChange={setPassword}
                        messageError={errorForm.password}
                    />
                    <p className=''>
                        Nếu chưa có tài khoản, click vào <Link href="/register" className='font-bold'>đây</Link> để đăng ký.
                    </p>
                </div>
                <div className='flex items-center gap-2'>
                    <Button
                        onClick={handleLogin}
                    >
                        Đăng nhập
                    </Button>
                    <Link href="" className='ml-2 font-medium'>Mất mật khẩu?</Link>
                </div>
            </div>
        </Container>
    )
}

export default Login