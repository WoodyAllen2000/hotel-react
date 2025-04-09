import React from 'react';
import '../../css/admin.css';

const Orders = () => {
  return (
    <div className="admin-container">
      <h1>订单管理</h1>
      <div className="admin-filters">
        <select>
          <option value="all">全部状态</option>
          <option value="pending">待处理</option>
          <option value="confirmed">已确认</option>
          <option value="completed">已完成</option>
          <option value="cancelled">已取消</option>
        </select>
        <input type="date" placeholder="选择日期" />
      </div>
      <div className="table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>订单号</th>
              <th>客户姓名</th>
              <th>房间号</th>
              <th>入住日期</th>
              <th>退房日期</th>
              <th>状态</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ORD20240409001</td>
              <td>张三</td>
              <td>101</td>
              <td>2024-04-10</td>
              <td>2024-04-12</td>
              <td>待处理</td>
              <td>
                <button className="btn-confirm">确认</button>
                <button className="btn-cancel">取消</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders; 