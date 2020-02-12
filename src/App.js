import React, { useState, useEffect } from 'react';
import { useInput } from './custom-hooks'
import axios from 'axios'
import './App.css';

const followers = [
  { id: 1, name: 'Luke' },
  { id: 2, name: 'Petar' },
]

function App() {
  // BETTER
  const [username, onUsernameChange] = useInput() // [a, b] arr
  const [password, onPasswordChange] = useInput() // [a, b] arr

  const [followers, setFollowers] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/friends/Alison/followers')
      .then(res => {
        setFollowers(res.data)
      })
      .catch(err => {
        debugger
      })
  }, [])

  // ATROCIOUS
  // const [username, setUsername] = useState('')
  // const onUsernameChange = evt => {
  //   setUsername(evt.target.value)
  // }
  // const [password, setPassword] = useState('')
  // const onPasswordChange = evt => {
  //   setPassword(evt.target.value)
  // }

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
        value={password}
        onChange={onPasswordChange}
      />

      <h4>Followers:</h4>
      {
        followers.map(f => <div key={f.id}>{f.name}</div>)
      }
    </div>
  );
}

export default App;
