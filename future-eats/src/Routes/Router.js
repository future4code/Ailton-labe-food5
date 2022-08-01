import React from 'react'
import { AdressScreen } from '../Pages/Adress Screen/AdressScreen'
import { CartScreen } from "../Pages/Cart Screen/CartScreen"
import { EditPerfilScreen } from '../Pages/Edit Perfil Screen/EditPerfilScreen'
import { HomeScreen } from '../Pages/Home Screen/HomeScreen'
import { LoginScreen } from '../Pages/Login Screen/Loginscreen'
import { PerfilScreen } from '../Pages/Perfil Screen/Perfilscreen'
import { RegisterScreen } from '../Pages/Register Screen/Registerscreen'
import { RestaurantScreen } from '../Pages/Restaurant Screen/Restaurantscreen'
import { SplashScreen } from '../Pages/Splash Screen/Splashscreen'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginScreen/>}/>
        <Route path="/register" element={<RegisterScreen/>}/>
        <Route path="/home" element={<HomeScreen/>} />
        <Route path="/restaurant/:id" element={<RestaurantScreen/>} />
        <Route path="/perfil" element={<PerfilScreen/>} />
        <Route path="/cart" element={<CartScreen/>} />
        <Route path="/edit-perfil" element={<EditPerfilScreen/>} />
        <Route path="/adress" element={<AdressScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
};