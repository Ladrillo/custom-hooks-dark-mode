import { useState, useEffect } from 'react'
import axios from 'axios'

// here go our custom hooks
export const useInput = () => {
  const [value, setValue] = useState('')
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