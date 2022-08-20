
import './App.css';
import Menubar from './components/Menubar/Menubar';
import {Routes,Route } from "react-router-dom";
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import CourseDetail from './components/CourseDetail/CourseDetail';

function App() {
  return (
    <div>
      <Menubar></Menubar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/course/:courseId' element={<CourseDetail></CourseDetail>}></Route>
        <Route path='/login' element={<Home></Home>}></Route>
        
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
