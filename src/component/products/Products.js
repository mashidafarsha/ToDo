import React, { useState } from 'react'
import { Card,Button } from 'react-bootstrap';
import {phoneData} from "./Product-data"
const Products = () => {
  const[items,setItems]=useState(phoneData)

  const incQnty =(id)=>{
    const newitem = items.map((item)=>
item.id===id?{...item,qnty:item.qnty+1}:item
)
setItems(newitem)
  }

  const descQnty =(id)=>{
    const newitem = items.map((item)=>
item.id===id?{...item,qnty:item.qnty-1}:item
)
setItems(newitem)
  }
  return (
    
    <div>
        <h1 className='bg-info text-white'>products</h1>
        
        {items.map((item)=>(
          <div key={(item.id)}>
          <Card className='shadow-none p-3 mb-5 bg-light rounded' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/200/300" />
      <Card.Body>
        <Card.Title>{item.model}</Card.Title>
        <Card.Text>
        {item.desc}
        </Card.Text>
        <p>price:{item.price}</p>
        <div>
            <p>
                <Button onClick={()=>incQnty(item.id)} className='m-1'>+</Button>{item.qnty}<Button onClick={()=>descQnty(item.id)} className='m-1'>-</Button>
            </p>
        </div>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
        ))}
        
        
    </div>
  )
}

export default Products