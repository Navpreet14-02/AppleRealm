import React, { useState } from 'react'
import Banner from '../Components/Banner'
import FeaturedProducts from '../Components/FeaturedProducts'
import Product from '../Components/Product'
import Slider from '../Components/Slider'

import AllProds from '../Components/BestSellers/All.js'
import MacProds from '../Components/BestSellers/Mac.js'
import iphoneProds from '../Components/BestSellers/Iphone.js'
import iPadProds from '../Components/BestSellers/IPad.js'
import watchProds from '../Components/BestSellers/Watches.js'
import Accessories from '../Components/BestSellers/Accessories.js'





function Home(props) {

  const [bestSellers, setBestSellers] = useState([...AllProds]);

  // console.log(bestSellers);

  function handleClick(event) {
    const { id } = event.target;
    switch (id) {
      case 'all':
        setBestSellers([...AllProds])
        break;
      case 'macs':
        setBestSellers([...MacProds])
        break;
      case 'iphone':
        setBestSellers([...iphoneProds])
        break;
      case 'ipad':
        setBestSellers([...iPadProds])
        break;
      case 'watch':
        setBestSellers([...watchProds])
        break;
      case 'acc':
        setBestSellers([...Accessories])
        break;
      default:
        setBestSellers([...AllProds])
        break;
    }
    // setBestSellers([id])
  }

  return (
    <div className='home'>
      <Slider />
      <div className="best-seller">
        <h1>BEST SELLER</h1>
        <ul className="product-options" onClick={handleClick}>
          <li id='all'>All</li>
          <li id='macs'>Mac</li>
          <li id='iphone'>iPhone</li>
          <li id='ipad'>iPad</li>
          <li id='watch'>Watches</li>
          <li id='acc'>Accessories</li>
        </ul>
      </div>
      <div className="products">
        {
          bestSellers.map((prod) => {
            return (
              <Product key={prod.id} data={prod} styleClass={'product'} />
            )
          })
        }
      </div>
      <p className="load-more">LOAD MORE</p>


      <Banner />

      <div className="store-features flex-row">
        <div className="feature flex-col">
          <img src={require('../Web/shipping.png')} alt="" className="feature-photo" />
          <h1 className="feature-name">FREE SHIPPING</h1>
          <p className="feature-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam ea incidunt rerum! Laudantium, molestias? Sed, dolor! Exercitationem provident laudantium distinctio.
          </p>
        </div>
        <div className="feature flex-col">
          <img src={require('../Web/refund.png')} alt="" className="feature-photo" />
          <h1 className="feature-name">100% REFUND</h1>
          <p className="feature-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam ea incidunt rerum! Laudantium, molestias? Sed, dolor! Exercitationem provident laudantium distinctio.
          </p>
        </div>
        <div className="feature flex-col">
          <img src={require('../Web/support.png')} alt="" className="feature-photo" />
          <h1 className="feature-name">SUPPORT 24/7</h1>
          <p className="feature-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam ea incidunt rerum! Laudantium, molestias? Sed, dolor! Exercitationem provident laudantium distinctio.
          </p>
        </div>
      </div>
      <FeaturedProducts />
    </div>
  )
}

export default Home