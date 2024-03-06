import React from 'react'
import LineItem from "./LineItem"


const itemList = ({items,handleCheck,handleDelete}) => {
  return (
    <uL>
    {items.map((item) =>(
        <LineItem 
        key={item.id}
        item={item}
  handleCheck={handleCheck}
  handleDelete={handleDelete}

        
        />
    ))}
  </uL>
  )
}

export default itemList
