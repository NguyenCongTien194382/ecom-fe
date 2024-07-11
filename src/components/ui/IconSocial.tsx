import React, { FC, ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const IconSocial: FC<Props> = ({ children }) => {

    return (
        <div className='flex items-center justify-center text-3xl w-11 h-11 rounded-[50%] bg-white cursor-pointer'>
            <div className="rotate-icon">{children}</div>
        </div>
    )
}

export default IconSocial