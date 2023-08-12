import React,{useEffect} from 'react'
import { useAuth } from '../../../hooks'
import { Navigate } from 'react-router-dom'
import imagen from '../../../images/building.jpg'
import './HomeTenant.scss'

export function HomeTenant() {
  const { auth } = useAuth();
  
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
