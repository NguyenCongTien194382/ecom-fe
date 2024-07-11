import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Container from '../ui/Container';
import SubHeader from './SubHeader';
import IconCart from '../ui/IconCart';
import IconSearch from '../ui/IconSearch';
import IconUser from '../ui/IconUser';

const Header = () => {
    return (
        <>
            <div className='h-[48px] bg-primary'>
                <Container>
                    <div className='h-full flex justify-between items-center'>
                        <Link href="/">
                            <Image
                                src="/assets/images/logo.webp"
                                width={176}
                                height={20}
                                alt="logo"
                                style={{ width: '176px', height: '20px' }}
                            />

                        </Link>
                        <div className='flex gap-2 h-full items-center'>
                            <IconSearch />
                            <IconUser />
                            <IconCart />
                        </div>
                    </div >
                </Container>
            </div>
            <SubHeader />
        </>
    )
}

export default Header