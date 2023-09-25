
import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { connect } from "react-redux";
import { remove } from "../../store/cartReducer";
import "./Cart.css";

function Cart(props) {
  const { remove } = props;

  function handleClick(product) {
    remove(product);
  }

  // Check if there are items in the cart
  const cartHasItems = props.cart.cartProducts.length > 0;

  return (
    <div>
      {cartHasItems ? (
        <div className="cart-container">
          {props.cart.cartProducts.map((product, i) => (
            <div key={i} className="product-container">
              <p className="product-name">{product.name}</p>
              <Button
                onClick={() => handleClick(product)}
                variant="outlined"
                className="delete-button"
              >
                <DeleteIcon className="delete-icon" />
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer,
  };
};

const mapDispatchToProps = { remove };

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
