import React, { useState } from 'react';
import FoodLogForm from '../src/components/FoodLogForm';
import FoodList from '../src/components/FoodList';
import DayWiseView from '../src/components/DayWiseView';

const App = () => {
  const [foodEntries, setFoodEntries] = useState([]);

  const addFoodEntry = (entry) => {
    setFoodEntries([...foodEntries, entry]);
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Calorie Counter Tool</h1>
      <FoodLogForm addFoodEntry={addFoodEntry} />
      <FoodList foodEntries={foodEntries} />
      <DayWiseView foodEntries={foodEntries} />
    </div>
  );
};

export default App;
