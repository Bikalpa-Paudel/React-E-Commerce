import {useContext, useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../../firebase';
import { NavLink, useNavigate } from 'react-router-dom'
import './Login.css'
import { AppContext } from '../../AppContex';
 
const Login = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setUser} = useContext(AppContext);
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setUserName(userName)
            setUser(userName)
            navigate("/")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }
 
    return(
        <>
            <main >        
                <section className='login-section'>
                    <div className='login-box'>                                            
                        <h1> Login </h1>                       
                                                       
                        <form className='login-form'>                                              
                            <div className='user-name'>
                                <label htmlFor="user">
                                    Full Name
                                </label>
                                <input
                                    id="user-name"
                                    name="user"
                                    type="text"
                                    value={userName}                                    
                                    required                             
                                    onChange={(e)=>setUserName(e.target.value)}
                                />
                            </div>
                            <div className='email'>
                                <label htmlFor="email-address">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"                                    
                                    required                             
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>

                            <div className='password'>
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"                                    
                                    required
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>
                                                
                            <div>
                                <button                                    
                                    onClick={onLogin}
                                    className='login-btn'                                        
                                >      
                                    Login                                                                  
                                </button>
                            </div>                               
                        </form>
                       
                        <p className="text-sm text-white text-center">
                            No account yet? {' '}
                            <NavLink to="/signup">
                                Sign up
                            </NavLink>
                        </p>
                                                   
                    </div>
                </section>
            </main>
        </>
    )
}
 
export default Login
