import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'

const Content = ( items,handleCheck,handleDelete) => {

    


    
  return (
    <main>
{items.length?(
    <uL>
      {items.map((item) =>(
        <li className='item' key={item.id}>
          <input type="checkbox"
          checked={item.checked} 
          onChange={ ()=> handleCheck(item.id)}
          />
          <label
          style={(item.checked)?{textDecoration:'line-through'}:null}
          onDoubleClick={()=> handleCheck(item.id)}
          >
            {item.item}</label>
          <FaTrashAlt
          onClick={()=>handleDelete(item.id)}
           role="button" 
           tabIndex='0'/>
        </li>
      ))}
    </uL>
        ):(<p style={{marginTop:'2rem', justifyContent:"center" ,alignItem:'center'}}> Your list is empty</p>)}
    </main>
  )
}

export default Content
