/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Store from "./Pages/Store";
import ProductsData from "./ProductsData";

function App() {

  const [prodList, setProdList] = useState(ProductsData);

  const [cart, setCart] = useState([])

  const [totalAmnt, setTotalAmnt] = useState(0)

  // console.log(cart);

  useEffect(() => {
    setTotalAmnt(() => {
      var sum = 0
      cart.forEach(prod => sum += prod.currPrice * prod.quantity)
      return sum
    }
    )
  }, [cart])

  var totalAmount = 0;

  // useEffect(() => {
  //   totalAmount = getAmnt(cart);
  // }, [cart])



  function addCart(prod) {
    setCart(prevCart => {
      const set = new Set([...prevCart, prod])
      return Array.from(set);
    })

    setProdList(prevProdList => {
      const newProdList = prevProdList.map(prevProd => {
        if (prevProd.id === prod.id) {
          return { ...prevProd, addedToCart: true }
        }
        else {
          return prevProd;
        }
      })
      return newProdList
    })


  }

  function removeCart(prodId) {
    setCart(prevCart => {
      const newCart = prevCart.filter(prod => prod.id !== prodId)
      return newCart
    })

    setProdList(prevProdList => {
      const newProdList = prevProdList.map(prevProd => {
        if (prevProd.id === prodId) {
          return { ...prevProd, addedToCart: false }
        }
        else {
          return prevProd;
        }
      })
      return newProdList
    })
  }

  return (
    <div className="App">
      <Navbar cartProds={cart} totalAmount={totalAmnt} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/store" element={<Store productsList={prodList} addCartFunc={addCart} removeCartFunc={removeCart} />} />
        <Route path="/cart" element={<Cart addedProds={cart} removeCartFunc={removeCart} totalAmount={totalAmnt} />} />
      </Routes>

      <div style={{ backgroundColor: '#F6F7F8' }}>

        <Footer />
      </div>
    </div>
  );
}

export default App;
