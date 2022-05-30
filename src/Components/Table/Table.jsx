import { fireEvent } from '@testing-library/react';
import React, { useState } from 'react'
//import styled from 'styled-components'
import { useTable } from 'react-table'


function Table({ columns, data, search = 'ab' }) {
  // Use the state and functions returned from useTable to build your UI

  

  

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  // if(newData.length === 0){
  //   console.log("No New Data")
  //   return (<div></div>);
  // }
   

  // Render the UI for your table
  return (
    <table {...getTableProps()} style={{textAlign:'center', }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table> 
  )
}


export default Table;
