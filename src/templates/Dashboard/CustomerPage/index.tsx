'use client'

import React, { useState } from 'react'
import TableCustomer from '@/templates/Dashboard/CustomerPage/TableCustomer'
import ModalCreateUser from '@/templates/Dashboard/CustomerPage/ModalCreateUser'
import Filter from '@/templates/Dashboard/CustomerPage/Filter'
import { Button } from 'antd'

const CustomerPage = () => {
    const [countCustomer, setCountCustomer] = useState(0)
    const [showCreateUser, setShowCreateUser] = useState(false)

    return (
        <>
            <div className='flex items-center gap-3 mb-10'>
                <div className='font-semibold text-3xl'>
                    Danh sách khách hàng
                </div>
                <span className='border px-3 py-1 rounded-full'>{countCustomer}</span>
            </div>
            <div>
                <div>

                </div>
            </div>
            {/* <Filter /> */}
            <div className='mb-4'>
                <Button
                    onClick={() => setShowCreateUser(true)}
                >
                    Thêm khách hàng
                </Button>
            </div>
            <TableCustomer setCountCustomer={setCountCustomer} refreshData={showCreateUser} />
            <ModalCreateUser isOpen={showCreateUser} handleClose={() => setShowCreateUser(false)} />
        </>
    )
}

export default CustomerPage