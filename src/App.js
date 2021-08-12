import React from 'react';
import { Postoverview } from './features/postoverview/Postoverview';
import { Navbar } from './features/navbar/Navbar';


function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Postoverview />
    </div>
  );
}

export default App;
