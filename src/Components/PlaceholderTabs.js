import React, { useState } from 'react';
import './PlaceholderTabs.css';
import { FaRobot, FaVideo, FaChartLine } from 'react-icons/fa';

const PlaceholderTabs = () => {
  const [activeTab, setActiveTab] = useState('services');

  const renderContent = () => {
    switch (activeTab) {
      case 'services':
        return (
          <div className="service-content">
            <div className="service">
              <FaRobot size={40} />
              <h3>Object Detection</h3>
              <p>
                Our AI-powered object detection solutions help businesses analyze and automate processes with high accuracy.
              </p>
            </div>
            <div className="service">
              <FaVideo size={40} />
              <h3>Video Analytics</h3>
              <p>
                With advanced video analytics, we provide tracking and surveillance solutions that adapt to real-time data.
              </p>
            </div>
            <div className="service">
              <FaChartLine size={40} />
              <h3>Data Analytics</h3>
              <p>
                Druma.ai offers analytics tools that help you turn AI-driven insights into actionable business strategies.
              </p>
            </div>
          </div>
        );
      case 'about':
        return <p>Druma.ai is at the forefront of computer vision and AI-driven solutions.</p>;
      case 'contact':
        return <p>Contact us at contact@druma.ai or visit our office for more information.</p>;
      default:
        return null;
    }
  };

  return (
    <div className="tabs">
      <div className="tab-buttons">
        <button onClick={() => setActiveTab('services')}>Services</button>
        <button onClick={() => setActiveTab('about')}>About Us</button>
        <button onClick={() => setActiveTab('contact')}>Contact</button>
      </div>
      <div className="tab-content">
        {renderContent()}
      </div>
    </div>
    
  );
};

export default PlaceholderTabs;
