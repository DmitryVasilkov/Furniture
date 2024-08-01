import React, { useState } from "react";
import s from "./s.module.css";
import { HiOutlineHome } from "react-icons/hi";
import { TiShoppingCart } from "react-icons/ti";
import { RxHamburgerMenu } from "react-icons/rx";

import MobileMenuLinks from "./MobileMenuLinks";

export default function MobileMenu() {

    const [mobileMenuLinks, setMobileMenuLinks] = useState(false);

    return (
        <>
            {mobileMenuLinks && <MobileMenuLinks setMobileMenuLinks={setMobileMenuLinks} />}

            <div className={s.mobileMenu}>
                <a href="#">
                    <HiOutlineHome /> 
                    <p>Main</p>
                </a>
                <a href="#">
                    <TiShoppingCart />
                    <p>Cart</p>
                </a>
                <a href="#" onClick={() => setMobileMenuLinks(true)}>
                    <RxHamburgerMenu />
                    <p>Menu</p>
                </a>
            </div>
        </>
    );
}
