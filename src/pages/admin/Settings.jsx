import React from 'react';
import '../../css/admin.css';

const Settings = () => {
  return (
    <div className="admin-container">
      <h1>系统设置</h1>
      <div className="settings-grid">
        <div className="settings-section">
          <h2>基本设置</h2>
          <div className="form-group">
            <label>酒店名称</label>
            <input type="text" defaultValue="示例酒店" />
          </div>
          <div className="form-group">
            <label>联系电话</label>
            <input type="tel" defaultValue="400-123-4567" />
          </div>
          <div className="form-group">
            <label>酒店地址</label>
            <input type="text" defaultValue="北京市朝阳区xxx路xxx号" />
          </div>
        </div>
        
        <div className="settings-section">
          <h2>通知设置</h2>
          <div className="form-group">
            <label>邮件通知</label>
            <input type="checkbox" defaultChecked />
          </div>
          <div className="form-group">
            <label>短信通知</label>
            <input type="checkbox" defaultChecked />
          </div>
        </div>
        
        <div className="settings-section">
          <h2>系统维护</h2>
          <div className="form-group">
            <label>系统版本</label>
            <span>v1.0.0</span>
          </div>
          <button className="btn-primary">检查更新</button>
        </div>
      </div>
    </div>
  );
};

export default Settings; 