import React, { useState } from 'react'
import InputField from './components/InputField'

const App = () => {
  const [input, setInput] = useState('');

  const handleInputChange=(e)=>{
    setInput(e.target.value);
  }
  return (
  
    <InputField placeholder={'placeholder'} type={'text'} onChange={handleInputChange} value={input}/>
  )
}
export default App