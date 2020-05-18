import React from 'react';
import { Table } from 'react-bootstrap';
import RecordObject from './RecordObject';
import RecordPerson from './RecordPerson';
import RecordImage from './RecordImage';

const Records = ({ resource, records }) => {
  return (
    <Table responsive striped bordered hover>
      <thead>
        {resource === 'image' && (
          <tr>
            <th>Image</th>
          </tr>
        )}
        {resource === 'person' && (
          <tr>
            <th>Date End</th>
            <th>Alpha Sort</th>
            <th>Display Date</th>
            <th>Death Place</th>
            <th>Object Count</th>
            <th>ID</th>
            <th>Last Update</th>
            <th>Date Begin</th>
            <th>Birth Place</th>
            <th>Person ID</th>
            <th>Gender</th>
            <th>Culture</th>
            <th>Display Name</th>
            <th>URL</th>
          </tr>
        )}
        {resource === 'object' && (
          <tr>
            <th>Accession Year</th>
            <th>Technique</th>
            <th>Media Count</th>
            <th>Edition</th>
            <th>Views</th>
            <th>Group Count</th>
            <th>Object No.</th>
            <th>Color Count</th>
            <th>Last Update</th>
            <th>Rank</th>
            <th>Image Count</th>
            <th>Description</th>
            <th>Date of last page view</th>
            <th>Date of first page view</th>
            <th>Primary Image URL</th>
            <th>Dated</th>
            <th>Contextual Text Count</th>
            <th>Copyright</th>
            <th>Period</th>
            <th>Accession Method</th>
            <th>URL</th>
            <th>Provenance</th>
            <th>Publication Count</th>
            <th>Object ID</th>
            <th>Culture</th>
            <th>Verification Level Description</th>
            <th>Standard Reference Number</th>
            <th>Department</th>
            <th>State</th>
            <th>Marks Count</th>
            <th>Contact</th>
            <th>Titles Count</th>
            <th>ID</th>
            <th>Title</th>
            <th>Verification Level</th>
            <th>Division</th>
            <th>Style</th>
            <th>Commentary</th>
            <th>Related Count</th>
            <th>Date Begin</th>
            <th>Label Text</th>
            <th>Total Unique Page Views</th>
            <th>Lending Permission Level</th>
            <th>Dimensions</th>
            <th>Exhibition Count</th>
            <th>Technique ID</th>
            <th>Date End</th>
            <th>Credit Line</th>
            <th>Image Permission Level</th>
            <th>Signed</th>
            <th>Period ID</th>
            <th>Century</th>
            <th>Classification ID</th>
            <th>Medium</th>
            <th>People Count</th>
            <th>Access Level</th>
            <th>Classification</th>
          </tr>
        )}
      </thead>
      <tbody>
        {resource === 'image' && <RecordImage records={records} />}
        {resource === 'object' && <RecordObject records={records} />}
        {resource === 'person' && <RecordPerson records={records} />}
      </tbody>
    </Table>
  );
};

export default Records;
