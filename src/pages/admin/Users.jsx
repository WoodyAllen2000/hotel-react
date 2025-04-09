import React from 'react';
import '../../css/admin.css';

const Users = () => {
  return (
    <div className="admin-container">
      <h1>用户管理</h1>
      <div className="admin-actions">
        <button className="btn-primary">添加用户</button>
      </div>
      <div className="table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>用户ID</th>
              <th>用户名</th>
              <th>邮箱</th>
              <th>角色</th>
              <th>注册时间</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1001</td>
              <td>admin</td>
              <td>admin@example.com</td>
              <td>管理员</td>
              <td>2024-01-01</td>
              <td>
                <button className="btn-edit">编辑</button>
                <button className="btn-delete">删除</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users; 