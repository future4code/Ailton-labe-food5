import React from 'react'
import { useProtectedPage } from '../../Hooks/useProtectedPage'

export const RestaurantScreen = () => {
  useProtectedPage()
  return (
    <div>Restaurantscreen</div>
  )
}
