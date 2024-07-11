import React, { useEffect } from 'react'
import Breadcrumb from '@/components/commons/Breadcrumb'
import Cart from '@/components/Cart'

const page = () => {
    return (
        <div>
            <Breadcrumb />
            <Cart />
        </div>
    )
}

export default page