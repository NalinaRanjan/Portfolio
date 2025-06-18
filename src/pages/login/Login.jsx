import './Login.scss'
import { useNavigate} from 'react-router-dom'
import {UserContext}   from '../../UserContext';
import { useContext,useState } from 'react';

const Login = () => {
    const [localUser, setLocalUser] = useState("");
    const {setUser} = useContext(UserContext)
    const navigate = useNavigate();
   
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform validation and authentication logic here
       // setSearchParam({ user });
       setUser(localUser)
        navigate(`/home`);
        
    }
    return (
        <div className="loginpage">
            {/* <username.Provider value={user}>
                <Home/>
            </username.Provider> */}
            <div className='left'>
                <div><h2>Welcome to kauvery EMR</h2></div>
                <div> <p>Streamlined Care, Effortless Records: Transforming Outpatient Experiences with our EMR Solution!</p>
                </div>
                <div><img src="/Capture.PNG"></img></div>
            </div>
            <div className='right'>
                <div><img src="/logo.PNG"></img></div>
                <form onSubmit={handleSubmit}>
                    <div className='form'>
                        <div><h5>Sign In</h5></div>
                        <div ><label htmlFor='username' className='username'>User Name</label><br />
                            <span className='inputfld'><span className="material-icons icon">person</span>
                                <input type="text" id="username" placeholder='User Name' required value={localUser} onChange={(e)=>setLocalUser(e.target.value)} ></input></span>
                         </div>
                         <div ><label htmlFor='passcode' className='username'>Password</label><br />
                            <span className='inputfld'><span className="material-icons icon">password</span>
                                <input type="text" id="passcode" placeholder='Password' required></input></span>
                         </div>
                      <div><button type="submit" class="btn btn-info">Next</button></div>
                        <div><p>Powered by AxpertVersion AW_11.2.1.0_release29</p></div>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Login
