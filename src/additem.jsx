import React,{useRef} from 'react';
import { FaPlus } from 'react-icons/fa';

const Additem = ({additem,setAddItem,handleSubmit}) => {
  const refer=useRef();

  return (
    <form className="add" onSubmit={(e)=>handleSubmit(e)}>
        <label htmlFor="Add">Add a Item</label>
        <input autoFocus ref={refer} id="Add" type="text" placeholder="Add a item" required maxLength={25} value={additem} onChange={(e)=>setAddItem(e.target.value)}/>
        <button type="submit" aria-label="Add-item" onClick={()=>refer.current.focus()}><FaPlus /></button>
   </form>
  )
}

export default Additem