import React from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      Type username:&nbsp;
      <input
        type="text"
      /> <br />

      Type password:&nbsp;
      <input
        type="text"
      /> <br /><br />

      Followers:
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
