
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';//vincular las Pages en nuestra barra de nav
import { Inicio } from './Pages/Inicio';
import { Categoria } from './Pages/Categoria';
import { Producto } from './Pages/Producto';
import { LoginSignUp } from './Pages/LoginSignUp';
import { Carrito } from './Pages/Carrito';
import { Footer } from './Components/Footer/Footer';
import hombres_banner from "./Components/Assets/banner_mens.png";
import mujeres_banner from "./Components/Assets/banner_women.png";
import kids_banner from "./Components/Assets/banner_kids.png";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/hombres' element={<Categoria banner={hombres_banner} category="men"/>}/>
        <Route path='/mujeres' element={<Categoria banner={mujeres_banner} category="women"/>}/>
        <Route path='/kids' element={<Categoria banner={kids_banner} category="kid"/>}/>
        <Route path="/product" element={<Producto/>}>
          <Route path='/product/:productId' element={<Producto/>}/>
        </Route>
        <Route path='/carrito' element={<Carrito/>}/>
        <Route path='/login' element={<LoginSignUp/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
