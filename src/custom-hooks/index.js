import { useState, useEffect } from 'react'
import axios from 'axios'

// here go our custom hooks
// decent documentation
export const useLocalStorage = (key, initialValue) => { // darkMode, false
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });
  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
};

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false)
  const toggleDarkMode = evt => {
    setDarkMode(!darkMode)
  }
  return [darkMode, toggleDarkMode]
}

export const useInput = (label) => {
  const [value, setValue] = useLocalStorage(label, '')
  const changeHandler = evt => {
    setValue(evt.target.value)
  }
  return [value, changeHandler]
}

export const useFollowers = (name) => {
  const [followers, setFollowers] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:4000/friends/${name}/followers`)
      .then(res => {
        setFollowers(res.data)
      })
      .catch(err => {
        debugger
      })
  }, [name])

  return followers
}