import React from 'react';
import { Button } from 'react-bootstrap';

const RecordPerson = ({ records }) => {
  return (
    <>
      {records.map((i, index) => {
        const {
          dateend,
          alphasort,
          displaydate,
          deathplace,
          objectcount,
          id,
          lastupdate,
          datebegin,
          birthplace,
          personid,
          gender,
          culture,
          displayname,
          url,
        } = i;
        return (
          <tr key={index}>
            <td>{dateend === null ? 'N/A' : dateend}</td>
            <td>{displaydate === null ? 'N/A' : displaydate}</td>
            <td>{alphasort === null ? 'N/A' : alphasort}</td>
            <td>{deathplace === null ? 'N/A' : deathplace}</td>
            <td>{objectcount === null ? 'N/A' : objectcount}</td>
            <td>{id === null ? 'N/A' : id}</td>
            <td>{lastupdate === null ? 'N/A' : lastupdate}</td>
            <td>{datebegin === null ? 'N/A' : datebegin}</td>
            <td>{birthplace === null ? 'N/A' : birthplace}</td>
            <td>{personid === null ? 'N/A' : personid}</td>
            <td>{gender === null ? 'N/A' : gender}</td>
            <td>{culture === null ? 'N/A' : culture}</td>
            <td>{displayname === null ? 'N/A' : displayname}</td>
            <td>
              {url === null ? (
                'N/A'
              ) : (
                <Button
                  href={url}
                  variant='primary'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View
                </Button>
              )}
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default RecordPerson;
