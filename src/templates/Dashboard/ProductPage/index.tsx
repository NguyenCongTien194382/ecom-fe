'use client'

import React, { useState } from 'react'
import { Button, Space } from 'antd'
import TableProduct from '@/templates/Dashboard/ProductPage/TableProduct'
import ModalCreateProduct from '@/templates/Dashboard/ProductPage/ModalCreateProduct'

import { Plus } from '@phosphor-icons/react'

const ProductPage = () => {
  const [showCreateProduct, setShowCreateProduct] = useState(false)
  const [countProduct, setCountProduct] = useState(0)
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
          <span className='border px-3 py-1 rounded-full'>{countProduct}</span>
        </div>
        <div>
          <Button
            className='flex items-center gap-2 bg-white'
            size='large'
            onClick={() => setShowCreateProduct(true)}
          >
            <Plus size={18} />
            <span>Tạo sản phẩm</span>
          </Button>
        </div>
        <TableProduct refreshData={showCreateProduct} setCountProduct={setCountProduct}/>
      </Space>
      <ModalCreateProduct
        isOpen={showCreateProduct}
        handleClose={() => setShowCreateProduct(false)}
      />
    </>
  )
}

export default ProductPage