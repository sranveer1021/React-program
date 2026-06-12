import React from 'react'

const Product = (props) => {
   
  return (
    <div>
        
        <h2>Mobile Name = {props.title}</h2>
        <h3>Mobile Brand = {props.brand}</h3>
        <h4>Mobile Price = {props.price}</h4>
        <h3>ROM = {props.rom}</h3>
        <h3>RAM = {props.ram}</h3>
        <h3>Camera = {props.camera}</h3>
    </div>
  )
}

export default Product