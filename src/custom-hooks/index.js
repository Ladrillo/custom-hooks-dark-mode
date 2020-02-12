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
