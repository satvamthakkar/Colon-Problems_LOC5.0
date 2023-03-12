// import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import * as React from 'react'
import {ChakraProvider} from '@chakra-ui/react'
import Login from './components/Authentication/Login'
import Signup from './components/Authentication/Signup'
import Loading from './components/Loading/Loading';
import Home from './components/Home/Home';
import Store from './store';
import StockImages from './components/stock_imgs/stock_images';
import Predict from './components/predict';
import Events from './components/Events/Events';
import Model from '../model';
import Course_main from './components/course_main';
import Profile from './components/Profile/profile';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <ChakraProvider>
    <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/loading" element={<Loading/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/store" element={<Store name={'Your Company Name'} description={'Item that you sold'} amount={350}/>}/>
          <Route path="/stockimages" element={<StockImages/>}/>
          <Route path="/predict" element={<Predict/>}/>
          <Route path="/Events" element={<Events/>}/>
          <Route path="/playground" element={<Model />}/>
          <Route path="/courses" element={<Course_main/>}/>
          <Route path='/profile' element={<Profile/>}/>
          
        
        </Routes>
      </Router>
    </ChakraProvider>
    </>
  )
}

export default App
