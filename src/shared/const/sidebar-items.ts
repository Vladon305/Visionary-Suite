import React from 'react';
import { MenuProps } from 'antd';
import {
  MoneyCollectOutlined,
  UnorderedListOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';

export const sidebarItems: MenuProps['items'] = [
  ClockCircleOutlined,
  MoneyCollectOutlined,
  UnorderedListOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
  };
});
