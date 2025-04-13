import React, { useState } from 'react';
import { Layout, Menu, theme, Table } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Content, Footer, Sider } = Layout;

const items = [
  { label: 'Dashboard', path: '/admin' },
  { label: 'Orders', path: '/admin/orders' },
  { label: 'Rooms', path: '/admin/rooms' },
].map((item, index) => ({
  key: String(index + 1),
  label: item.label,
  path: item.path,
}));

// 表格列定义
const columns = [
  {
    title: 'Order ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Customer',
    dataIndex: 'customer',
    key: 'customer',
  },
  {
    title: 'Check-In Date',
    dataIndex: 'checkIn',
    key: 'checkIn',
  },
  {
    title: 'Check-Out Date',
    dataIndex: 'checkOut',
    key: 'checkOut',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    render: (amount) => `¥ ${amount}`,
  },
];

const Orders = () => {
  const [orderData, setOrderData] = useState([]);

  async function fetchOrders() {
    try {
      const response = await fetch('/admin/orders');
      if (!response.ok) {
        throw new Error('Failed to fetch orders');
      }

      const data = await response.json();

      // 设置为真实房间数据
      setOrderData(data);

    } catch (error) {
      console.error(error);
    }
  }

  const navigate = useNavigate();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{minHeight: '100vh'}}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']} items={items} onClick={({key}) => {
          let item = items.find((i) => i.key === key);
          navigate(item.path);
        }}/>
      </Sider>
      <Layout>
        <Content style={{ margin: '24px 16px 0', flex: 1}}>
        <div
            style={{
              padding: 24,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              minHeight: '100%',
            }}
          >
            <Table
              columns={columns}
              dataSource={orderData_fake} // 后面换成真实数据
              pagination={{ pageSize: 12 }}
              rowKey="key"
            />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          CityU Hotel Admin System
        </Footer>
      </Layout>
    </Layout>

  );
};

export default Orders; 

// 模拟订单数据
const orderData_fake = [
  {
    key: '1',
    id: '1001',
    customer: 'John Doe',
    checkIn: '2025-04-01',
    checkOut: '2025-04-05',
    amount: 1200,
  },
  {
    key: '2',
    id: '1002',
    customer: 'Jane Smith',
    checkIn: '2025-04-03',
    checkOut: '2025-04-07',
    amount: 1500,
  },
  {
    key: '3',
    id: '1003',
    customer: 'Alice Johnson',
    checkIn: '2025-04-05',
    checkOut: '2025-04-10',
    amount: 2000,
  },
  {
    key: '4',
    id: '1004',
    customer: 'Bob Brown',
    checkIn: '2025-04-06',
    checkOut: '2025-04-08',
    amount: 800,
  },
  {
    key: '5',
    id: '1005',
    customer: 'Emma Davis',
    checkIn: '2025-04-07',
    checkOut: '2025-04-09',
    amount: 950,
  },
  {
    key: '6',
    id: '1006',
    customer: 'Michael Lee',
    checkIn: '2025-04-08',
    checkOut: '2025-04-12',
    amount: 1800,
  },
];

