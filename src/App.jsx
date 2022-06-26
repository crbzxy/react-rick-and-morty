import React, { useEffect, useState } from 'react';
import CharacterList from './components/CharacterList';

function App() {
 

  return (
    <div className='bg-dark text-white'>
      <h1 className='text-center p-3 display-1'>Hello World</h1>
      <CharacterList  />
    </div>
  );
}

export default App;
