'use client'

import React, { useState } from 'react'
import { Button, Drawer, Select, Space, DatePicker } from 'antd';
import { RANK_CUSTOMER } from '@/constant';

const { RangePicker } = DatePicker;

const Filter = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button type="primary" onClick={showDrawer}>
                Open
            </Button>
            <Drawer
                title="Bộ lọc"
                onClose={onClose}
                open={open}
            >
                <Space direction="vertical">
                    <div>
                        <div className='font-medium mb-1'>Hạng thẻ</div>
                        <Select
                            showSearch
                            placeholder="Lựa chọn"
                            optionFilterProp="children"
                            options={RANK_CUSTOMER}
                            className='w-full'
                        />
                    </div>
                    <RangePicker
                        renderExtraFooter={() => 'extra footer'}
                    />
                </Space>
            </Drawer>
        </>
    );
}

export default Filter