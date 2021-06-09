import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Link, Route } from 'wouter'

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to='/gif/demonslayer'>Gif de Demon Slayer</Link>
        <Route
          component={ListOfGifs}
          path='/gif/:keyword'
        ></Route>
      </section>
    </div>
  );
}

//export default App;