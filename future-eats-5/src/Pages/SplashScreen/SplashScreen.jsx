import React from 'react'
import { useProtectedPage } from '../../Hooks/useProtectedPage'

export const SplashScreen = () => {
  useProtectedPage()
  return (
    <div>SplashScreen</div>
  )
}
