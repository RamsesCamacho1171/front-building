import React from 'react'
import { useAuth } from '../../../hooks';  
import { Navigate } from 'react-router-dom'
import imagen from '../../../images/building.jpg'
import './HomeVigilant.scss'

export function HomeVigilant() {
  const {auth,logout} = useAuth();
  if (!auth?.me) {
    return <Navigate to={'/'}></Navigate>
  }
  return (
    <div>
      <div className='box'>
        <img src={imagen} className='image' />
      </div>
      <div className='box'>
      <h1>Bienvenido al sistema de gestion de despartamentos</h1>
      </div>
    </div>
  )
}
