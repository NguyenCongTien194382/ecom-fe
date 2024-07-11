import React from 'react'
import Link from 'next/link';
import { Layout, Avatar, Dropdown, MenuProps } from 'antd';
import { signOut, useSession } from 'next-auth/react';

import { SignOut } from "@phosphor-icons/react";

const { Header } = Layout;

const HeaderDashboard = () => {
  const { data: session, status } = useSession()
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <div className='flex items-center justify-center gap-3' onClick={() => signOut()}>
          <SignOut size={24} />
          <span className='text-lg'> Đăng xuất</span>
        </div>
      ),
    },
  ];


  return (
    <Header
      className='bg-white sticky flex items-center justify-between h-20'
    >
      <div className='font-bold text-xl'>Xin chào Admin</div>
      <Dropdown
        menu={{ items }}
        placement="bottomRight"
        trigger={['click']}
      >
        <Avatar
          className='cursor-pointer'
          alt='avatar'
          size={'large'}
          src='https://images.pexels.com/photos/719396/pexels-photo-719396.jpeg?auto=compress&cs=tinysrgb&w=600'
        />
      </Dropdown>
    </Header>
  )
}

export default HeaderDashboard