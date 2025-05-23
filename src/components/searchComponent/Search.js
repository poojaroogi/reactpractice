import React, { useState } from 'react';

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

 

  return (
    <div className='parent'>
      <input
        type='text'
        placeholder='Search your name'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default Search;
