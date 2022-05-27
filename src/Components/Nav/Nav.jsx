import React from "react";
import styles from './Nav.module.css'

function Nav() {
    return (
        <div className={styles.navContainer}>
            <div>
                <img style={{height:'40px'}} src="/Atlan-logo.avif" alt = "logo" ></img>
            </div>
        </div>
    )
}

export default Nav;