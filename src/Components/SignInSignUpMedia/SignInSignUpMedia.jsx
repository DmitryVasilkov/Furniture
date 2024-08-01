import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import s from './SignInSignUpMedia.module.css';

const SignInSignUpMedia = () => {

const [isRightPanelActive, setRightPanelActive] = useState(false);

const handleSignUpClick = () => {
setRightPanelActive(true);
};

const handleSignInClick = () => {
setRightPanelActive(false);
};

return (
<div className={s.container} id="container">
    <div className={s.formContainer}>
    <form className={s.form}>
        <h1>Log In</h1>
        <input type="text" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button>Log In</button>
        <p>Still not a member?</p>
        <button type="button" className={s.secondaryButton} onClick={handleSignUpClick}>Sign Up</button>
        <div className={s.socialMedia}>
        <a href="#" className={s.social}><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="#" className={s.social}><FontAwesomeIcon icon={faGooglePlusG} /></a>
        <a href="#" className={s.social}><FontAwesomeIcon icon={faLinkedinIn} /></a>
        </div>
    </form>
    </div>
</div>
);
};

export default SignInSignUpMedia;
