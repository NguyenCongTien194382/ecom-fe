'use client'

import React from 'react'
import { Button, Space } from 'antd'
import TableProduct from '@/templates/Dashboard/ProductPage/TableProduct'
import ModalCreateProduct from '@/templates/Dashboard/ProductPage/ModalCreateProduct'

import { Plus } from '@phosphor-icons/react'

const ProductPage = () => {
  return (
    <>
      <Space
        direction='vertical'
        size='large'
        className='w-full'
      >
        <div className='flex items-center gap-3'>
          <div className='font-semibold text-3xl'>
            Danh sách sản phẩm
          </div>
          <span className='border px-3 py-1 rounded-full'>400</span>
        </div>
        <div>
          <Button
            className='flex items-center gap-2 bg-white'
            size='large'
          >
            <Plus size={18} />
            <span>Tạo sản phẩm</span>
          </Button>
        </div>
        <TableProduct />
      </Space>
      {/* <ModalCreateProduct /> */}
    </>
  )
}

export default ProductPage