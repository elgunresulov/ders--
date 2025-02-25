import React from 'react';

import './Wallet.css';

const Wallet: React.FC = () => {
  return (
    <div className="teamhost-container">
      

      <main className="main-content">
        

        <div className="wallet-content">
          <div className="wallet-section">
            <h2>Wallet</h2>
            <div className="balance-info">
              <div className="balance-amount">504.00 USD</div>
              <div className="balance-status">
                <span className="status-dot"></span>
                Available
              </div>
            </div>
          </div>

          {/* Sağ Bölüm */}
          <div className="wallet-details">
            {/* Ödeme Yöntemi */}
            <div className="payment-method">
              <div className="section-header">
                <h2>Payment Method</h2>
                <button className="edit-button">Edit</button>
              </div>
              <div className="credit-card">
                <div className="card-chip"></div>
                <div className="card-details">
                  <div className="card-number">**** **** **** 6958</div>
                  <div className="card-balance">$ 18</div>
                </div>
              </div>
            </div>

            
            <div className="activities-section">
              <div className="section-header">
                <h2>Activities</h2>
                <button className="view-all-button">View All</button>
              </div>
              <div className="activities-list">
                <div className="activity-item">
                  <div className="activity-icon">
                    <img src="https://pro-theme.com/html/teamhost/assets/img/game-1.jpg" alt="GTA" />
                  </div>
                  <div className="activity-details">
                    <div className="activity-title">Grand Theft Auto...</div>
                    <div className="activity-date">5 Jul, 2020</div>
                  </div>
                  <div className="activity-amount">-14.80 USD</div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon">
                    <img src="https://pro-theme.com/html/teamhost/assets/img/game-2.jpg" alt="CS:GO" />
                  </div>
                  <div className="activity-details">
                    <div className="activity-title">Counter-Strike: G...</div>
                    <div className="activity-date">25 Apr, 2020</div>
                  </div>
                  <div className="activity-amount">-14.99 USD</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Wallet;
