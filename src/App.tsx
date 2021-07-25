import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Todoes from './Components/Todoes/Todoes';


function App() {
  return (
    <div className="App">
      <Header/>
      <Todoes />
      <Footer />
    </div>
  );
}

export default App;
