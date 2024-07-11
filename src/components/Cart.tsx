import React from 'react'
import Container from './ui/Container'

const Cart = () => {
    return (
        <div>
            <Container>
                {/* <div className='text-[#333] font-semibold min-h-80 '>Không có sản phẩm nào. Quay lại cửa hàng để tiếp tục mua sắm.</div> */}
                <h2 className='uppercase text-xl font-semibold mb-4 mt-8 hover:opacity-60'>
                    Giỏ hàng của bạn
                </h2>
                <div className='border border-[#ebebeb]'>
                    <div className='text-sm font-medium'>
                        {/* <div className='text-sm font-medium border border-[#ebebeb]'> */}
                        <div className='cart-border inline-block p-3 text-center w-[18%]'>Ảnh sản phẩm</div>
                        <div className='cart-border inline-block p-3 text-center w-[32%]'>Tên sản phẩm</div>
                        <div className='cart-border inline-block p-3 text-center w-[17%]'>Đơn giá</div>
                        <div className='cart-border inline-block p-3 text-center w-[14%]'>Số lượng</div>
                        <div className='cart-border inline-block p-3 text-center w-[14%]'>Thành tiền</div>
                        <div className='cart-border inline-block p-3 text-center w-[5%]'>Xoá</div>
                    </div>
                    <div>
                        <div className='text-sm font-medium'>
                            <div className='cart-border inline-block p-3 text-center w-[18%]'>Ảnh sản phẩm</div>
                            <div className='cart-border inline-block p-3 text-center w-[32%]'>Tên sản phẩm</div>
                            <div className='cart-border inline-block p-3 text-center w-[17%]'>Đơn giá</div>
                            <div className='cart-border inline-block p-3 text-center w-[14%]'>Số lượng</div>
                            <div className='cart-border inline-block p-3 text-center w-[14%]'>Thành tiền</div>
                            <div className='cart-border inline-block p-3 text-center w-[5%]'>Xoá</div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Cart