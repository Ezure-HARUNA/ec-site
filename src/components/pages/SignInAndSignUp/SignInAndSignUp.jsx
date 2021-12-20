import React from "react";
import SignIn from "../../sign-in/SignIn";
import "./SignInAndSignUp.styles.scss";
import SignUp from "../../sign-up/SignUp";

const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
