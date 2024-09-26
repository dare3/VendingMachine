import React from 'react';
import { Link } from 'react-router-dom';

function VendingMachine() {
  return (
    <div>
      <h1>Welcome to the Vending Machine!</h1>
      <h2>Choose a snack:</h2>
      <ul>
        <li><Link to="/snack1">Chips</Link></li>
        <li><Link to="/snack2">Candy</Link></li>
        <li><Link to="/snack3">Soda</Link></li>
      </ul>
    </div>
  );
}

export default VendingMachine;
