import React, { useState } from "react";
import styles from './Query.module.css'

const  Query = React.memo(function Query({runQuery}){
    const [select, setSelect] = useState("*");
    const [db , setDb] = useState("Students");
    const [filter , setFilter] = useState("profileProgress>50");
    const [savedQueries, setSavedQueries] = useState([{ select : "*",
    db : "Students",
    filter: "profileProgress>50"}]);

    const setQuery  = (query) => {
        const values = query.split(" ");
        setSelect(values[1]);
        setDb(values[3]);
        setFilter(values[5]);
    }

    const saveQuery  = () => {
        let currentQueries = savedQueries;
        let queryPresent = false;
        
        savedQueries.forEach((query) => {
            if(query.select === select && query.db === db && query.filter === filter) 
            {
                queryPresent = true;
                return;
            }
        })

        if(!queryPresent){
            setSavedQueries([...currentQueries, {
                select : select,
                db : db,
                filter: filter
            }]);
        }
    }

    const run = () => {
        const query = `Select ${select} from ${db} where ${filter}`
        runQuery(query);
    }

    return (
        <div className={styles.queryContainer}>
            
           <div>
                <div className = {styles.panel}>
                    <div>
                        <button onClick={run} className={styles.btn}>Run</button>
                        <button onClick={saveQuery} className={styles.btn}>Save Query</button>
                    </div>
                    <div className={styles.savedQueriesDiv}>
                        <p>Saved Queries</p>
                        <select onChange={(e) => setQuery(e.target.value)}>
                        {savedQueries.map((query, idx) => (
                            <option key={idx} >{`Select ${query.select} from ${query.db} where ${query.filter}`}</option>
                        ))}
                        </select>
                    </div>
                </div>
               <div className={styles.query}>
                   <label htmlFor="query"></label>
                   <p>Select</p>
                   <select onChange={(e) => setSelect(e.target.value)} value={select}>
                       <option>*</option>
                       <option>FirstName,LastName</option>
                       <option>Age</option>
                       <option>Age,Status</option>
                   </select>
                   <p>from</p>
                   <select onChange={(e) => setDb(e.target.value)} value={db}>
                       <option>Students</option>
                       <option>Teachers</option>
                       <option>Staff</option>
                   </select>
                    <p>where</p>
                   <select  onChange={(e) => setFilter(e.target.value)} value={filter}>
                       <option>profileProgress>50</option>
                       <option>status='Single'</option>
                       <option>age>21</option>
                       <option>{`visitis<50`}</option>
                   </select>
               </div>   
            </div>
        <div>

    </div>
        </div>
    )
})

export default Query;