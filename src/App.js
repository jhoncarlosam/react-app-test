import React, { useState } from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';

export default function App() {
  const [keyword, setKeyword] = useState('morty')
  return (
    <div className="App">
      <section className="App-content">
        <button onClick={() => setKeyword('rick')}>Cambiar keyword</button>
        <ListOfGifs keyword={keyword}></ListOfGifs>
      </section>
    </div>
  );
}

//export default App;