import React from 'react'
import { ArrowImage, Container } from './styled'
import Back from '../../Assets/back.png'
import { GoTo } from '../../Functions/GoTo'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
    const navigate = useNavigate()
  return (
    <Container>
        <ArrowImage src={Back} onClick={()=> GoTo(navigate, "/")}/>
    </Container>
  )
}
