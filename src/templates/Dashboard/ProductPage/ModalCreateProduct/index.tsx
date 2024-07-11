import React, { useState } from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import Input from '@/components/ui/Input'
import UploadListImage from '@/components/ui/UploadListImage'
import TreeSelect from '@/components/ui/TreeSelect'
import Ckeditor from '@/components/ui/Ckeditor'
import { UploadFile } from 'antd';
import { cssTransition, toast } from "react-toastify"

const ModalCreateProduct = ({ isOpen, handleClose }: any) => {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('Quần áo')
    const [description, setdescription] = useState('')
    const [imageList, setImageList] = useState<UploadFile[]>([]);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const urlImage = imageList.map((image) => image.response)

        const res = await fetch('http://localhost:9000/api/product/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                name,
                category,
                description,
                urlImage,
             }),
        });

        const data = await res.json();
        if (!data.error) {
            toast.success("Tạo sản phẩm thành công")
            handleClose()
        }
        else {
            toast.error(data.error.message)
        }
    };

    console.log(imageList)
    return (
        <Modal
            isOpen={isOpen}
            onClose={handleClose}
            size='xl'
        >
            <ModalContent className='p-4'>
                <ModalBody>
                    <div className='text-center text-2xl font-semibold'>
                        Tạo sản phẩm
                    </div>
                    <div className='flex flex-col gap-4'>
                        <UploadListImage
                            label='Ảnh sản phẩm'
                            onChange={setImageList}
                        />
                        <Input
                            label='Tên sản phẩm'
                            placeholder="Tên sản phẩm"
                            onChange={setName}
                        />
                        {/* <TreeSelect
                            label='Loại sản phẩm'
                        /> */}
                        <Ckeditor
                            label='Mô tả'
                            onChange={setdescription}
                        />
                        <Button onClick={handleSubmit}>Tạo sản phẩm</Button>
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default ModalCreateProduct