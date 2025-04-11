import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, message} from 'antd';
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';

const AdminLogin = () => {
  const handleFinish = async values => {

    try {
      const response = await fetch('admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if (response.ok) {
        const data = await response.json();

        // 后端会返回admin
        const { admin } = data;
  
        // 保存到localStorage，维持登录状态 （这个有时间要改掉，容易伪造）
        localStorage.setItem('admin', JSON.stringify(admin));
  
        message.success('log in successfully');
      }
      
    } catch (error) {
      console.error(error);
    }

  };

  return (
    <Form
      name="login"
      initialValues={{ remember: true }}
      style={{ maxWidth: 360 }}
      onFinish={handleFinish}
      size='large'
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AdminLogin; 