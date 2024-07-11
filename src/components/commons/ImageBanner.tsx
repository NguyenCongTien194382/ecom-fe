import React from 'react'
import Image from 'next/image'
import Container from '../ui/Container'

const ImageBanner = () => {
    return (
        <Container>
            <div className='truncate'>
                <Image
                    src="/assets/images/banner.webp"
                    alt="Picture of the author"
                    width={5000}
                    height={5000}
                    className='mt-8 hover:scale-105 transition-all duration-300 cursor-pointer'
                />
            </div>
        </Container>
    )
}

export default ImageBanner