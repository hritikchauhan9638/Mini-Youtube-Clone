import React, { useState } from 'react';
import { Paper, TextField } from '@mui/material';

const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => setSearchTerm(event.target.value);

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSubmit(searchTerm);
    }
  };

  return (
    <Paper elevation={6} style={{ padding: '25px', display: 'flex' }}>
      <TextField
        fullWidth
        label='Search...'
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={onKeyPress}
      />
      {/* <button
        type='submit'
        onClick={searchTerm}
        style={{
          width: '8rem',
          backgroundColor: 'tomato',
          color: 'white',
          fontSize: '25px',
        }}
      >
        Search
      </button> */}
    </Paper>
  );
};

export default SearchBar;
