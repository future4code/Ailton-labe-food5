import React, { useEffect, useState } from "react";
import axios from "axios";
import Logo from "../../Assets/logofutureeats.png";
import { useNavigate } from "react-router-dom";
import { Container, Title, DivLogo, LogoStyle, Form, Text, A, EyeImage, EyeButton, PasswordContainer } from "./styled";
import { Input } from "../../Components/Input/Input";
import { Button } from "../../Components/Button";
import { GoTo } from "../../Functions/GoTo";
import { useForm } from "../../Hooks/useForm";
import { BaseUrl } from "../../Constants/BaseUrl";
import SplashScreen from "../../Components/SplashScreen/SplashScreen";
import EyeHidden from "../../Assets/hidden-eye.png"
import {toast} from 'react-toastify'

export const LoginScreen = () => {
  const { form, onChange, cleanFields } = useForm({ email: "", password: "" });
  const navigate = useNavigate();
  const token = localStorage.getItem("token")
  const addressToken = localStorage.getItem("addressToken");
  const [splashScreenTime, setSplashScreenTime] = useState(1);
  const [splashScreenShow, setSplashScreenShow] = useState(true);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const login = async (event) => {
    const errorNotification = (message) => {
      toast.error(message, {
        position: "bottom-center",
        autoClose: 4000,
        hideProgressBar: true,
        draggable: true,
        });
    }
    event.preventDefault();
    try {
      const response = await axios.post(`${BaseUrl}login`, form);
      GoTo(navigate, "/home");
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      errorNotification(error.response.data.message)
    }
  };

  useEffect(() => {
    if (token !== null) {
      GoTo(navigate, "/home");
    }
    setTimeout(() => {
      setSplashScreenTime(0);
    }, 1000);
    setTimeout(() => {
      setSplashScreenShow(false);
    }, 2000);
  }, []);

  return (
    <Container>      
      {splashScreenShow && <SplashScreen opacity={splashScreenTime} />}
      <DivLogo>
        <LogoStyle src={Logo} />
      </DivLogo>
      <Title>Entrar</Title>
      <Form onSubmit={login}>
        <Input
          required
          name="email"
          value={form.email}
          onChange={onChange}
          label={"E-mail"}
          pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
          color={"#d0d0d0"}
        />
        <PasswordContainer>
          <Input
            required
            name="password"
            value={form.password}
            onChange={onChange}
            pattern="^.{6,}$"
            type={passwordShown ? "text" : "password"}
            label={"Senha"}
            color={"#d0d0d0"}
          />
          <EyeImage src={EyeHidden} onClick={togglePassword} />
        </PasswordContainer>
        <Button>Entrar</Button>
      </Form>
      <Text>
        Não possui cadastro?{" "}
        <A onClick={() => GoTo(navigate, "/register")}>Clique aqui.</A>
      </Text>
    </Container>
  );
};
