
import './App.css';
import Menubar from './components/Menubar/Menubar';
import {Routes,Route } from "react-router-dom";
import Home from './components/Home/Home';
import CourseDetail from './components/CourseDetail/CourseDetail';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Menubar></Menubar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/course/:courseId' element={
          <RequireAuth><CourseDetail></CourseDetail></RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        
      </Routes>
      
    </div>
  );
}

export default App;
