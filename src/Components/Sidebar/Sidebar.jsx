import React, { useState, useSyncExternalStore } from "react";
import styles from './Sidebar.module.css'

function Sidebar({currentDb, setCurrentDb}) {

    return (

        <div className={styles.sidebarContainer}>
            <div>
                <h2>Databases</h2>
            </div>
            <div>
                <div className={`${styles.db} ${currentDb === 1 && styles.currentDb}`} onClick = {() => setCurrentDb(1)}>
                    <h3>Employees DB</h3>
                </div>
                <div className={`${styles.db} ${currentDb === 2 && styles.currentDb}`} onClick = {() => setCurrentDb(2)}>
                     <h3>Students DB</h3>
                </div>
                <div className={`${styles.db} ${currentDb === 3 && styles.currentDb}`} onClick = {() => setCurrentDb(3)}>
                     <h3>Food DB</h3>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;