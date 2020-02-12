import React, { useState } from 'react';
import './App.css';

const followers = [
  { id: 1, name: 'Luke' },
  { id: 2, name: 'Petar' },
]

function App() {
  const [username, setUsername] = useState('Dimos')
  const onUsernameChange = evt => {
    setUsername(evt.target.value)
  }

  return (
    <div className='App'>
      username:&nbsp;
      <input
        type="text"
        value={username}
        onChange={onUsernameChange}
      /> <br />

      password:&nbsp;
      <input
        type="text"
      />

      <h4>Followers:</h4>
      {
        followers.map(f => <div key={f.id}>{f.name}</div>)
      }
    </div>
  );
}

export default App;
