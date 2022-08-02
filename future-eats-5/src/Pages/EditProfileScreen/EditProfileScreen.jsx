import React from 'react'
import { useProtectedPage } from '../../Hooks/useProtectedPage'

export const EditProfileScreen = () => {
  useProtectedPage()
  return (
    <div>EditPerfilScreen</div>
  )
}
