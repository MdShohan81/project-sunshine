
import './App.css';
import Menubar from './components/Menubar/Menubar';
import {Routes,Route } from "react-router-dom";
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Menubar></Menubar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
