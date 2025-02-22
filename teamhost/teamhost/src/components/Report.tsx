import React from 'react';

const Report: React.FC = () => {
  return (
    <div className="report-modal">
      <h2>Send Report</h2>
      <form>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <select id="subject" name="subject">
            <option value="">Choose Subject</option>
            {/* Diğer seçenekler buraya eklenebilir */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="details">Details</label>
          <textarea id="details" name="details" placeholder="Try to include all details..."></textarea>
        </div>
        <div className="form-group">
          <button type="button">Attach File</button>
        </div>
        <div className="form-actions">
          <button type="button">Cancel</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Report; 