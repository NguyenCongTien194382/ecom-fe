import React, { useState } from 'react'
import type { SyntheticEvent } from 'react';

import { TreeSelect as TreeSelectAntd } from 'antd';

const treeData = [
    {
        value: 'parent 1',
        title: 'parent 1',
        children: [
            {
                value: 'parent 1-0',
                title: 'parent 1-0',
                children: [
                    {
                        value: 'leaf1',
                        title: 'leaf1',
                    },
                    {
                        value: 'leaf2',
                        title: 'leaf2',
                    },
                    {
                        value: 'leaf3',
                        title: 'leaf3',
                    },
                    {
                        value: 'leaf4',
                        title: 'leaf4',
                    },
                    {
                        value: 'leaf5',
                        title: 'leaf5',
                    },
                    {
                        value: 'leaf6',
                        title: 'leaf6',
                    },
                ],
            },
            {
                value: 'parent 1-1',
                title: 'parent 1-1',
                children: [
                    {
                        value: 'leaf11',
                        title: <b style={{ color: '#08c' }}>leaf11</b>,
                    },
                ],
            },
        ],
    },
];

interface Props {
    label?: string;
}

const TreeSelect: React.FC<Props> = ({ label }) => {
    const [value, setValue] = useState<string>();

    const onChange = (newValue: string) => {
        setValue(newValue);
    };

    const onPopupScroll = (e: SyntheticEvent) => {
        console.log('onPopupScroll', e);
    };

    return (
        <>
            {label && (
                <label className='block font-bold mb-1'>{label}</label>
            )}
            <TreeSelectAntd
                showSearch
                value={value}
                className='w-full'
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                placeholder="Please select"
                suffixIcon={false}
                treeDefaultExpandAll
                onChange={onChange}
                treeData={treeData}
                onPopupScroll={onPopupScroll}
            />
        </>
    );
}

export default TreeSelect