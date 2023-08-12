import React,{useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import visita from '../../../images/visita.jpg'
import { Spinner } from 'react-bootstrap';
import { Navigate } from 'react-router-dom'
import { useAuth,useDepartment,useVisit } from '../../../hooks';
import './Visit.scss'

export function Visit() {
  const {auth} = useAuth();
  const {getDepartmentByUserId,department,loadingDepartment} = useDepartment();
  const {addVisit,token} = useVisit();

  useEffect(() => {
    (async()=>{
      await getDepartmentByUserId(auth?.me?.id);
    })();
  }, [])

  const add = async () =>{
    let data = {
      "department": department.num_department
    }
    await addVisit(data);
  }

  if (!auth?.me) {
    return <Navigate to={'/'}></Navigate>
  }
  return (
    <>
      {loadingDepartment ? (
        <Spinner animation="border" role="status">
        <span className="visually-hidden">
          Obteniendo informacion .....
        </span>
      </Spinner>
      ):(
        <div className='box'>
        <Card style={{ width: '35rem' }}>
          <Card.Img variant="top" src={visita} className='image'/>
          <Card.Body>
            <Card.Title>Generar codigo de visita</Card.Title>
            <Card.Text>
              El siguiente codigo se lo mandaras a tu visitante para que el vigilante de permita el acceso
            </Card.Text>
            <Button variant="primary" onClick={()=> add()} disabled={token?true:false}>Generar</Button>
              {token && (
                 <Card.Footer className='footer'>
                  Token de acceso:   <strong>{token.success}</strong>
                 </Card.Footer>    
              )}
          </Card.Body>
        </Card>
        </div>
      )}
    </>
  )
}
