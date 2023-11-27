import React, { useState } from 'react';
import Nav from './components/Nav';
import FlightStatus from './pages/FlightStatus';
import CheckFlight from './pages/CheckFlight';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  const [searchedFlight, setSearchedFlight] = useState(null);

  const handleSearch = (flightNumber) => {
    setSearchedFlight(flightNumber);
  };

  return (
  
      <div>
     <Nav/>
      
      <Routes>
          <Route path="/check-flight">
            <CheckFlight onSearch={handleSearch} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
      </Routes>

        
        <FlightStatus />
      </div>
 
  );
};

export default App;