import React from 'react'
import './topnav.css'
// import logo from "./public/Assests/basket.png";

function Header() {
  return (
    <div>
            <div className="container1">
            <p id="para">Fresh Meat</p>
            {/* <!-- <a onclick="non_veg()">NON-VEG</a> -->
            <!-- <a onclick="veg1()">NON-VEG</a> --> */}
    
            <input
              id="searchbar"
              onKeyUp="search_price()"
              type="text"
              name="search"
              placeholder="Search by price"
            />
            {/* <div class="cartImg" onClick="cartt1()"> */}
              {/* <a>
                 <img src={arr[0].image} alt="" height="40px" width="40px" /> 
              </a> */}
            </div> 
        </div>
          
       
  )
}

export default Header