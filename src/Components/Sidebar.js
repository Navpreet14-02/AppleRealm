import React from 'react'
import MultiRangeSlider from "multi-range-slider-react";

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="accessories side-div">
        <h2>ACCESORIES</h2>
        <ul className='noStyleList'>
          <li><span>Apple Car</span><span>2</span></li>
          <li><span>Air port & wireless</span><span>48</span></li>
          <li><span>Cables & Docks</span><span>14</span></li>
          <li><span>Cases & Films</span><span>15</span></li>
          <li><span>Charging Devices</span><span>23</span></li>
          <li><span>Connected home</span><span>1</span></li>
          <li><span>Headphones</span><span>95</span></li>
        </ul>
      </div>
      <div className="prices side-div">
        <h2>PRICES</h2>
        <p className='range' style={{display:'flex',justifyContent:'space-between'}}><span>Ranger: </span><span>$13.99-$25.99</span></p>
        <MultiRangeSlider 
            min={0}
            max={100}
            step={5}
            minValue={20}
            ruler={false}
            label={false}
            subSteps={false}
        />

      </div>
      <div className="colors side-div">
          <h2>COLOR</h2>
          <div className="color"></div>
          <div className="color"></div>
          <div className="color"></div>
          <div className="color"></div>
          <div className="color"></div>
          <div className="color"></div>
      </div>

      <div className="brand side-div">
        <h2>BRAND</h2>
        <ul className='noStyleList'>
          <li><span>Apple</span><span>99</span></li>
          <li><span>LG</span><span>99</span></li>
          <li><span>Samsung</span><span>99</span></li>
          <li><span>Siemens</span><span>99</span></li>
        </ul>
      </div>

      <div className="more side-div">
        <p style={{textAlign:'center'}}>MORE</p>
      </div>
    </div>
  )
}

export default Sidebar