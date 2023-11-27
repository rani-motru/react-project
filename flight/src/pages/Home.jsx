import React from 'react';

const Home = ({ searchedFlight }) => {
  return (
    <div>
      <h2>Home</h2>
      {searchedFlight && <p>{`Flight ${searchedFlight} details will be displayed here.`}</p>}
    </div>
  );
};

export default Home;