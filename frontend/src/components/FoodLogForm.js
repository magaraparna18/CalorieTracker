import React, { useState } from 'react';
import axios from 'axios';
import './FoodLogForm.css';

const FoodLogForm = ({ addFoodEntry }) => {
  const [food, setFood] = useState('');
  const [calories, setCalories] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!food || !calories) return;

    const foodData = {
      food,
      calories: parseInt(calories),
      date: new Date().toISOString(),
    };

    try {
      // Axios call to send data to backend API
      await axios.post('http://localhost:8080/api/food/add', foodData);
      addFoodEntry(foodData); // Update frontend state
      setFood('');
      setCalories('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="food-log-form">
      <h2>Add Food Entry</h2>
      <div>
        <label>Food Item</label>
        <input
          type="text"
          value={food}
          onChange={(e) => setFood(e.target.value)}
        />
      </div>
      <div>
        <label>Calories</label>
        <input
          type="number"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />
      </div>
      <button type="submit">Add Entry</button>
    </form>
  );
};

export default FoodLogForm;
