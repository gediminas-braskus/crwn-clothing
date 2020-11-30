import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';

import { clearItemFromCart } from "../../redux/cart/cart.actions";

import "./stripe-button.styles.scss";

const StripeCheckoutButton = ({ price, cartItems, clearItem, history }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Hrig9BLWqFUCyRUoEPjpMVZpflU9pQVnY6njfeAEohPAHH7bHyfeOK1vSbmjWUA0BwuCEXdbtuWw5IpKq5FVe5D00GJ92f315";

  const onToken = (token) => {
    alert("Payment Successful!");

    cartItems.map(cartItem => clearItem(cartItem));

    history.push("/shop");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item))
})

export default withRouter(connect(null, mapDispatchToProps)(StripeCheckoutButton));
