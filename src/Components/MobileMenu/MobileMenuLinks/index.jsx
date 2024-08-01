import s from "./s.module.css";

import React from "react";
import { VscClose } from "react-icons/vsc";

export default function MobileMenuLinks({ setMobileMenuLinks }) {
    return (
        <div className={s.background_menuLinks}>
            <p className={s.closeMenu} onClick={() => setMobileMenuLinks(false)}>
                <VscClose />
            </p>
            <div className={s.wrap_mobileMenuLinks}>
                <a href="#" onClick={() => setMobileMenuLinks(false)}>
                    Categories
                </a>
                <a href="#" onClick={() => setMobileMenuLinks(false)}>
                    Hits
                </a>
                <a href="#" onClick={() => setMobileMenuLinks(false)}>
                    Sales
                </a>
                <a href="#" onClick={() => setMobileMenuLinks(false)}>
                    About us
                </a>
                <a href="#" onClick={() => setMobileMenuLinks(false)}>
                    Contacts
                </a>{" "}
            </div>
        </div>
    );
}
