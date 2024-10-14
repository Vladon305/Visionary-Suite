'use client';

import React from 'react';
import { Tabs, TabsProps } from 'antd';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthPage = () => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Login',
      children: <LoginForm />,
    },
    {
      key: '2',
      label: 'Register',
      children: <RegisterForm />,
    },
  ];

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto' }}>
      <Tabs defaultActiveKey='1' centered items={items} />
    </div>
  );
};

export default AuthPage;
