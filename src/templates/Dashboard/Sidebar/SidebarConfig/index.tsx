import { MenuProps } from "antd";

import { House, Tag, Bag, User } from "@phosphor-icons/react";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        className: 'text-white'
    } as MenuItem;
}

export const NAVIGATION: MenuItem[] = [
    getItem('Trang chủ', 'home', <House size={20} />),
    getItem('Dang mục sản phẩm', 'category', <Tag size={20} />),
    getItem('Dang sách sản phẩm', 'product', <Bag size={20} />),
    getItem('Khách hàng', 'customer', <User size={20} />),
];