import React from 'react';
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
    title: 'Room Number',
    dataIndex: 'roomNumber',
    key: 'roomNumber',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Price (per night)',
    dataIndex: 'price',
    key: 'price',
    render: (price) => `¥ ${price}`,
  },
];

const Rooms = () => {
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
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['3']} items={items} onClick={({key}) => {
          let item = items.find((i) => i.key === key);
          navigate(item.path);
        }}/>
      </Sider>
      <Layout>
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: '100%',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Table
              columns={columns}
              dataSource={roomData}
              pagination={{ pageSize: 10 }}
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

export default Rooms; 

// 模拟房间数据
const roomData = [
  {
    key: '1',
    roomNumber: '101',
    type: 'Big Bed Room',
    status: 'Available',
    price: 300,
  },
  {
    key: '2',
    roomNumber: '102',
    type: 'Twin Bed Room',
    status: 'Occupied',
    price: 350,
  },
  {
    key: '3',
    roomNumber: '201',
    type: 'Deluxe Big Bed Room',
    status: 'Available',
    price: 500,
  },
  {
    key: '4',
    roomNumber: '202',
    type: 'Deluxe Twin Bed Room',
    status: 'Occupied',
    price: 550,
  },
  {
    key: '5',
    roomNumber: '301',
    type: 'Suite',
    status: 'Available',
    price: 800,
  },
  {
    key: '6',
    roomNumber: '302',
    type: 'Big Bed Room',
    status: 'Occupied',
    price: 300,
  },
  {
    key: '7',
    roomNumber: '303',
    type: 'Twin Bed Room',
    status: 'Available',
    price: 350,
  },
];