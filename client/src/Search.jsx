import React, { useState } from 'react';

function Search({ query, handleChange }) {

  return (
    <div id='search'>
      <input type='text' onChange={handleChange} placeholder='Search by tags here' value={query}/>
    </div>
  );
}

export default Search;
