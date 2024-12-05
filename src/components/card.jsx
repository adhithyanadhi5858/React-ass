import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";




function  Cards(props) {


  return (

   <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src= {props.data.image} />
        <Card.Body>
              <a href={`products-details/${props.data.id}`}>
              
              <Card.Title> {props.data.title} </Card.Title>
              </a>
          <Card.Text>$ {props.data.price}  </Card.Text>
          <Button variant="primary">Buy</Button>
          <Button variant="danger">Add to Cart</Button>
        </Card.Body>
      </Card>
   </>
  )
}

export default  Cards
