import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Cardsdata from './CardsData';
import { useState } from 'react';
import "./style.css";
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';
import CardComponent from './CardComponent';

export default function Cards() {
  
  const [data,setData] = useState(Cardsdata);

  const dispatch = useDispatch();

  const send = (e)=>{
    //  console.log(e);
    dispatch(ADD(e));
  }

  return (
    <div className='container mt-3'>
      <br/><br/>
      <h2 className='text-center text-danger'>SWEET PLACE</h2>

      <div className='row d-flex justify-content-center align-items-center'>
        {
        //   data.map((element,id)=>{
        //     return(
        //       <>
        //        <Card style={{ width: '22rem',border:"none" }} className='mx-2 mt-4 card_style'>
        //          <Card.Img variant="top" src={element.imgdata} style={{height:"16rem"}} className='mt-3' />
        //            <Card.Body>
        //              <Card.Title>{element.rname}</Card.Title>
        //                <Card.Text>
        //                Price: ₹ {element.price}
        //                </Card.Text>
        //                <div className='button_div d-flex justify-content-center'>
        //                  <Button variant="danger" 
        //                    onClick={()=>send(element)}
        //                  className='col-sm-12'>Add to Cart</Button>
        //                </div>  
        //            </Card.Body>
        //        </Card> 
        //       </>
        //     )
        //   })
        // }
        }
        <CardComponent arraydata={Cardsdata} isForm="home"/>
      </div>
    </div>
  )
}

