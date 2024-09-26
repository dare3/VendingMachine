// Snack2.js
import React from 'react';
import { Link } from 'react-router-dom';

function Snack2() {
  return (
    <div>
      <h1>Candy!</h1>
      <p>Sweet and chewy candy for a treat.</p>
      <Link to="/">Go back to Vending Machine</Link>
    </div>
  );
}

export default Snack2;

