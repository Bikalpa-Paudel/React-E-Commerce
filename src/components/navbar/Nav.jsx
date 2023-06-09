import './Nav.css'
import Logo from './logo.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Outlet, Link } from 'react-router-dom';

export default function Nav() {
  return (
    <>
    <div className='header'>
         <Link to='/' className="logo"><img src={Logo} alt="logo" /></Link>
         <div className="search">
            <input type="text" placeholder='Search Amazon'/>
            <SearchIcon  className="search-icon"/>
         </div>
         <div className="nav-options">
            <Link to='/signup' className="sign-in">
                <div className="name">Hello, unknown</div>
                <div className="sign-in-text">sign in</div>
            </Link>
            <div className="return-order">
                <div className="return">Returns</div>
                <div className="order">& Orders</div>
            </div>
            <Link to="/cart" className="cart">

                <ShoppingCartIcon className='cart-icon' style={{ fontSize: "40px", color:'white' }}/>
                <div className="cart-num">0</div>
            </Link>
         </div>
    </div>
    <Outlet />
    </>
  )
}
