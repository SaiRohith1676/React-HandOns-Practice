import React, { useState } from 'react'

function HookCounterFour() {

    const [items,setItems] = useState([])

    const addItem =() =>{
        setItems([...items,{
            id:items.length,
            value : Math.floor(Math.random() * 8) 
        }])
    }
  return (
    <div>
        <button onClick={addItem}>Add a number</button>
        <ol>
            {items.map(item => (
                <li key={item.id}>{item.value}</li>
            ))}
        </ol>
    </div>
  )
}

export default HookCounterFour