import React,{useState,useEffect} from 'react';
import Header from './header';
import './App.css';
import Main from './main';
import Additem from './additem';
import Search from './search';
import Footer from './footer';
import apiRequest from './apiRequest'

function App() {
  
  const API_URL="http://localhost:4000/items"
  const [items,setItems]=useState([]);
  const [addItem,setAddItem]=useState('');
  const [searchItem,setSearchItem]=useState('');
  const [fetchError,setFetchError]=useState(null);
  const [isLoading,setIsLoading]=useState(true)

// useEffect(()=>{
//   JSON.parse(localStorage.getItem("todo"))
// },[])

useEffect(()=>{
  const fetchItems=async()=>{
    try{
      const response=await fetch(API_URL);
      if(!response.ok) throw Error("Data not received")
      const data=await response.json();
      setItems(data);
      setFetchError(null)

    }
    catch(err){
      setFetchError(err.message)
    }
    finally{
      setIsLoading(false)
    }
  }

  setTimeout(()=>{
    (async()=>fetchItems())()
  },2000)
  
},[])

 
 const handleChange=async (id)=>{
    const listItems=items.map((item)=>
    item.id===id ? {...item,checked:!item.checked}:item);
    setItems(listItems)
   
    const changed=listItems.filter((item)=>
      item.id===id
    )
    const updateOptions={
      method:'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({checked:changed[0].checked})
    }

    const changedURL=`${API_URL}/${id}`;
    const result=await apiRequest(changedURL,updateOptions);
    if(result) setFetchError(result)
 }

 const handleDelete=async (id)=>{
    const listItems=items.filter((item)=>
      item.id!==id
    )
    setItems(listItems)
    
    const deleteOptions={method:'DELETE'}

    const changedURL=`${API_URL}/${id}`;
    const result=await apiRequest(changedURL,deleteOptions);
    if(result) setFetchError(result)
 }

 const handleSubmit=(e)=>{
  e.preventDefault();
  if(!addItem) return;
  add(addItem);
  setAddItem('');
 }

 const add=async (details)=>{
  const id=items.length ? items[items.length-1].id + 1 :1
  const newItem= {id,checked:false,details}
  console.log(newItem)
  const listItems=[...items,newItem]
  setItems(listItems)
  
   const postOptions={
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(newItem)
  }

  const result=await apiRequest(API_URL,postOptions);
  if(result) setFetchError(result)

 }
  
  return (
    <div className='App'>
      <Header title="To-Do List"/>
      <Additem 
        addItem={addItem}
        setAddItem={setAddItem}
        handleSubmit={handleSubmit}
      />
      <Search 
       searchItem={searchItem}
       setSearchItem={setSearchItem}
      />
      <Main 
       items={items.filter((item)=>(((item.details).toLowerCase()).includes(searchItem.toLowerCase())))}
       handleChange={handleChange}
       handleDelete={handleDelete}
       fetchError={fetchError}
       isLoading={isLoading}
      />
      <Footer
       length={items.length}
      />
    </div>
    
  );
}

export default App;
