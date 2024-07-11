'use client'

import { Dropdown, Avatar, Tag, Tooltip, Table, TableProps, Image } from 'antd';
import React from 'react'
import moment from 'moment'

import ModalConfirm from '@/components/ui/ModalConfirm'

import { DotsThree, Trash, PencilSimpleLine } from "@phosphor-icons/react";

const TableProduct = ({refreshData,setCountProduct}) => {
    const [listProduct, setListProduct] = React.useState([])
    const [showModalDelete, setShowModalDelete] = React.useState(false)
    const [productIdToDelete, setProductIdToDelete] = React.useState(null)

    React.useEffect(() => {
        handleGetListProduct()
    }, [refreshData])

    const items = (product: any): MenuProps['items'] => [
        {
            key: '1',
            label: (
                <div className='flex items-center gap-3' onClick={() => {
                    setProductIdToDelete(product.id)
                    setShowModalDelete(true)
                }}>
                    <Trash size={20} />
                    <span className='text-lg'>Xoá</span>
                </div>
            ),
        },
        {
            key: '2',
            label: (
                <div className='flex items-center gap-3' onClick={() => {
                    setUserEdit(user)
                    setShowModalEdit(true)
                }}>
                    <PencilSimpleLine size={20} />
                    <span className='text-lg'>Chỉnh sửa</span>
                </div>
            ),
        },
    ];


    const columns: TableProps['columns'] = [
        {
            title: 'Sản phẩm',
            dataIndex: 'product',
            render: (value, record) => (
                <Tooltip placement="topLeft" title='Xem chi tiết thông tin sản phẩm'>
                    <div className='flex items-center gap-3 cursor-pointer'>
                    <Image
    width={100}
    src={`http://localhost:9000/images/product/${record.urlImage[0]}`}
  />
                        <div className='flex flex-col'>
                            <span className='font-medium'>{record.name}</span>
                            {/* <span>0862026933</span> */}
                        </div>
                    </div>
                </Tooltip>
            ),
        },
        {
            title: 'Danh mục',
            dataIndex: 'rank',
            render: (value, record) => (
                <Tag
                color="#2db7f5"
                className='text-base px-3 py-1'
            >
                {record.category}
            </Tag>
            )
        },
        {
            title: 'Ngày tạo',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (value, record) => (
                <div>{moment(new Date(record.createdAt)).format('DD/MM/YYYY')}</div>
            )
        },
        {
            title: '',
            render: (value, record) => (
                <Dropdown
                    menu={{ items: items(record) }}
                    placement="bottomRight"
                    trigger={['click']}
                >
                    <DotsThree size={24} className='cursor-pointer' />
                </Dropdown>
            )
        }
    ];

    const handleGetListProduct = async () => {
        const res = await fetch('http://localhost:9000/api/product/list', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await res.json();
        if (data?.data?.products) {
            setListProduct(data?.data?.products)
            setCountProduct(data?.data?.products.length)
        }
    }

    const handleDeleteProduct = async () => {
        if (!productIdToDelete) return;

        const res = await fetch(`http://localhost:9000/api/product/${productIdToDelete}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await res.json();
        if (data?.data) {
            handleGetListProduct()
            setShowModalDelete(false)
        }
    }

    return (
        <div>
            <Table
                columns={columns}
                dataSource={listProduct}
                pagination={{
                    defaultPageSize: 10,
                    showSizeChanger: true,
                }
                }
            />
            <ModalConfirm
                isOpen={showModalDelete}
                handleClose={() => setShowModalDelete(false)}
                handleConfirm={handleDeleteProduct}
                title='Bạn có muốn xóa sản phẩm này không?'
                description='Hành động này không thể hoàn tác.'
            />
        </div>
    )
}

export default TableProduct