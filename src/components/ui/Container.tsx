import React, { FC, ReactNode } from 'react'

interface Props {
    children: ReactNode
}
const Container: FC<Props> = ({ children }) => {
    return (
        <div className='w-full xl:w-large h-full mx-auto px-4'>
            {children}
        </div>
    )
}

export default Container