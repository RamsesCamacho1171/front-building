import React from 'react'
import { useAuth } from '../hooks'
import { Login } from './auth';
import { Navigate } from 'react-router-dom'
import { Button } from 'semantic-ui-react';

export  function Home() {
    
    const {auth,logout} = useAuth();
    if(!auth) return <Login/>
    if(auth?.me?.role===1) return <Navigate to={'/tenant'}></Navigate> 
    if(auth?.me?.role===2) return <Navigate to={'/vigilant'}></Navigate> 
    return (
        <div>
            {console.log(auth)}
            <Button onClick={()=>logout()}>cerrar sersion</Button>
        </div>
    )
}
