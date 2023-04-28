import './App.css';
import { Route, Routes } from 'react-router-dom';
import Cart from './routes/cart/Cart';
import Home from './routes/home/Home';
import Navbar from './components/header/Navbar';
import Login from './routes/login/Login';
import Profil from './components/profil/Profil';
import AddAdress from './components/addAddress/AddAdress';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profil' element={<Profil/>}/>
        <Route path='/addAdress' element={<AddAdress/>}/>
      </Routes>
    </div>
  );
}

export default App;
