
import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/main/Home';

function App() {
  const [some,setSome] = useState([])
  // const [rgg, setRgg] = useState([])
  const gust = (el) => {
    setSome(e => [...e, el])
  }
  return (
    <div className="App">
      <Header arr={some}/>
      <Home liftUp={gust}/>
    </div>
  );
}

export default App;
