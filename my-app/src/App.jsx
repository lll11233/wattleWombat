import { useState } from 'react';
import './App.css';
import TitleScreen from './components/Title';
import LoaderScreen from './components/loader';


function App() {
  const [screen, setScreen] = useState('Title'); 

  return (
    <>
      {screen === 'Title' && <TitleScreen onLoad={() => setScreen('Title')} />}
      {screen === 'loader' && <LoaderScreen />}
    </>
  );
}

export default App;
