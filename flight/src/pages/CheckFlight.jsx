// import React from 'react'
// import { useState, useEffect } from 'react';
// import Form from '../components/Form'
// function CheckFlight(){

//     const [flights, setFlights] = useState([]);
    
//     useEffect(() => {
//     const fetchData = async () => {
//     try {
//     const response = await fetch(
//     'http://api.aviationstack.com/v1/flights?access_key=7cccb1e86f16319251b650a3924e87db'
//     );
//     console.log(response)
//     const data = await response.json();
//     setFlights(data.results);
//     } catch (error) {
//     console.error('Error fetching data:', error);
//     }
//     };
    
//     fetchData();
//     }, []);
    
//     return (
//     <div>
//     <h1>Flight Status</h1>
//     {/* {flights.map((flight) => (
//     <div key={flight.flight.iata}>
//     {flight.live.is_ground === false && (
//     <p>
//     {`${flight.airline.name} flight ${flight.flight.iata} from ${flight.departure.airport} (${flight.departure.iata}) to ${flight.arrival.airport} (${flight.arrival.iata}) is in the air.`}
//     </p>
//     )} */}
//     </div>
//     )
//     // )
// }
//     // </div>
//     // );
//     // };

// export default CheckFlight




import React, { useState } from 'react';

const CheckFlight = ({ onSearch }) => {
  const [flightNumber, setFlightNumber] = useState('');

  const handleSearch = () => {
    onSearch(flightNumber);
  };

  return (
    <div>
      <h2>Check Flight</h2>
      <label>
        Flight Number:
        <input
          type="text"
          value={flightNumber}
          onChange={(e) => setFlightNumber(e.target.value)}
        />
      </label>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default CheckFlight;