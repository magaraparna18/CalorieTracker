import React from 'react';

const DayWiseView = ({ foodEntries }) => {
  const groupedByDate = foodEntries.reduce((acc, entry) => {
    const date = new Date(entry.date).toLocaleDateString();
    if (!acc[date]) acc[date] = [];
    acc[date].push(entry);
    return acc;
  }, {});

  return (
    <div className="my-3">
      <h3>Day-wise Calorie Log</h3>
      {Object.keys(groupedByDate).map((date) => (
        <div key={date}>
          <h5>{date}</h5>
          <ul className="list-group">
            {groupedByDate[date].map((entry, index) => (
              <li key={index} className="list-group-item">
                {entry.food} - {entry.calories} calories
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DayWiseView;
