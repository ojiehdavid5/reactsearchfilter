// import logo from './logo.svg';
// import './App.css';
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import "./index.css"
import {useState} from "react"

function App() {
  const[items,setItems]=useState(  [
    {
      id:1,
      checked:false,
      item:"sugar"
    },
    {
      id:2,
      checked:true,
      item:"water"
    },
    {
      id:3,
      checked:true,
      item:"garri"
    }
  ]
);
const handleCheck=(id)=>{
  const listItems= items.map((item)=> item.id===id ?{...item,checked:!item.checked}:item);
  setItems(listItems);
  localStorage.setItem('shoppingLists',JSON.stringify(listItems))

}

const handleDelete=(id)=>{
  const listItems=items.filter((item)=> item.id!==id)
  setItems(listItems);
  localStorage.setItem('shoppingLists',JSON.stringify(listItems))

}



  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>chuks</h1>
      </header> */}
      <Header title="Groceries list"/>
      <Content
      items={items}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      
      />
      <Footer
      length={items.length}
      />
    </div>
  );
}

export default App;
