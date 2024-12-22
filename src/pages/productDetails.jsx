import React,{useEffect , useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

import {useParams} from "react-router-dom"

function ProductDetails() {

const [items, setItems] = useState({})

let { id } = useParams();


  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products/'+id)
      .then(res=>{
        setItems(res.data)

        console.log("Fetching bdat Successfully Completed")

       
      })
      .catch(err=>{
        console.log( "Hey Fool Its Error")
      })
  },[])
        console.log(items)
const title = items.title

  return (
   
    <>
    
    <Card style={{ width: '40rem' }}>
        <Card.Img  variant="top" src= {items.image} />
        <Card.Body>
           <Card.Title>{items.title} </Card.Title>   
          <Card.Text>{items.price} </Card.Text>
          <Button variant="primary">Buy</Button>
          <Button variant="danger">Add to Cart</Button>
        </Card.Body>
      </Card>
      </>
  )
}

export default ProductDetails