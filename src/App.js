import logo from './logo.svg';
import './App.css';
import AllBeers from './components/AllBeers';
import RandomBeer from './components/RandomBeer';
import CreateNewBeer from './components/CreateNewBeer';
import HomePage from './components/Homepage';
import SingleBeer from './components/SingleBeer'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path='/beers' element={<AllBeers />} />
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/:id' element={<SingleBeer />} />
        <Route path='/new-beer' element={<CreateNewBeer />} />

      </Routes>

    </div>
  );
}

export default App;
