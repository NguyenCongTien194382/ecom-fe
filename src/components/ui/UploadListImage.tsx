/* eslint-disable jsx-a11y/alt-text */
'use client'

import React, { useState } from 'react'
import { Image, Upload } from 'antd';
import type { GetProp, UploadFile, UploadProps } from 'antd';

import { UploadSimple } from '@phosphor-icons/react';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

interface Props {
    label?: string;
}

const getBase64 = (file: FileType): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

const UploadListImage: React.FC<Props> = ({ label }) => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as FileType);
        }

        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
    };

    const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
        setFileList(newFileList);

    return (
        <>
            {label && (
                <label className='block font-bold mb-1'>{label}</label>
            )}
            <Upload
                fileList={fileList}
                listType="picture-card"
                onPreview={handlePreview}
                onChange={handleChange}
            >
                <button className='flex items-center flex-col' type="button">
                    <UploadSimple size={24} />
                    <span>Tải hình ảnh</span>
                </button>
            </Upload>
            {previewImage && (
                <Image
                    wrapperStyle={{ display: 'none' }}
                    preview={{
                        visible: previewOpen,
                        onVisibleChange: (visible) => setPreviewOpen(visible),
                        afterOpenChange: (visible) => !visible && setPreviewImage(''),
                    }}
                    src={previewImage}
                />
            )}
        </>
    );
}

export default UploadListImage
