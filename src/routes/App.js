import { useEffect, useState, useCallback } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';

import '../App.css';
import FoodTruckList from '../components/foodTruckList';
import { FOOD_TRUCKS_BASE_URL, PAGINATION_LIMIT } from '../constants';

const App = () => {
  const [foodTrucks, setFoodTrucks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [offset, setOffset] = useState(0);
  const [error, setError] = useState('');

  const fetchFoodTrucks = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch(`${FOOD_TRUCKS_BASE_URL}/food-trucks?limit=${PAGINATION_LIMIT}&offset=${offset}`);
    const data = await response.json();
    if (response.status !== 200) {
      setError(data.message || 'Error fetching content');
    }
    setFoodTrucks(data);
    setIsLoading(false);
  }, [offset]);

  useEffect(() => {
    fetchFoodTrucks();
  },[fetchFoodTrucks]);

  const searchFoodTrucks = async () => {
    if (searchValue === '') {
      return;
    }    
    setIsLoading(true);
    const response = await fetch(`${FOOD_TRUCKS_BASE_URL}/food-trucks/search`, {
      method: 'POST',
      body: JSON.stringify({
        searchValue,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    });
    const data = await response.json();
    setFoodTrucks(data);
    setIsLoading(false);
  }

  const handleOnChangeSearchText = (e) => {
    setSearchValue(e.target.value);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      searchFoodTrucks();
      return;
    }
  }
  const handleNextPage = () => {
    setOffset(offset + PAGINATION_LIMIT);
  }

  const handlePreviousPage = () => {
    setOffset(offset - PAGINATION_LIMIT);
  }

  const clearSearchResults = () => {
    setSearchValue('');
    fetchFoodTrucks();
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Food Trucks in San Francisco
        </p>
        <TextField
          helperText="Example: 'Taco' (food type) or 'Scotch' (food truck name)"
          id="demo-helper-text-aligned"
          label="Search"
          value={searchValue || ''}
          variant="filled"
          onKeyDown={handleKeyDown}
          onChange={handleOnChangeSearchText}
          InputProps={{
            endAdornment: (
              <IconButton onClick={searchFoodTrucks}>
                <SearchIcon/>
              </IconButton>
            ),
          }}
        />
        {searchValue.length > 0 &&
          <Button onClick={clearSearchResults}>Clear</Button>
        }
      </header>
      {isLoading &&
      <LinearProgress />}
      {!foodTrucks.length &&
        <Alert severity="info">No food trucks found.</Alert>
      }

      {error &&
        <Alert variant="outlined" severity="error" style={{ maxWidth: '500px' }}>
          {error}
        </Alert>
      }     
      <FoodTruckList foodTrucks={foodTrucks}/>
      {offset > 0 && foodTrucks.length > 0 &&
        <Button onClick={handlePreviousPage}>Previous Page</Button>
      }
      {foodTrucks.length > 0 && 
        <Button onClick={handleNextPage}>Next Page</Button>
      }
      <Box sx={{ bgcolor: '#5555550a', height: '20vh' }} />
    </div>
  );
}

export default App;
