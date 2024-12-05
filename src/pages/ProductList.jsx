import { Card, Col, Container, Row } from "react-bootstrap";
import Cards from "../components/card";
import { useState , useEffect} from "react";
import axios from "axios";


function ProductList() {

  const [products, setProducts] = useState([])

    useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
      .then(res=>{
        setProducts(res.data)
      })
      .catch(err=>{
        console.log( "Hey Fool Its Error")
      })
    },[])


  return (
   <>

  
   <Container>
      
      <Row>
        {products.map((product, index) => {
          return(
            <Col xs={12}   sm={6} md={4} lg={3} xxl={2} key={index} >                       
                <Cards data={product} />        
            </Col>
          )
        })}
      </Row>

   </Container>
   

     
   </>
  );
}

export default ProductList;
