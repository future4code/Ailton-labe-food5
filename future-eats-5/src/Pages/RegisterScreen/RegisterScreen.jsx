import React from "react";
import axios from "axios";
import Logo from "../../Assets/logofutureeats.png";
import {
  Container,
  DivLogo,
  ErrorMessage,
  ErrorSeparator,
  ErrorText,
  EyeImage,
  LogoStyle,
  PasswordContainer,
  Title,
} from "./styled";
import { Form } from "../../Global/GlobalStyle";
import { Input } from "../../Components/Input/Input";
import { Button } from "../../Components/Button";
import { Header } from "../../Components/Header/Header";
import { GoTo } from "../../Functions/GoTo";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../Hooks/useForm";
import { BaseUrl } from "../../Constants/BaseUrl";
import { useEffect, useState } from "react";
import EyeHidden from "../../Assets/hidden-eye.png";

export const RegisterScreen = () => {
  const navigate = useNavigate();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [canShowErrors, setCanShowErrors] = useState(false)
  const { form, onChange, cleanFields } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const toggleConfirmPassword = () => {
    setConfirmPasswordShown(!confirmPasswordShown);
  };

  const register = async (event) => {
    event.preventDefault();
    if (confirmPassword === form.password) {
      try {
        setError(false);
        const response = await axios.post(`${BaseUrl}signup`, form);
        GoTo(navigate, "/address");
        localStorage.setItem("token", response.data.token);
      } catch (error) {
        console.log(error.reponse.data.message)
      }
    } else {
      setError(true);
    }
  };
  const onChangeConfirm = (e) => {
    setConfirmPassword(e.target.value);
  };

  useEffect(()=>{
    if (form.name.length > 0 && form.cpf.length > 0 && form.email.length > 0 && form.password.length > 0) {
      setCanShowErrors(true)
    }
  },[form])

  return (
    <Container>
      <Header arrow={true} />
      <DivLogo>
        <LogoStyle src={Logo} />
      </DivLogo>
      <Title>Cadastrar</Title>
      <Form onSubmit={register}>
        {form.name.length === 0 && canShowErrors ? (
          <Input
            name="name"
            value={form.name}
            onChange={onChange}
            required
            label={"Nome e Sobrenome*"}
            color={"#e02020"}
          />
        ) : (
          <Input
            name="name"
            value={form.name}
            onChange={onChange}
            required
            label={"Nome e Sobrenome*"}
            color={"#d0d0d0"}
          />
        )}
        {form.email.length === 0 && canShowErrors ? (
          <Input
            name="email"
            value={form.email}
            onChange={onChange}
            required
            label={"Email*"}
            pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
            type="email"
            color={"#e02020"}
          />
        ) : (
          <Input
            name="email"
            value={form.email}
            onChange={onChange}
            required
            label={"Email*"}
            pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
            type="email"
            color={"#d0d0d0"}
          />
        )}
        {form.cpf.length < 11 && canShowErrors ? (
          <Input
            label={"CPF*"}
            name="cpf"
            value={form.cpf}
            onChange={onChange}
            required
            pattern="[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}"
            title="Preencha um CPF válido"
            color={"#e02020"}
          />
        ) : (
          <Input
            label={"CPF*"}
            name="cpf"
            value={form.cpf}
            onChange={onChange}
            required
            pattern="[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}"
            title="Preencha um CPF válido"
            color={"#d0d0d0"}
          />
        )}

        {form.password.length === 0 && canShowErrors ? (
          <>
            <PasswordContainer>
              <Input
                name="password"
                value={form.password}
                onChange={onChange}
                required
                label={"Senha*"}
                pattern="^.{6,}$"
                type={passwordShown ? "text" : "password"}
                title="Preencha uma senha com no mínimo 6 caracteres"
                color={"#e02020"}
              />
              <EyeImage src={EyeHidden} onClick={togglePassword} />
            </PasswordContainer>
          </>
        ) : (
          <>
            <PasswordContainer>
              <Input
                name="password"
                value={form.password}
                onChange={onChange}
                required
                label={"Senha*"}
                pattern="^.{6,}$"
                type={passwordShown ? "text" : "password"}
                title="Preencha uma senha com no mínimo 6 caracteres"
                color={"#d0d0d0"}
              />
              <EyeImage src={EyeHidden} onClick={togglePassword} />
            </PasswordContainer>
          </>
        )}
        {confirmPassword !== form.password || confirmPassword.length < 6 && canShowErrors ? (
          <PasswordContainer>
            <Input
              required
              onChange={onChangeConfirm}
              label={"Confirmar*"}
              pattern="^.{6,}$"
              type={confirmPasswordShown ? "text" : "password"}
              color={"#e02020"}
            />
            <EyeImage src={EyeHidden} onClick={toggleConfirmPassword} />
            {canShowErrors && confirmPassword !== form.password &&
            <ErrorMessage>Deve ser a mesma que a anterior</ErrorMessage>
            }
          </PasswordContainer>
        ) : (
          <PasswordContainer>
            <Input
              required
              onChange={onChangeConfirm}
              label={"Confirmar*"}
              pattern="^.{6,}$"
              type={confirmPasswordShown ? "text" : "password"}
              color={"#d0d0d0"}
            />
            <EyeImage src={EyeHidden} onClick={toggleConfirmPassword} />            
          </PasswordContainer>
        )}
        {canShowErrors && confirmPassword !== form.password &&
            <ErrorSeparator/>
            }

        <Button>Criar</Button>
      </Form>
    </Container>
  );
};
