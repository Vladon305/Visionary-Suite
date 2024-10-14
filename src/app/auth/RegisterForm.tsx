// app/components/RegisterForm.tsx

'use client';

import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/AuthContext';

const RegisterForm = () => {
  const { handleRegister, isLoading } = useAuth();
  const router = useRouter();

  const onFinish = async (values: { email: string; password: string }) => {
    const success = await handleRegister(values);
    if (success) {
      message.success('Registration successful');
      router.push('/');
    } else {
      message.error('Registration failed');
    }
  };

  return (
    <Form
      name='register'
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
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
