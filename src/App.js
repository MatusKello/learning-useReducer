import Modal from './components/Modal';
import data from './data';
import { useState, useReducer } from 'react';
import { TextField, Box, Button, Typography, Card } from '@mui/material';

const reducer = (state, action) => {
  if (action.type === 'ADD_MOVIE') {
    const newMovies = [...state.movies, action.payload];
    return {
      ...state,
      movies: newMovies,
      showNotification: true,
      notificationContent: 'Added film',
    };
  }
  if (action.type === 'NO_MOVIE_NAME') {
    return {
      ...state,
      showNotification: true,
      notificationContent: 'Add name of the film!',
    };
  }
  if ((action.type = 'CLOSE_NOTIFICATION'))
    return {
      ...state,
      showNotification: false,
    };
  return new Error('Error - no match');
};

const defaultState = {
  movies: [],
  showNotification: false,
  notificationContent: '',
};

const App = () => {
  /*   const [movies, setMovies] = useState(data);
  const [showNotification, setShowNotification] = useState(false); */
  const [movieName, setMovieName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);

  const submitForm = (e) => {
    e.preventDefault();
    if (movieName) {
      const newMovie = { id: new Date().getTime(), name: movieName };
      dispatch({ type: 'ADD_MOVIE', payload: newMovie });
    } else {
      dispatch({ type: 'NO_MOVIE_NAME' });
    }
  };

  const closeNotification = () => {
    dispatch({ type: 'CLOSE_NOTIFICATION' });
  };

  return (
    <Card>
      {state.showNotification && (
        <Modal
          notificationContent={state.notificationContent}
          closeNotification={closeNotification}
        />
      )}
      <Box>
        <TextField
          onChange={(e) => setMovieName(e.target.value)}
          variant='filled'
          type='text'
        />
        <Button onClick={submitForm} variant='contained'>
          Add
        </Button>
      </Box>
      <Box>
        {state.movies.map((oneMovie) => {
          return (
            <div key={oneMovie.id}>
              <Typography>{oneMovie.name}</Typography>
            </div>
          );
        })}
      </Box>
    </Card>
  );
};

export default App;
