import React from 'react';
import {  IoSearchOutline } from 'react-icons/io5';
import { BsFileText } from 'react-icons/bs';
import { BiMicrophone } from 'react-icons/bi';


interface HelpProps {
  onClose: () => void;
}

const Help: React.FC<HelpProps> = ({ onClose }) => {
  return (
    <div className="help-overlay" onClick={onClose}>
      <div className="help-modal" onClick={(e) => e.stopPropagation()}>
        <div className="help-header">
          <h2>Help</h2>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }} 
            className="close-button"
          >
            
          </button>
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search"
            className="search-input"
          />
          <IoSearchOutline className="search-icon " />
          <BiMicrophone className="mic-icon" />
        </div>

        <h3 className="qa-title">Popular Q&A</h3>
        
        <div className="qa-list">
          {[
            'How to Upload Your Developed Game',
            'How to Go Live Stream',
            'Get in touch with the Creator Support Team'
          ].map((item, index) => (
            <div key={index} className="qa-item">
              <BsFileText className="file-icon" size={20} />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="footer-links">
          <a href="#" className="footer-link">Browse All Articles</a>
          <a href="#" className="footer-link">Send Feedback</a>
        </div>
      </div>
    </div>
  );
};

export default Help; 