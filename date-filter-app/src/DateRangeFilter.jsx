import React, { useState } from 'react';

const DateRangeFilter = ({ onFilter }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleFilterClick = () => {
    // Call the onFilter function passed from the parent component
    onFilter(startDate, endDate);
  };

  return (
    <div>
      <label htmlFor="start-date">Start Date:</label>
      <input
        type="date"
        id="start-date"
        value={startDate}
        onChange={handleStartDateChange}
      />
      <label htmlFor="end-date">End Date:</label>
      <input
        type="date"
        id="end-date"
        value={endDate}
        onChange={handleEndDateChange}
      />
      <button onClick={handleFilterClick}>Filter</button>
    </div>
  );
};

export default DateRangeFilter;
