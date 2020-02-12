import React, { useState, useEffect } from 'react';
import { useInput, useFollowers, useDarkMode } from './custom-hooks'
import './App.css';

function App() {
  // BETTER
  const [username, onUsernameChange] = useInput('user') // [a, b] arr
  const [password, onPasswordChange] = useInput('pass') // [a, b] arr

  // BETTER
  const followers = useFollowers('Austin')

  // BETTER
  const [darkMode, toggleDarkMode] = useDarkMode()

  // ATROCIOUS
  // const [darkMode, setDarkMode] = useState(false)
  // const toggleDarkMode = evt => {
  //   setDarkMode(!darkMode)
  // }

  // ATROCIOUS
  // const [followers, setFollowers] = useState([])

  // useEffect(() => {
  //   axios.get('http://localhost:4000/friends/Alison/followers')
  //     .then(res => {
  //       setFollowers(res.data)
  //     })
  //     .catch(err => {
  //       debugger
  //     })
  // }, [])

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
    <div className={`App${darkMode ? ' dark' : ''}`}>
      <button onClick={toggleDarkMode}>toggle dark mode</button>
      <br /><br /><br />

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
