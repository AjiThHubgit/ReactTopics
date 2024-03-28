import React, { useState } from 'react';
import DateRangeFilter from './DateRangeFilter';

const App = () => {
  const [filteredData, setFilteredData] = useState([]);
  const data = [
    { id: 1, name: 'Item 1', date: '2024-03-15' },
    { id: 2, name: 'Item 2', date: '2024-03-20' },
    { id: 3, name: 'Item 3', date: '2024-03-25' },
    { id: 4, name: 'Item 4', date: '2024-04-01' },
  ];

  const handleFilter = (startDate, endDate) => {
    const filtered = data.filter(item => {
      const itemDate = new Date(item.date);
      const start = new Date(startDate);
      const end = new Date(endDate);
      return itemDate >= start && itemDate <= end;
    });
    setFilteredData(filtered);
  };

  return (
    <div>
      <DateRangeFilter onFilter={handleFilter} />
      <ul>
        {filteredData.map(item => (
          <li key={item.id}>{item.name} - {item.date}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
