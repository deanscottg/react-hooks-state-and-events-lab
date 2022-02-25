import React, { useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All")

  console.log(selectedCategory)
  const filteredArray =items.filter((item)=>{
    console.log(item.category)
    if (item.category === selectedCategory){
      return true

    } else if( selectedCategory === "All" ){
    return true 
  } else {
    return false
  }
  })

  
  function filterCategory(e){
    setSelectedCategory( e.target.value)
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={filterCategory} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {
        filteredArray.map((item) => {
        return <Item key={item.id} name={item.name} category={item.category} />

        })}
      </ul>
    </div>
  );
}

export default ShoppingList;
