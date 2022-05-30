import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import Nav from './Components/Nav/Nav';
import Sidebar from './Components/Sidebar/Sidebar';
import Query from './Components/Query/Query';
import Table from './Components/Table/Table';
import makeData from './makeData'
import { findResult } from './findResuls';

function App() {

  const [resultsColumn, setResultsColumn] = useState(null);
  const  [currentDb, setCurrentDb] = useState(1);
  const [newData, setNewData] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  const setResults = (query) => {
    const results = findResult(query);
    setResultsColumn(results);
  }
  let data;
  useEffect(() => {
    data = makeData(20);
    setNewData(data);
    setOriginalData(data);
    setResultsColumn(null);
    console.log(data);
  }, [currentDb])

  
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Age',
            accessor: 'age',
          },
          {
            Header: 'Visits',
            accessor: 'visits',
          },
          {
            Header: 'Status',
            accessor: 'status',
          },
          {
            Header: 'Profile Progress',
            accessor: 'progress',
          },
        ],
      },
    ],
    []
  )

  
  const [search,  setSearch] = useState('');
  useEffect(() => {
    if(search === ''){
      setNewData(originalData);
    }else{
      console.log('searching, ', search)
      data = newData;
      setNewData([]);
      let searchedResults = [];
      if(search.length > 0){
        originalData.forEach(element => {
          for(const val of Object.values(element)){
          if(String(val).includes(search)){
            console.log("serach[i], ",element)
            searchedResults.push(element);
            break;
          }}
        });
        setNewData(searchedResults);
      }
      console.log('searched results', newData);
    }
    //if(newData.length === 0) setNewData(data);

  }, [search])

  

  return (
    <div className={styles.App}>
      <div className={styles.nav}>
        <Nav />
      </div>
      <div className={styles.container}>
          <Sidebar currentDb = {currentDb} setCurrentDb = {setCurrentDb} />
        <div className={styles.mainContainer}>
            <div>
              <input onChange={(e) => setSearch(e.target.value)}></input>
              {<Table columns={columns} data={newData.length === 0 ? originalData : newData} /> }
            </div>
            <div>
              <Query runQuery = {setResults}/>
              <div className={styles.resultsContainer}>
                   {resultsColumn &&  <Table columns={resultsColumn} data={originalData} /> }
               </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
