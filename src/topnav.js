import React from 'react'
import 'topnav.css'

function topnav() {
  return (
    <div>
        <div class="container1">
        <p id="para">Fresh Meat</p>
        {/* <!-- <a onclick="non_veg()">NON-VEG</a> -->
        <!-- <a onclick="veg1()">NON-VEG</a> --> */}

        <input
          id="searchbar"
          onkeyup="search_price()"
          type="text"
          name="search"
          placeholder="Search by price"
        />
        <div class="cartImg" onclick="cartt1()">
          <a>
            <img src="./photos/basket.png" alt="" height="40px" width="40px" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default topnav