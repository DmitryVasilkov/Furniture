import React from 'react';
import Eyebrow from '../../Components/Eyebrow/Eyebrow';
import NavbarDark from '../../Components/NavbarDark/NavbarDark';
import SignInSignUp from '../../Components/SignInSignUp/SignInSignUp';
import Footer from '../../Components/Footer/Footer';
import SignInSignUpMedia from '../../Components/SignInSignUpMedia/SignInSignUpMedia';
import useWindowWidth from '../../Hooks/useWindowWidth';

function LoginPage() {

  const width = useWindowWidth();

  return (
    <>
      <Eyebrow />
      <NavbarDark />
      {width <= 768 ? <SignInSignUpMedia /> : <SignInSignUp />}
      <Footer />
    </>
  );
}

export default LoginPage;
