import React from 'react'
import { Modal, Space } from 'antd'
import Input from '@/components/ui/Input'
import UploadListImage from '@/components/ui/UploadListImage'
import TreeSelect from '@/components/ui/TreeSelect'
import Ckeditor from '@/components/ui/Ckeditor'

const ModalCreateProduct = () => {
    return (
        <Modal
            open={true}
            width={600}
        >
            <div>
                <Space
                    direction='vertical'
                    size={12}
                    className='w-full'
                >
                    <UploadListImage
                        label='Ảnh sản phẩm'
                    />
                    <Input
                        label='Tên sản phẩm'
                    />
                    <TreeSelect
                        label='Loại sản phẩm'
                    />
                    <Ckeditor
                        label='Mô tả'
                    />
                </Space>
            </div>
        </Modal>
    )
}

export default ModalCreateProduct