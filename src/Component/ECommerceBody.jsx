import React from 'react'
import mobile1 from "../Component/assets/redmi8.png"
import mobile2 from "../Component/assets/redmi9.png"
import mobile3 from "../Component/assets/iphoneX.png"
export default function ECommerceBody(props) {
  let mobileImage
  if(props.name==="Redmi Note 8"){
      mobileImage=mobile1
  }
      else if(props.name==="Redmi Note 9"){
          mobileImage=mobile2
      }
      else{
          mobileImage=mobile3
      }
  return (
    <div>
<div>Model Name:{props.name}</div>
<div>Price:{props.price}</div>
<div>About the Product{props.description}</div>
<div>Category:{props.category}</div>
<div><img src={mobileImage}/></div>
<div>Available Stock:{props.countInStock}</div>
<div>Rating:{props.rating}</div>
<div>Reviews:e{props.numReview}</div>
    </div>
  )
}
