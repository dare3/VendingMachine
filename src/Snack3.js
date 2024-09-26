// Snack3.js
import React from 'react';
import { Link } from 'react-router-dom';

function Snack3() {
  return (
    <div>
      <h1>Soda!</h1>
      <p>A refreshing can of soda, keeps the day bright.</p>
      <Link to="/">Go back to Vending Machine</Link>
    </div>
  );
}

export default Snack3;
