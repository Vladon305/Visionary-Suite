// app/components/LoginForm.tsx

'use client';

import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/AuthContext';

const LoginForm = () => {
  const { handleLogin, isLoading } = useAuth();
  const router = useRouter();

  const onFinish = async (values: { email: string; password: string }) => {
    const success = await handleLogin(values);
    if (success) {
      message.success('Login successful');
      router.push('/'); // Перенаправление на защищённую страницу
    } else {
      message.error('Login failed');
    }
  };

  return (
    <Form
      name='login'
      layout='vertical'
      onFinish={onFinish}
      style={{ maxWidth: '400px', margin: '0 auto' }}
    >
      <Form.Item
        label='Email'
        name='email'
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Password'
        name='password'
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit' loading={isLoading}>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
