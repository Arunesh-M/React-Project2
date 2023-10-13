import React from 'react';

const Search = ({searchItem,setSearchItem}) => {
  return (
    <form className="search" onSubmit={(e)=>e.preventDefault()}>
      <label htmlFor="Search">Search Item</label>
     <input id="Search" type="text" role="searchbox" placeholder="Search Item" value={searchItem} onChange={(e)=>setSearchItem(e.target.value)}/>
     </form>
  )
}

export default Search