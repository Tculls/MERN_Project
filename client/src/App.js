import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Dashboard from "./views/Dashboard";
import GetOne from './views/GetOne'

function App() {
  return(
  <div className="App">
    <BrowserRouter>
    <h1>App.js Output</h1>
    
    <Link to="/">Home</Link>
    <Link to="/stocks/:id">One Stock</Link>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/stocks/:id" element={<GetOne/>}/>
    </Routes>
    </BrowserRouter>
  </div>
  )
}
export default App;
