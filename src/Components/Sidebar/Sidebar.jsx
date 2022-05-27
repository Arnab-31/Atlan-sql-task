import React from "react";
import styles from './Sidebar.module.css'

function Sidebar() {
    return (
        <div className={styles.sidebarContainer}>
            <div>
                <h2>Databases</h2>
            </div>
            <div>
                <div className={styles.db}>
                    <h3>Employees DB</h3>
                </div>
                <div className={styles.db}>
                     <h3>Students DB</h3>
                </div>
                <div className={styles.db}>
                     <h3>Food DB</h3>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;