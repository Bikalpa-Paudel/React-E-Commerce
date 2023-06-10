
import './App.css';
import { AppContext } from './AppContex';
import Cart from './components/cartPage/Cart.jsx';
import Nav from './components/navbar/Nav';
import Login from './components/signup/Login';
import Signup from './components/signup/Signup';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {

  const [productData, setProductData] = useState([])
  const [user, setUser] = useState('unknown')
  return (
    <div className="App" >
      <AppContext.Provider value={{productData, setProductData, user, setUser}}>

      <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<Signup />}/>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="/cart" element={<Cart />}/>
          </Route>
        </Routes>
      </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
