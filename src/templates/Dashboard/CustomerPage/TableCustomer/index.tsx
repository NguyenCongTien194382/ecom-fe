'use client'

import { Dropdown, Avatar, Tag, Tooltip, Table, TableProps, MenuProps } from 'antd';
import React from 'react'
import moment from 'moment'

import ModalConfirm from '@/components/ui/ModalConfirm'
import ModalEditUser from '@/templates/Dashboard/CustomerPage/ModalEditUser'

import { DotsThree, Trash, PencilSimpleLine } from "@phosphor-icons/react";

const TableCustomer = ({ setCountCustomer, refreshData }: any) => {
    const [listCustomer, setListCustomer] = React.useState([])
    const [showModalDelete, setShowModalDelete] = React.useState(false)
    const [showModalEdit, setShowModalEdit] = React.useState(false)
    const [customerIdToDelete, setCustomerIdToDelete] = React.useState(null)
    const [userEdit, setUserEdit] = React.useState(null)

    const items = (user: any): MenuProps['items'] => [
        {
            key: '1',
            label: (
                <div className='flex items-center gap-3' onClick={() => {
                    setCustomerIdToDelete(user._id)
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
            title: 'Khách hàng',
            dataIndex: 'customer',
            key: 'customer',
            render: (value, record) => (
                <Tooltip placement="topLeft" title='Xem chi tiết thông tin khách hàng'>
                    <div className='flex items-center gap-3 cursor-pointer'>
                        <Avatar
                            className='cursor-pointer'
                            alt='avatar'
                            size={52}
                            src={record.avatarUrl}
                        />
                        <div className='flex flex-col'>
                            <span className='font-medium'>{record.userName}</span>
                            <span>{record.email}</span>
                        </div>
                    </div>
                </Tooltip>
            ),
        },
        {
            title: 'Hạng thẻ',
            dataIndex: 'rank',
            render: (value, record) => (
                <Tooltip placement="topLeft" title='Hệ thống tự động cập nhật hạng thẻ'>
                    <Tag
                        color="#2db7f5"
                        className='text-base px-3 py-1'
                    >
                        Hạng Member
                    </Tag>
                </Tooltip>
            )
        },
        {
            title: 'Loại',
            dataIndex: 'platform',
            key: 'platform',
            render: (value, record) => (
                <div>{record.authType}</div>
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

    React.useEffect(() => {
        handleGetListCustomer()
    }, [refreshData])

    const handleGetListCustomer = async () => {
        const res = await fetch('http://localhost:9000/api/user/list', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await res.json();
        if (data?.data?.users) {
            setListCustomer(data?.data?.users)
            setCountCustomer(data?.data?.users.length)
        }
    }

    const handleDeleteCustomer = async () => {
        if (!customerIdToDelete) return;

        const res = await fetch(`http://localhost:9000/api/user/${customerIdToDelete}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await res.json();
        if (data?.data) {
            handleGetListCustomer()
            setShowModalDelete(false)
        }
    }

    return (
        <div>
            <Table
                columns={columns}
                dataSource={listCustomer}
                pagination={{
                    defaultPageSize: 10,
                    showSizeChanger: true,
                }}
            />
            <ModalConfirm
                isOpen={showModalDelete}
                handleClose={() => setShowModalDelete(false)}
                handleConfirm={handleDeleteCustomer}
                title='Bạn có muốn xóa khách hàng này không?'
                description='Hành động này không thể hoàn tác.'
            />
            {/* <ModalEditUser
                isOpen={showModalEdit}
                handleClose={() => setShowModalEdit(false)}
            /> */}
        </div>
    )
}

export default TableCustomer
