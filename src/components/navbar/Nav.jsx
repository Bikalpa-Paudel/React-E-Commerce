import './Nav.css'
import Logo from './logo.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Nav() {
  return (
    <div className='header'>
         <div className="logo"><img src={Logo} alt="logo" /></div>
         <div className="search">
            <input type="text" placeholder='Search Amazon'/>
            <SearchIcon  className="search-icon"/>
         </div>
         <div className="nav-options">
            <div className="sign-in">
                <div className="name">Hello, unknown</div>
                <div className="sign-in-text">sign in</div>
            </div>
            <div className="return-order">
                <div className="return">Returns</div>
                <div className="order">& Orders</div>
            </div>
            <div className="cart">
                <ShoppingCartIcon className='cart-icon' style={{ fontSize: "40px" }}/>
                <div className="cart-num">0</div>
            </div>
         </div>
    </div>
  )
}
