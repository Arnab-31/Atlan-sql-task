import React, { useState } from "react";
import styles from './Query.module.css'

function Query({runQuery}) {
    const [select, setSelect] = useState();
    const [db , setDb] = useState();
    const [filter , setFilter] = useState();
    const [savedQueries, setSavedQueries] = useState([{ select : "fcs",
    db : "scsc",
    filter: 'scds'}]);

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
                console.log('true');
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
            console.log(savedQueries);
            console.log(currentQueries);
        }
    }

    const run = () => {
        const query = `Select ${select} from ${db} where ${filter}`
        runQuery(query);
    }

    return (
        <div className={styles.queryContainer}>
            
           <div>
                <button onClick={run}>Run</button>
                <button onClick={saveQuery}>Save Query</button>
                <br/>
               <div className={styles.query}>
                   <label for="query"></label>
                   <p>Select</p>
                   <select onChange={(e) => setSelect(e.target.value)} value={select}>
                       <option>*</option>
                       <option>Employees</option>
                       <option>Salary</option>
                   </select>
                   <p>from</p>
                   <select onChange={(e) => setDb(e.target.value)} value={db}>
                    <option>Company</option>
                       <option>School</option>
                   </select>
                    <p>where</p>
                   <select  onChange={(e) => setFilter(e.target.value)} value={filter}>
                       <option>salary>5000</option>
                       <option>id=2</option>
                       <option>department='Engineering'</option>
                   </select>
               </div>

               
                <p>Saved Queries</p>
                <select onChange={(e) => setQuery(e.target.value)}>
                {savedQueries.map((query) => (
                    <option>{`Select ${query.select} from ${query.db} where ${query.filter}`}</option>
                ))}
                </select>
            </div>
        <div>

    </div>
        </div>
    )
}

export default Query;