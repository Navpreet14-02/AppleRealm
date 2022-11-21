import React from 'react'
import ReactStars from "react-rating-stars-component";
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'
import { MdDelete } from "react-icons/md";

const ratingChanged = (newRating) => {
    console.log(newRating);
};

function CartProduct(props) {
    return (
        <div className="cart-prod">

            <img src={require(`../Products/${props.data.img}`)} className="prod-img" alt="" />
            <div className="prod-details">
                <div className="details">

                    <h2 className="name">{props.data.name}</h2>
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
                    <div className="quantity">
                        <span>-</span> <span>{props.data.quantity}</span> <span>+</span>
                    </div>
                    <button className="delete-btn" onClick={props.removeCart}><MdDelete /> Delete</button>
                </div>
                <p className="price"><span className="mrp">${props.data.mrp}</span><span className="currprice">${props.data.currPrice}</span></p>
            </div>
        </div>
    )
}

export default CartProduct