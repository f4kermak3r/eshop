import "./checkout-item.styles.scss";

import { removeAllItems } from "../../store/cart/cart.action";
import { addItemToCart } from "../../store/cart/cart.action";
import { removeItemFromCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { useDispatch, useSelector } from "react-redux";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const { name, imageUrl, price, quantity } = cartItem;

  const clearItemHandler = () => dispatch(removeAllItems(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name"> {name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price"> {price}e</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
