import React from 'react';
import { Image } from 'react-bootstrap';

const RecordImage = ({ records }) => {
  return (
    <>
      {records.map((i) => {
        const { imageid, baseimageurl } = i;
        return (
          <tr key={imageid}>
            <td>
              {baseimageurl === null ? (
                'N/A'
              ) : (
                <Image fluid rounded src={baseimageurl} />
              )}
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default RecordImage;
