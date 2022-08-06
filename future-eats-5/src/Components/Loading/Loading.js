import React from 'react'
import LoadingGif from "../../Assets/loading-gif.gif"
import styled from 'styled-components'

const LoadingImg = styled.img`
width: 128px;
`

const LoadingContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 400px;
`

export const Loading = () => {
  return (
    <LoadingContainer>        
        <LoadingImg src={LoadingGif}/>
    </LoadingContainer>
  )
}
