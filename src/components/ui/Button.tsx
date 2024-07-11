import React, { ButtonHTMLAttributes, FC, JSXElementConstructor } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string
    Component?: string | JSXElementConstructor<any>
    onClick?: any
}

const Button: FC<Props> = (props) => {
    const { children, Component = 'button', href, onClick } = props;
    return (
        <Component
            href={href}
            className='flex items-center gap-1 bg-black text-white px-6 py-3 font-medium hover:bg-white hover:text-black border border-black transition-all'
            onClick={onClick}
        >
            {children}
        </Component>
    )
}

export default Button