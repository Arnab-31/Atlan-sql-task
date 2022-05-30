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

  const setResults = (query) => {
    const results = findResult(query);
    setResultsColumn(results);
  }
  let data = makeData(20);
  useEffect(() => {
    data = makeData(20);
    setResultsColumn(null);
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

  
  

  return (
    <div className={styles.App}>
      <div className={styles.nav}>
        <Nav />
      </div>
      <div className={styles.container}>
          <Sidebar currentDb = {currentDb} setCurrentDb = {setCurrentDb} />
        <div className={styles.mainContainer}>
            <div>
              <Table columns={columns} data={data} />
            </div>
            <div>
              <Query runQuery = {setResults}/>
              <div className={styles.resultsContainer}>
                   {resultsColumn && <Table columns={resultsColumn} data={data} /> }
               </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
