/* eslint-disable jsx-a11y/alt-text */
'use client'

import React, { useState } from 'react'
import { Image, Upload, message } from 'antd';
import type { GetProp, UploadFile, UploadProps } from 'antd';

import { UploadSimple } from '@phosphor-icons/react';
import axios from 'axios';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

interface Props {
    label?: string;
    onChange?: any;
}

const getBase64 = (file: FileType): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

const UploadListImage: React.FC<Props> = ({ label, onChange }) => {
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

    const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        setFileList(newFileList);
        if (onChange) {
            onChange(newFileList);
        }
    };

    const handleUpload = async ({ file, onSuccess, onError }: any) => {
        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await axios.post('http://localhost:9000/api/product/upload-image', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            onSuccess(response.data.data.images[0]);
        } catch (error) {
            onError(error);
            message.error('Upload failed');
        }
    };

    return (
        <>
            {label && (
                <label className='block font-bold mb-1'>{label}</label>
            )}
            <Upload
                customRequest={handleUpload}
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

export default UploadListImage;
