'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { Layout, Menu } from 'antd';
import { NAVIGATION } from '@/templates/Dashboard/Sidebar/SidebarConfig';

const { Sider } = Layout;

const SidebarDashboard = () => {
    const router = useRouter();
    const [collapsed, setCollapsed] = useState(false);
    const [selectedKeys, setSelectedKeys] = useState<any>([]);

    const handleChangeActive = (item: any) => {
        router.push(`/dashboard/${item.key}`);
        setSelectedKeys([item.key]);
    }

    useEffect(() => {
        const key = location.pathname.split('/')[2];
        setSelectedKeys([key]);
    }, [])

    return (
        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            theme="light"
            width={400}
        >
            <div></div>
            <Menu
                theme="light"
                defaultSelectedKeys={['1']}
                selectedKeys={selectedKeys}
                mode="inline"
                items={NAVIGATION}
                onSelect={handleChangeActive}
            />
        </Sider>
    )
}

export default SidebarDashboard