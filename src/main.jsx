import React from 'react';
import Listitem from './listitem';

const Main = ({items,handleChange,handleDelete,fetchError,isLoading}) => {
  return (
    <main> 
      {isLoading && <p style={{color:"orange",textAlign:"center"}}>Loading Items...</p>}
      {fetchError && <p style={{textAlign:"center",color:"red"}}>{`Error:${fetchError}`}</p>}
      {(items.length>0) ?
      (<Listitem 
         items={items}
         handleChange={handleChange}
         handleDelete={handleDelete}
        />):(<p className="Empty">List is Empty</p>)}
        
      </main>
  )
}

export default Main