import React, { FC } from 'react'
import ItemMenu from './ItemMenu'

interface Props {
    items: any
}

const Menu: FC<Props> = ({ items }) => {
    return (
        <div
            className='menu absolute top-14 min-w-64 left-0 w-40 z-10 bg-white'
            style={{ boxShadow: '0 6px 12px rgba(0,0,0,0.175)' }}
        >
            {items && items.length > 0 && (
                items.map((item: any, index: any) => {
                    return (
                        <ItemMenu
                            key={index}
                            label={item.label}
                            items={item.items || []}
                        />
                    )
                })
            )}
        </div>
    )
}

export default Menu