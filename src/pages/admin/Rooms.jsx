import React from 'react';
import '../../css/admin.css';

const Rooms = () => {
  return (
    <div className="admin-container">
      <h1>房间管理</h1>
      <div className="admin-actions">
        <button className="btn-primary">添加房间</button>
      </div>
      <div className="table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>房间号</th>
              <th>类型</th>
              <th>价格</th>
              <th>状态</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>101</td>
              <td>标准间</td>
              <td>¥299</td>
              <td>空闲</td>
              <td>
                <button className="btn-edit">编辑</button>
                <button className="btn-delete">删除</button>
              </td>
            </tr>
            <tr>
              <td>102</td>
              <td>豪华间</td>
              <td>¥499</td>
              <td>已预订</td>
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

export default Rooms; 