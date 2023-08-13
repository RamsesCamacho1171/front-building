import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Form } from "semantic-ui-react";
import visita from '../../../images/visita.jpg'
import { Navigate } from 'react-router-dom'
import { useAuth, useVisit } from '../../../hooks';
import './Access.scss'
export function Access() {
    const { auth } = useAuth();
    const { validateVisit, token } = useVisit();
    const [inputToken, setInputToken] = useState()

    const validate = async()=>{
        await validateVisit(inputToken.trim());
    }

    if (!auth?.me) {
        return <Navigate to={'/'}></Navigate>
    }
    return (
        <div className='box'>
            <Card style={{ width: '35rem' }}>
                <Card.Img variant="top" src={visita} className='image' />
                <Card.Body>
                    <Card.Title>Validar codigo de visita</Card.Title>
                    <Card.Text>
                        Verificacion de codigo
                    </Card.Text>
                    <Form.Input
                        name="token"
                        placeholder="Ingrese el token"
                        value={inputToken}
                        onChange={e => setInputToken(e.target.value)}
                    />
                    <Button variant="primary" onClick={() => validate()} className='button'>Generar</Button>
                    {token?.success && (
                        <Card.Footer className='footer'>
                            acceso al departmento: <strong>{token.department}</strong>
                        </Card.Footer>
                    )}
                    {token?.fail && (
                        <Card.Footer className='footer'>
                           <strong>{token.fail}</strong>
                        </Card.Footer>
                    )}
                </Card.Body>
            </Card>
        </div>
    )
}
