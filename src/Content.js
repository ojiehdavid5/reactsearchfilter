import React from 'react'

const Content = () => {
    const handleNameChange=()=>{
        const names=['Bob','chuks','ojieh'];
        const int=Math.floor(Math.random() * 3);
        return names[int];
    }


    const handleClicked=(name)=>{

      console.log(`${name} was clicked`);
    }
    const handleClicked1=(name)=>{

      console.log(`${name} was clicked`);
    }


    const handleClicked2=(e)=>{

      console.log(e.target.innerText);
    }
  return (
    <main>
        <p onDoubleClick={handleClicked1}> 
            Hello {handleNameChange()}
        </p>
        <button onClick={ () =>handleClicked('emma')}> 
Click it
        </button>
      
        <button onClick={ () => handleClicked1('chuks')}> 
Click it
        </button>
      
        <button onClick={(e)=>handleClicked2(e)}> 
Click it
        </button>
      
    </main>
  )
}

export default Content
