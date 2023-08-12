import React from 'react'
import { useAuth } from '../../hooks' 
import { Navigate } from 'react-router-dom'
import { Button } from 'semantic-ui-react';

export function HomeVigilant() {
  const {auth,logout} = useAuth();
  if (!auth?.me) {
    return <Navigate to={'/'}></Navigate>
  }
  return (
    <div>
      Estamos en el vigilante
      <Button onClick={()=>logout()}>cerrar sersion</Button>
    </div>
  )
}
