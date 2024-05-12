import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';
import Alert from '@mui/material/Alert';
import FoodTruckDetails from '../components/foodTruckDetails';

import { FOOD_TRUCKS_BASE_URL } from '../constants';

const FoodTruckView = () => {
  const { id } = useParams();
  const [foodTruck, setFoodTruck] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFoodTrucks = async () => {
      const response = await fetch(`${FOOD_TRUCKS_BASE_URL}/food-trucks/${id}`);
      const data = await response.json();
      if (response.status !== 200) {
        setError(data.message || 'Error fetching content');
      }
      setFoodTruck(data);
      setIsLoading(false);
    };

    fetchFoodTrucks();
  },[id]);

  if (isLoading) {
    return <LinearProgress />;
  }

  if (error) {
    return (
      <Alert variant="outlined" severity="error" style={{ maxWidth: '500px' }}>
        {error}
      </Alert>
    );
  }

  return (
    <FoodTruckDetails foodTruck={foodTruck} />
  );
}

export default FoodTruckView;
