import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Dashboard from "./views/Dashboard";
import GetOne from './views/GetOne' 
import Register from './views/Register'
import Login from './views/Login';


function App() {
  return(
  <div className="App">
    <BrowserRouter>
    <h1>App.js Output</h1>
    
    <Link to="/">Home</Link>
    <Link to="/stocks/:id">One Stock</Link>
    <Link to="/register">Register</Link>
    <Link to="/login">Login</Link>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/stocks/:id" element={<GetOne/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    </BrowserRouter>
  </div>
  )
}
export default App;
