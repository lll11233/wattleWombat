import { useState } from 'react'
import './App.css'
import TitleScreen from './components/Title.jsx'
import LoaderScreen from './components/loader.jsx'

function App() {
  const [screen, setScreen] = useState('Title'); 

  return (
    <>
      {screen === 'Title' && <TitleScreen onLoad={() => setScreen('loader')} />}
      {screen === 'loader' && <LoaderScreen />}
    </>
  );
}

export default App
