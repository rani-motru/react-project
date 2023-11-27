import React, { useState, useEffect } from 'react';
import Form from '../components/Form';

const FlightStatus = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'http://api.aviationstack.com/v1/flights?access_key=7cccb1e86f16319251b650a3924e87db'
        );

        const data = await response.json();
        setFlights(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Flight Status: <Form flightData={fetchData}/></h1>

      {flights.map((flight) => (
        <div key={flight.flight.iata}>
          {flight.live.is_ground === false && (
            <p>
              {`${flight.airline.name} flight ${flight.flight.iata} from ${flight.departure.airport} (${flight.departure.iata}) to ${flight.arrival.airport} (${flight.arrival.iata}) is in the air.`}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FlightStatus;
