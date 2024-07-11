'use client'

import React, { useState } from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { cssTransition, toast } from "react-toastify"
import Input from '@/components/ui/Input'

const ModalCreateUser = ({ isOpen, handleClose }: any) => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
            toast.success("Tạo tài khoản thành công")
            handleClose()
        }
        else {
            toast.error(data.error.message)
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={handleClose}
            size='xl'
        >
            <ModalContent className='p-4'>
                <ModalBody>
                    <div className='text-center text-2xl font-semibold'>
                        Tạo tài khoản khách hàng
                    </div>
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
                        <Button onClick={handleSubmit}>Tạo tài khoản</Button>
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default ModalCreateUser