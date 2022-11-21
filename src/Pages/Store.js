import React, { useState } from 'react'
import Banner from '../Components/Banner'
import FilterTab from '../Components/FilterTab'
import Product from '../Components/Product'
import Sidebar from '../Components/Sidebar'
import Pagination from "https://cdn.skypack.dev/rc-pagination@3.1.15";
import {FaAngleDoubleLeft,FaAngleDoubleRight} from 'react-icons/fa'
function Store(props) {


  const [perPage, setPerPage] = useState(12);
  const [size, setSize] = useState(perPage);
  const [current, setCurrent] = useState(1);

  const PerPageChange = (value) => {
    setSize(value);
    const newPerPage = Math.ceil(props.productsList.length / value);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  }

  const getData = (current, pageSize) => {
    // Normally you should get the data from the server
    return props.productsList.slice((current - 1) * pageSize, current * pageSize);
  };

  const PaginationChange = (page, pageSize) => {
    setCurrent(page);
    setSize(pageSize)
  }

  const PrevNextArrow = (current, type, originalElement) => {
    if (type === 'prev') {
      return <button><FaAngleDoubleLeft /></button>;
    }
    if (type === 'next') {
      return <button><FaAngleDoubleRight /></button>;
    }
    return originalElement;
  }

  return (
    <div className="store">

      <Sidebar />
      <div className="main">
        <Banner />
        <FilterTab />
        <div className="products">
          {
            getData(current, size).map(prod => {
              return (<Product key={prod.id} data={prod} styleClass={'product'} addToCart={()=>props.addCartFunc(prod)} removeCart={()=>props.removeCartFunc(prod.id)}  />)
            })
          }
        </div>
        <div className="pagination">
          <Pagination
            className="pagination-data"
            onChange={PaginationChange}
            total={props.productsList.length}
            current={current}
            pageSize={size}
            showSizeChanger={false}
            itemRender={PrevNextArrow}
            onShowSizeChange={PerPageChange}
          />
        </div>
      </div>

    </div>
  )
}

export default Store