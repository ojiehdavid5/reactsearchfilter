// import logo from './logo.svg';
// import './App.css';
import Header from './Header'
import SearchItem from './SearchItem'
import Content from './Content'
import Footer from './Footer'
import "./index.css"
import {useState} from "react"
import AddItem from './AddItem'
import {useEffect} from 'react'


function App() {
  const[items,setItems]=useState( [{
    id:1,
    checked:false,
    item:'milk'
  }])
  const [search,setSearch]=useState('');


const[newItem,setNewItem]=useState('');



const setAndSaveItems=(newItems)=>{

  setItems(newItems);
  localStorage.setItem('shoppingLists',JSON.stringify(newItems))

 }

const handleCheck=(id)=>{
  const listItems= items.map((item)=> item.id===id ?{...item,checked:!item.checked}:item);
  setAndSaveItems(listItems)

}

const handleDelete=(id)=>{
  const listItems=items.filter((item)=> item.id!==id)
  setAndSaveItems(listItems)

}




const addItem=(item)=>{
  const id =items.length  ? items[items.length - 1].id + 1 : 1;
  const myNewItem={id,checked:false,item};
  const listItems=[...items,myNewItem];
  setAndSaveItems(listItems)

}

const handleSubmit=(e)=>{
  e.preventDefault();
  if(!newItem)return;
  //addITEM
  addItem(newItem);
  setNewItem('');

}



  return (
    <div className="App">
  {/* <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1>chuks</h1>
  </header> */}
  <Header title="Groceries list" />
  <AddItem
    handleSubmit={handleSubmit}
    newItem={newItem}
    setNewItem={setNewItem}
  />
    <SearchItem
  search={search}
  setSearch={setSearch}
  
  
  />

  <Content
    items={items.filter(item =>  ((item.item).toLowerCase()).includes(search.toLowerCase()))}
    handleCheck={handleCheck}
    handleDelete={handleDelete}
  />
  <Footer length={items.length} />
</div>
);
  
}

export default App;
