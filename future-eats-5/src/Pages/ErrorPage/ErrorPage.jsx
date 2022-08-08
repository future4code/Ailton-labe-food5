import React from 'react'
import ErrorGif from '../../Assets/erroreats.gif'
import { Container, ErrorStyle, ErrorTitle, NumberStyle, TextStyle } from './styled'

export const ErrorPage = () => {
  return (
    <Container>
      <ErrorTitle>
        Erro <NumberStyle>404</NumberStyle>
      </ErrorTitle>
      <TextStyle>Página não encontrada</TextStyle>
      <ErrorStyle src={ErrorGif} />
    </Container>
  );
}
