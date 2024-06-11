import React from 'react';
import {
  MoneyCollectOutlined,
  UnorderedListOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';

export const sidebarItems = [
  {
    key: `task-master`,
    icon: React.createElement(UnorderedListOutlined),
    label: `TaskMaster`,
  },
  {
    key: `econo-eye`,
    icon: React.createElement(MoneyCollectOutlined),
    label: `EconoEye`,
  },
  {
    key: `dream-time`,
    icon: React.createElement(ClockCircleOutlined),
    label: `DreamTime`,
  },
];
