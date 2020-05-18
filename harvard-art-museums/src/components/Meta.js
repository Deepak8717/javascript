import React from 'react';
import { Table } from 'react-bootstrap';

const Meta = ({ headingValues }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Records in Query</th>
          <th>Total Records</th>
          <th>Total Pages</th>
          <th>Current Page</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {headingValues.map((i, index) => (
            <th key={index}>{i}</th>
          ))}
        </tr>
      </tbody>
    </Table>
  );
};

export default Meta;
