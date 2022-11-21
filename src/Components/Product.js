import React from 'react'
import addCartEmpty from '../Web/add_cart_icon.svg'
import addFav from '../Web/favorite_icon.svg'
import addCartFilled from '../miscellaneous/fill_cart.svg'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'
import ReactStars from "react-rating-stars-component";

const ratingChanged = (newRating) => {
    console.log(newRating);
};

function Product(props) {

    function handleCartClick(){
        if(props.data.addedToCart){
            props.removeCart()
        }
        else{
            props.addToCart()
        }
    }

    return (
        <div className={props.styleClass} >
            <div className="product-head" style={{ position: 'relative' }}>
                <img src={require(`../Products/${props.data.img}`)} alt="" />
                <div className="add-prod" >
                    <img src={props.data.addedToCart? addCartFilled:addCartEmpty} alt="" onClick={handleCartClick} />
                    <img src={addFav} alt="" />
                </div>
            </div>
            <div className="product-body">
                <h2 className="product-name">{props.data.name}</h2>
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={20}
                    isHalf={true}
                    edit={false}
                    value={props.data.rating}
                    emptyIcon={<FaRegStar />}
                    halfIcon={<FaStarHalfAlt />}
                    fullIcon={<FaStar />}
                    activeColor="#ffd700"
                />

                <p className="price">
                    <span className="currprice">${props.data.currPrice}</span>
                    <span className="mrp">${props.data.mrp}</span>
                </p>
            </div>
        </div>
    )
}

export default Product