import React, { useEffect, useState } from 'react';
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
    dataIndex: 'name',
    key: 'name',
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
  const [roomData, setRoomData] = useState([]);

  async function fetchRooms() {
    try {
      const response = await fetch('admin/rooms');
      if (!response.ok) {
        throw new Error('Failed to fetch rooms');
      }

      const data = await response.json();

      // 设置为真实房间数据
      setRoomData(data);

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchRooms();
  })

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
              // 后面要换成真实数据
              dataSource={RoomList} 
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

const RoomList = [
  {
      id: 1,
      name: 'single room',
      roomNumber: '301',
      description: 'very good very good very good very good very good room',
      price: 250,
      status: 'Available',
      imgSrc: '/Room 1.png'
  },

  {
      id: 2,
      name: 'single room',
      roomNumber: '505',
      description: 'very good very good very good very good very good room',
      price: 250,
      status: 'Available',
      imgSrc: '/Room 2.png'
  },

  {
      id: 3,
      name: 'single room',
      roomNumber: '310',
      description: 'very good very good very good very good very good room',
      price: 250,
      status: 'Available',
      imgSrc: '/Room 3.png'
  },

  {
      id: 4,
      name: 'single room',
      roomNumber: '201',
      description: 'very good very good very good very good very good room',
      price: 250,
      status: 'Available',
      imgSrc: '/Room 4.png'
  },

  {
      id: 5,
      name: 'single room',
      roomNumber: '234',
      description: 'very good very good very good very good very good room',
      price: 250,
      status: 'Available',
      imgSrc: '/Room 5.png'
  },

  {
      id: 6,
      name: 'single room',
      roomNumber: '402',
      description: 'very good very good very good very good very good room',
      price: 250,
      status: 'Available',
      imgSrc: '/Room 6.png'
  },

  {
      id: 7,
      name: 'single room',
      roomNumber: '307',
      description: 'very good very good very good very good very good room',
      price: 250,
      status: 'Available',
      imgSrc: '/Room 7.png'
  },

  {
      id: 8,
      name: 'single room',
      roomNumber: '308',
      description: 'very good very good very good very good very good room',
      price: 250,
      status: 'Available',
      imgSrc: '/Room 8.png'
  },
];
  