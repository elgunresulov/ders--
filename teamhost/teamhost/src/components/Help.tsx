import React, { useState } from 'react';


const Help = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="help-container">
      <button className="help-button" onClick={() => setIsOpen(!isOpen)}>Help</button>
      {isOpen && (
        <div className="help-modal">
          <div className="help-header">
            <h2>Help</h2>
            <button className="close-button" onClick={() => setIsOpen(false)}>&times;</button>
          </div>
          <div className="help-search">
            <input type="text" placeholder="Search" />
          </div>
          <div className="help-content">
            <h3>Popular Q&A</h3>
            <ul>
              <li>📄 How to Upload Your Developed Game</li>
              <li>📄 How to Go Live Stream</li>
              <li>📄 Get in touch with the Creator Support Team</li>
            </ul>
            <p className="help-links">Browse All Articles</p>
            <p className="help-links">Send Feedback</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Help;
