import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Listitem = ({items,handleChange,handleDelete}) => {
  
  return (
    <ul >
          {items.map((item)=>(
             <li className='list' key={item.id}>
              <input type="checkbox"  checked={item.checked} onChange={()=>handleChange(item.id)} />
              <label  style={(item.checked) ? { textDecoration: 'line-through' } : null} onDoubleClick={()=>handleChange(item.id)}>{item.details}</label>
              <button onClick={()=>handleDelete(item.id)}><FaTrashAlt /></button>
             </li>
          ))}
          
          
          {/* <li className='list'>
            <input type="checkbox"/>
            <label>Added item 1</label>
            <button><FaTrashAlt /></button>
          </li>
          <li className='list'>
            <input type="checkbox"/>
            <label>Added item 222222222222</label>
            <button><FaTrashAlt /></button>
          </li>
          <li className='list'>
            <input type="checkbox"/>
            <label>Added item 3</label>
            <button><FaTrashAlt /></button>
          </li> */}
        </ul>
  )
}

export default Listitem;