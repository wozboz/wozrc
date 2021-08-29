import React, { useState } from 'react';
import { Postoverview } from './features/postoverview/Postoverview';
import { Navbar } from './features/navbar/Navbar';


function App() {

  const [dropdownValue, setDropdownValue] = useState('pics');
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="App">
      <Navbar onClick={setDropdownValue} onSearch={setSearchValue}/>
      <Postoverview dropdownValue={dropdownValue} searchValue={searchValue}/>
    </div>
  );
}

export default App;
