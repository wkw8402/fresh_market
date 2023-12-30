'use client'

import { useState } from "react"

export default function List() {
    let items = ['Tomatoes', 'Pasta', 'Coconut']
    let [quantity, setQuantity] = useState([0,0,0])

    return (
      <div>
        <h2 className="title">Products</h2>
        {
          items.map((item, i)=>{
            return (
              <div className="food" key={i}>
                <img src={`/food${i}.png`} className="food-img" />
                <h4>{item} $40</h4>
                <span> {quantity[i]} </span>
                <button 
                  onClick={()=>{  
                    let copy = [...quantity]
                    copy[i]++
                    setQuantity(copy)  
                }}> + </button>
                <button 
                  onClick={()=>{  
                    let copy = [...quantity]
                    copy[i]--
                    setQuantity(copy)  
                }}> - </button>
              </div>
            )
          })
        }
      </div>
    )
  } 