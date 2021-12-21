import React from "react";
import StripeCheckout from "react-stripe-checkout";
import "./StripeButton.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey =
    "pk_test_51K90jXEzhvaOc7U8xVBST3mNvqozKdrdLNH9pVwQQXnOXL523YEeUu8eXhNp3Kg0Nzihi2vWuol5zbr6GLcMhi2w00a9RiGXyP";

  const onToken = (token) => {
    console.log(token);
    alert("Payment successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://stripe.com/img/documentation/checkout/marketplace.png"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};

export default StripeCheckoutButton;

<Logo className="logo" />;
