
import './App.css';
import Cart from './components/cartPage/Cart.jsx';
import Nav from './components/navbar/Nav';
import Login from './components/signup/Login';
import Signup from './components/signup/Signup';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
