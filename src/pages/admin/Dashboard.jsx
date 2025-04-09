import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/admin.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState({
    todayOrders: 0,
    totalIncome: 0,
    occupancyRate: 0,
    availableRooms: {
      standard: 0,
      deluxe: 0,
      twin: 0,
      suite: 0,
      executive: 0
    }
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await fetch('/admin/dashboard', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          if (response.status === 401) {
            localStorage.removeItem('adminToken');
            navigate('/admin/login');
            return;
          }
          throw new Error('Failed to fetch dashboard data');
        }

        const data = await response.json();
        setDashboardData(data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  if (loading) {
    return <div className="loading-container">Loading dashboard data...</div>;
  }

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <button className="btn-logout" onClick={handleLogout}>Logout</button>
      </div>
      
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Today's Orders</h3>
          <p className="stat-number">{dashboardData.todayOrders}</p>
        </div>
        <div className="dashboard-card">
          <h3>Occupancy Rate</h3>
          <p className="stat-number">{dashboardData.occupancyRate}%</p>
        </div>
        <div className="dashboard-card">
          <h3>Total Income</h3>
          <p className="stat-number">¥{dashboardData.totalIncome.toLocaleString()}</p>
        </div>
      </div>

      <div className="room-availability-section">
        <h2>Available Rooms</h2>
        <div className="room-grid">
          <div className="room-card">
            <h3>Standard Room</h3>
            <p className="room-count">{dashboardData.availableRooms.standard}</p>
          </div>
          <div className="room-card">
            <h3>Deluxe Room</h3>
            <p className="room-count">{dashboardData.availableRooms.deluxe}</p>
          </div>
          <div className="room-card">
            <h3>Twin Room</h3>
            <p className="room-count">{dashboardData.availableRooms.twin}</p>
          </div>
          <div className="room-card">
            <h3>Suite</h3>
            <p className="room-count">{dashboardData.availableRooms.suite}</p>
          </div>
          <div className="room-card">
            <h3>Executive Suite</h3>
            <p className="room-count">{dashboardData.availableRooms.executive}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 