import React from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      username:&nbsp;
      <input
        type="text"
      /> <br />

      password:&nbsp;
      <input
        type="text"
      /> <br />

      <h4>Followers:</h4>
      {
        [
          { id: 1, name: 'Luke' },
          { id: 2, name: 'Petar' },
        ].map(f => <div key={f.id}>{f.name}</div>)
      } <br />
    </div>
  );
}

export default App;
