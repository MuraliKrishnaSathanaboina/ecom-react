import React from 'react'
import './main.css';
import Add from './Add';

function Main() {
    let products = [
        {
          name: "Chicken",
          PRICE: "250",
          type: "non",
          image: '/ecom-react/Assets/images/chicken.jfif',
        },
        { name: "Mutton", PRICE: "750", type: "non", image: '/ecom-react/Assets/images/mutton.jfif' },
        { name: "Fish", PRICE: "150", type: "non", image: '/ecom-react/Assets/images/fish.jpg' },
        { name: "Prawns", PRICE: "250", type: "non", image: '/ecom-react/Assets/images/prawns.jfif' },
        {
          name: "Mashroom",
          PRICE: "250",
          type: "veg",
          image: '/ecom-react/Assets/images/mashroom.jfif',
        },
        { name: "Paneer", PRICE: "400", type: "veg", image: '/ecom-react/Assets/images/paneer.jfif' },
        
      ];
      
  return (
    <div>
        {/* {arr.map((value,index)=>(
            <div>{value.PRICE}</div>
        ))} */}
        <div id="div1">
        {products.map((value,index) => (
          <div>
            <div key={index} id="div2">
              <div><img src={products[index].image} alt="Kerala" height="200px" width="250px"></img></div>
              <div id='Name'>{value.name}</div>
              <div id='Price'>{value.PRICE}</div>
              <button onClick={()=><Add id={index}/>}>ADD</button>
               </div>
            {/* <div key={index} id="div2">{value.image}</div> */}
            </div>
        ))}
        </div>
        {/* <img src={products[0].image} alt="Kerala" height="200px" width="250px"></img> */}
        
        
    </div>
  )
}

export default Main