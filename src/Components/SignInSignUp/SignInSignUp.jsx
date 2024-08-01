import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import s from './SignInSignUp.module.css';

const SignInSignUp = () => {
const [isRightPanelActive, setRightPanelActive] = useState(false);

const handleSignUpClick = () => {
setRightPanelActive(true);
};

const handleSignInClick = () => {
setRightPanelActive(false);
};

return (
    <div className={`${s.container} ${isRightPanelActive ? s.rightPanelActive : ''}`} id="container">
        <div className={`${s.formContainer} ${s.signUpContainer}`}>
            <form action="#">
                <h1>Create Account</h1>
                <div className={s.socialMedia}></div>
                <span>or sign up using your email account</span>
                <input type="text" placeholder="Name" required />
                <input type="text" placeholder="Email" required />
                <input type="text" placeholder="Password" required />
                <button>Sign Up</button>
            </form>
        </div>
        <div className={`${s.formContainer} ${s.logInContainer}`}>
            <form action="#">
                <h1>Log In</h1>
                <div className={s.socialMedia}>
                <a href="#" className={s.social}><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="#" className={s.social}><FontAwesomeIcon icon={faGooglePlusG} /></a>
                <a href="#" className={s.social}><FontAwesomeIcon icon={faLinkedinIn} /></a>
                </div>
                <span>or sign up using your email account</span>
                <input type="text" placeholder="Email" required />
                <input type="text" placeholder="Password" required />
                <a href="#">Forgot your password?</a>
                <button>Sign In</button>
            </form>
        </div>
        <div className={s.overlayContainer}>
            <div className={s.overlay}>
                <div className={`${s.overlayPanel} ${s.left}`}>
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>
                <button className={`${s.ghost}`} id="signIn" onClick={handleSignInClick}>Log In</button>
                </div>
                <div className={`${s.overlayPanel} ${s.right}`}>
                <h1>Howdy, Stranger!</h1>
                <p>Sign up for an account and start your journey now!!</p>
                <button className={`${s.ghost}`} id="signUp" onClick={handleSignUpClick}>Sign Up</button>
                </div>
            </div>
        </div>
    </div>
);
};

export default SignInSignUp;
