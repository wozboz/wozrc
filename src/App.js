import React, { useState } from 'react';
import { Postoverview } from './features/postoverview/Postoverview';
import { Navbar } from './features/navbar/Navbar';


function App() {

  const [dropdownValue, setDropdownValue] = useState('popular');
  
  return (
    <div className="App">
      <Navbar onClick={setDropdownValue} />
      <Postoverview dropdownValue={dropdownValue}/>
    </div>
  );
}

export default App;
