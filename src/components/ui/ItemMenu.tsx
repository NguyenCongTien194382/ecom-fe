import React, { FC, useState } from 'react'
import Link from 'next/link'
import Menu from './Menu'
import { RiArrowDropRightLine } from "react-icons/ri";

interface Props {
    label: string;
    items?: any
}


const ItemMenu: FC<Props> = ({ label, items }) => {
    return (
        <div className='item-select relative'>
            <Link
                href=""
                className='flex items-center justify-between px-3 py-2 text-[#333] font-medium hover:bg-[#cccccc39]'
            >
                {label}
                {items && items.length > 0 && (
                    <RiArrowDropRightLine size={24} />
                )}
            </Link>
            {items && items.length > 0 && (
                <Menu
                    items={items}
                />
            )}
        </div>
    )
}

export default ItemMenu