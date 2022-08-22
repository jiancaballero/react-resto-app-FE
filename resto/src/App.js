import logo from "./logo.svg";
import "./App.css";
import Cart from "./components/Cart";
import AddItem from "./components/AddItem";
import { useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";
function App() {
  const initialState = {
    items: [
      {
        id: uuidv4(),
        name: "Burger",
        category: "Food",
        price: 80,
        description: "",
        image:
          "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Smash-Burgers_EXPS_TOHcom20_246232_B10_06_10b.jpg",
      },
      {
        id: uuidv4(),
        name: "Cake",
        category: "Dessert",
        price: 90,
        description: "",
        image:
          "https://static.toiimg.com/thumb/53096885.cms?width=1200&height=900",
      },
      
    ],
  };

  //set up reducer
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_ITEM": {
        return { ...state, items: [...state.items, action.payload] };
      }

      case "DELETE_ITEM": {
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload),
        };
      }

      case "ORDER_ITEM": {
        console.log(`Order Item: ${action.payload}`);
      }

      default: {
        return state;
      }
    }
  };

  // define reducer
  const [state, dispatch] = useReducer(reducer, initialState);
  const categories = state.items.map(item=>item.category).reduce((category,item)=>{
    if(!category.includes(item)){
      category.push(item)
    }
    return category
  },[])
  
  
  return (
    <>
      <AddItem id={uuidv4()} state={state} dispatch={dispatch} categories={categories}/>
    </>
  );
}

export default App;
