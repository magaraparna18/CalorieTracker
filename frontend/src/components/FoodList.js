import React from 'react';

const FoodList = ({ foodEntries }) => {
  return (
    <div className="my-3">
      <h3>Food Log</h3>
      <ul className="list-group">
        {foodEntries.map((entry, index) => (
          <li key={index} className="list-group-item">
            {entry.food} - {entry.calories} calories ({new Date(entry.date).toLocaleDateString()})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodList;
