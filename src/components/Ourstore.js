import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Peda from './images/Peda.jpg';
import Image2 from './images/Image2.jpg';
import Image from './images/Image.jpg';
import Card from 'react-bootstrap/Card';
import Ourstoredata from './OurstoreData';
import "./style.css";
import { useState } from 'react';
import CardComponent from './CardComponent';



export default function Ourstore() {
  // Beginning
  const [data,setData] = useState(Ourstoredata);
  
  return (
    <div>
    <br/>
    <Carousel data-bs-theme="light">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Peda}
          alt="First slide"
          width="600"
          height="430"
        />
        <Carousel.Caption>
          {/* <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image2}
          alt="Second slide"
          width="600"
          height="430"
        />
        <Carousel.Caption>
          {/* <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image}
          alt="Third slide"
          width="600"
          height="430"
        />
      </Carousel.Item>
    </Carousel>
    <h2 className='text-center pt-5 text-danger'>OUR STORES</h2>

      <div className='row d-flex justify-content-center align-items-center'>
        {
          // data.map((element,id)=>{
          //   return(
          //     <>
          //      <Card style={{ width: '22rem',border:"none" }} className='mx-2 mt-4 card_style'>
          //        <Card.Img variant="top" src={element.imgdata} style={{height:"16rem"}} className='mt-3' />
          //          <Card.Body>
          //            <Card.Title>{element.rname}</Card.Title>
          //              <Card.Text>
          //              <strong>Address</strong>:  {element.address}<br/>
          //              <strong>Contact</strong>:  {element.contact}
          //              </Card.Text>  
          //          </Card.Body>
          //      </Card> 
          //      {/* Ending */}
  
          //     </>
          //   )
          // })
          <CardComponent arraydata={Ourstoredata} isForm="ourstore"/>
        }
      
      </div>
    </div>
    
  )
}