'use client'

import React, { FC, useState } from 'react'
import Link from 'next/link';
import { RiArrowDropDownLine } from "react-icons/ri";
import Menu from './Menu';

interface Props {
    label: string
}


const DropdownHeader: FC<Props> = ({ label }) => {
    const items = [
        { id: 1, label: "Menu 1", items: [{ label: 'Submenu 1.3', items: [{ label: 'test' }] }, { label: 'Submenu 1.2' }, { label: 'Submenu 1.3' }] },
        { id: 2, label: "Menu 2", items: [] },
        { id: 3, label: "Menu 3", items: [{ label: 'Submenu 3.2' }, { label: 'Submenu 3.2' }] },
    ]

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='relative py-4' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <Link href="" className='flex items-center'>
                <span>{label}</span>
                <RiArrowDropDownLine size={24} />
            </Link>
            {isHovered && (
                <Menu
                    items={items}
                />
            )}
        </div>
    )
}

export default DropdownHeader