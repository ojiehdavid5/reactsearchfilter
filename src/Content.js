import React from 'react'
import {useState} from 'react'

const Content = () => {
  const[name,setName]=useState('chuks');
  const[count,setCount]=useState(0)
    const handleNameChange=()=>{
        const names=['Bob','chuks','ojieh'];
        const int=Math.floor(Math.random() * 3);
        setName(names[int]) ;
    }


    const handleClicked=()=>{
 setCount(count+1);
//  setCount(count);
console.log(count);
      ;
    }
    const handleClicked1=(name)=>{

      console.log(`${name} was clicked`);
    }


    const handleClicked2=()=>{

      setCount(count-1);
      console.log(count);
    }
  return (
    <main>
        <p onDoubleClick={handleClicked1}> 
            Hello {name} {count}
        </p>
        <button onClick={ handleNameChange}> 
CHANGE NAME
        </button>
      
        <button onClick={ handleClicked}> 
Click it for count
        </button>
      
        <button onClick={handleClicked2}> 
Click it to reduce
        </button>
      
    </main>
  )
}

export default Content
