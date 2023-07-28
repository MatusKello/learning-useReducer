import Modal from './components/Modal';
import data from './data';
import { useState } from 'react';
import { TextField, Box, Button } from '@mui/material';

const App = () => {
  const [movies, setMovies] = useState(data);
  const [showNotification, setShowNotification] = useState(false);
  const [movieName, setMovieName] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <Box>
      <form onSubmit={submitForm}>
        <TextField
          onChange={(e) => setMovieName(e.target.value)}
          variant='filled'
          type='text'
        ></TextField>
        <Button variant='contained'>Add</Button>
      </form>
    </Box>
  );
};

export default App;
