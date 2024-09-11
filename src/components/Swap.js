import React, { useState } from 'react';
import { db } from '../firebase';

function Swap() {
  const [token, setToken] = useState('');

  const handleSwap = async () => {
    await db.collection('swaps').add({
      token,
      timestamp: new Date()
    });
    alert('Swap initiated!');
  };

  return (
    <div>
      <h1>Swap Tokens</h1>
      <input
        type="text"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        placeholder="Enter token"
      />
      <button onClick={handleSwap}>Swap</button>
    </div>
  );
}

export default Swap;
