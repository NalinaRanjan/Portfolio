
import './App.css';
import Home from './pages/homepage/Home';
import Login from './pages/login/Login';
//import Navbar from './components/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Processpage from './pages/process/Processpage';
import UserProvider  from './UserContext';
import Portfolio from './Protofolio/portfolio_website_react';

function App() {
  return (
    <div className="App">
       {/* <Navbar/> */}
       {/* <UserProvider>
       <BrowserRouter>
       <Routes>
        <Route path="/" element = {<Login/>}/>
        <Route path="/home" element = {<Home/>}/>
        <Route path="/process" element = {<Processpage/>}/>
        </Routes>
        </BrowserRouter>
        </UserProvider> */}
       <Portfolio/>
       
    </div>
  );
}

export default App;
