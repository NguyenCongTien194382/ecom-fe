'use client'

import React from 'react'
import { Layout } from 'antd';
import SidebarDashboard from '@/templates/Dashboard/Sidebar'
import HeaderDashboard from '@/templates/Dashboard/Layout/Header'

interface LayoutDashboardProps {
    children: React.ReactNode
}

const { Content } = Layout;

const LayoutDashboard: React.FC<LayoutDashboardProps> = ({ children }) => {

    return (
        <Layout
            style={{ minHeight: '100vh' }}
        >
            <SidebarDashboard />
            <Layout>
                <HeaderDashboard />
                <Content
                    style={{ padding: '24px 50px 0', overflow: 'auto' }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    )
}

export default LayoutDashboard