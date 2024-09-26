import React from 'react';
import { Link } from 'react-router-dom';

function Snack1() {
  return (
    <div>
      <h1>Chips!</h1>
      <p>Yummy!!!, crunchy chips for a quick snack!</p>
      <Link to="/">Go back to Vending Machine</Link>
    </div>
  );
}

export default Snack1;
