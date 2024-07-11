'use client'

import { Dropdown, Avatar, Tag, Tooltip, Table, TableProps } from 'antd';
import React from 'react'

import { DotsThree } from "@phosphor-icons/react";

const TableProduct = () => {
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
                            src='https://images.pexels.com/photos/719396/pexels-photo-719396.jpeg?auto=compress&cs=tinysrgb&w=600'
                        />
                        <div className='flex flex-col'>
                            <span className='font-medium'>Nguyễn Công Tiến</span>
                            <span>0862026933</span>
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
            title: 'Ngày tạo',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (value, record) => (
                <div>19/04/2024</div>
            )
        },
        {
            title: '',
            render: (value, record) => (
                <Dropdown
                    // menu={{ items }}
                    placement="bottomRight"
                    trigger={['click']}
                >
                    <DotsThree size={24} className='cursor-pointer' />
                </Dropdown>
            )
        }
    ];
    const data = [{}];
    return (
        <div>
            <Table
                columns={columns}
                dataSource={data}
                pagination={{
                    defaultPageSize: 10,
                    showSizeChanger: true,
                }
                }
            />
        </div>
    )
}

export default TableProduct