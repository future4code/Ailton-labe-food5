import React from 'react'
import { useProtectedPage } from '../../Hooks/useProtectedPage'

export const ProfileScreen = () => {
  useProtectedPage()
  return (
    <div>PerfilscreeS</div>
  )
}
