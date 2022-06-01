import React from "react";
import {AiFillDatabase} from 'react-icons/ai';
import styles from './Sidebar.module.css'

function Sidebar({currentDb, setCurrentDb}) {

    return (

        <div className={styles.sidebarContainer}>
            <div>
                <h2>Databases</h2>
            </div>
            <div>
                <div className={`${styles.db} ${currentDb === 1 && styles.currentDb}`} onClick = {() => setCurrentDb(1)}>
                    <div className={styles.dbIcon}>
                        <AiFillDatabase />
                    </div>
                    <h3>Students DB</h3>
                </div>
                <div className={`${styles.db} ${currentDb === 2 && styles.currentDb}`} onClick = {() => setCurrentDb(2)}>
                    <div className={styles.dbIcon}>
                        <AiFillDatabase />
                    </div>
                     <h3>Teachers DB</h3>
                </div>
                <div className={`${styles.db} ${currentDb === 3 && styles.currentDb}`} onClick = {() => setCurrentDb(3)}>
                    <div className={styles.dbIcon}>
                        <AiFillDatabase />
                    </div>
                     <h3>Staff DB</h3>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;