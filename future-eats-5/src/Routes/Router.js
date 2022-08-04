import React from "react";
import { AdressScreen } from "../Pages/AdressScreen/AdressScreen";
import { CartScreen } from "../Pages/CartScreen/CartScreen";
import { EditProfileScreen } from "../Pages/EditProfileScreen/EditProfileScreen";
import { HomeScreen } from "../Pages/HomeScreen/HomeScreen";
import { LoginScreen } from "../Pages/LoginScreen/LoginScreen";
import { ProfileScreen } from "../Pages/ProfileScreen/ProfileScreen";
import { RegisterScreen } from "../Pages/RegisterScreen/RegisterScreen";
import { RestaurantScreen } from "../Pages/RestaurantScreen/RestaurantScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SplashScreen } from "../Pages/SplashScreen/SplashScreen";
import { CartContext } from "../Global/context";
import { useCart } from "../Hooks/useCart";

export const Router = () => {
  const {setCart, cart, addToCart} = useCart()
  const values = {cart, setCart, addToCart}
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route
          path="/restaurant/:id"
          element={
            <CartContext.Provider value={values}>
              <RestaurantScreen />
            </CartContext.Provider>
          }
        />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/edit-profile" element={<EditProfileScreen />} />
        <Route path="/address" element={<AdressScreen />} />
        <Route
          path="/cart"
          element={
            <CartContext.Provider value={values}>
              <CartScreen />
            </CartContext.Provider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
