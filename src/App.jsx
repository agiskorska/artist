import { Routes, Route } from 'react-router-dom';
import './App.css';
import {Header, MainLayout, Footer} from './components';
import { Home } from './pages';
function App() {
  const albums = [
    {id: 1, title: "Bird-Brains", year:2009},
    {id: 2, title: "Whokill", year:2011},
    {id: 3, title: "Nikki Nack", year:2014},
    {id: 4, title: "I Can Feel You Creep Into My Private Life", year:2018},
    {id: 5, title: "Sketchy", year:2021}
  ];
  return (
    <Routes>
      <Route path='/' element={<MainLayout albums={albums} />}>
        <Route index element={<Home albums={albums}/>}></Route>
      </Route>
    </Routes>
  )
}

export default App
