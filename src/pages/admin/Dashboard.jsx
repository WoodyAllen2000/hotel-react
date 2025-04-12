import React from 'react';
import { Layout, Menu, theme, Card, Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const items = [
  { label: 'Dashboard', path: '/admin' },
  { label: 'Orders', path: '/admin/orders' },
  { label: 'Rooms', path: '/admin/rooms' },
].map((item, index) => ({
  key: String(index + 1),
  label: item.label,
  path: item.path,
}));


const Dashboard = () => {
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
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} onClick={({key}) => {
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
            <Row gutter={[16, 16]} justify="center">
                <Col xs={24} sm={12} md={8}>
                  <Card title="Total Revenue" variant="borderless">
                    <p>¥ 12,345</p>
                  </Card>
                </Col>
                <Col xs={24} sm={12} md={8}>
                  <Card title="Order Count" variant="borderless">
                    <p>150</p>
                  </Card>
                </Col>
                <Col xs={24} sm={12} md={8}>
                  <Card title="Room Usage" variant="borderless">
                    <p>85%</p>
                  </Card>
                </Col>
              </Row>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          CityU Hotel Admin System
        </Footer>
      </Layout>
    </Layout>

  );
};

export default Dashboard; 