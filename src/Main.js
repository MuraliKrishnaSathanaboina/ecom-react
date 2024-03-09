import React from 'react'
import './main.css';

function Main() {
    let products = [
        {
          name: "Chicken",
          PRICE: "250",
          type: "non",
          image: '/ecom-react/Assets/images/chicken.jfif',
        },
        { name: "Mutton", PRICE: "750", type: "non", image: "./photos/mutton.jfif" },
        { name: "Fish", PRICE: "150", type: "non", image: "./photos/fish.jpg" },
        { name: "Prawns", PRICE: "250", type: "non", image: "./photos/prawns.jfif" },
        {
          name: "Mashroom",
          PRICE: "250",
          type: "veg",
          image: "./photos/mashroom.jfif",
        },
        { name: "Paneer", PRICE: "400", type: "veg", image: "./photos/paneer.jfif" },
        {
          name: "Chicken",
          PRICE: "250",
          type: "non",
          image: "./photos/chicken.jfif",
        },
      ];
      
  return (
    <div>
        {/* {arr.map((value,index)=>(
            <div>{value.PRICE}</div>
        ))} */}
        <div id="div1">
        {products.map((value,index) => (
          <div>
            <div key={index} id="div2">{products[index].image} {value.name}</div>
            {/* <div key={index} id="div2">{value.image}</div> */}
            </div>
        ))}
        </div>
        {/* <img src={products[0].image} alt="Kerala" height="200px" width="250px"></img> */}
        
        
    </div>
  )
}

export default Main