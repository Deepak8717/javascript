import React from 'react';
import { Image } from 'react-bootstrap';

const RecordObject = ({ records }) => {
  return (
    <>
      {records.map((i, index) => {
        const {
          accessionyear,
          technique,
          mediacount,
          edition,
          totalpageviews,
          groupcount,
          objectnumber,
          colorcount,
          lastupdate,
          rank,
          imagecount,
          description,
          dateoflastpageview,
          dateoffirstpageview,
          primaryimageurl,
          dated,
          contextualtextcount,
          copyright,
          period,
          accessionmethod,
          url,
          provenance,
          images,
          objectid,
          culture,
          verificationleveldescription,
          standardreferencenumber,
          department,
          state,
          markscount,
          contact,
          titlescount,
          id,
          title,
          verificationlevel,
          division,
          style,
          commentary,
          relatedcount,
          datebegin,
          labeltext,
          totaluniquepageviews,
          lendingpermissionlevel,
          dimensions,
          exhibitioncount,
          techniqueid,
          dateend,
          creditline,
          imagepermissionlevel,
          signed,
          periodid,
          century,
          classificationid,
          medium,
          peoplecount,
          accesslevel,
          classification,
        } = i;
        return (
          <tr key={index}>
            <td>{accessionyear}</td>
            <td>{technique === null ? 'N/A' : technique}</td>
            <td>{mediacount === null ? 'N/A' : mediacount}</td>
            <td>{edition === null ? 'N/A' : edition}</td>
            <td>{totalpageviews === null ? 'N/A' : totalpageviews}</td>
            <td>{groupcount === null ? 'N/A' : groupcount}</td>
            <td>{objectnumber === null ? 'N/A' : objectnumber}</td>
            <td>{colorcount === null ? 'N/A' : colorcount}</td>
            <td>{lastupdate === null ? 'N/A' : lastupdate}</td>
            <td>{rank === null ? 'N/A' : rank}</td>
            <td>{imagecount === null ? 'N/A' : imagecount}</td>
            <td>{description === null ? 'N/A' : description}</td>
            <td>{dateoflastpageview === null ? 'N/A' : dateoflastpageview}</td>
            <td>
              {dateoffirstpageview === null ? 'N/A' : dateoffirstpageview}
            </td>
            <td>{primaryimageurl === null ? 'N/A' : primaryimageurl}</td>
            <td>{dated === null ? 'N/A' : dated}</td>
            <td>
              {contextualtextcount === null ? 'N/A' : contextualtextcount}
            </td>
            <td>{copyright === null ? 'N/A' : copyright}</td>
            <td>{period === null ? 'N/A' : period}</td>
            <td>{accessionmethod === null ? 'N/A' : accessionmethod}</td>
            <td>{url === null ? 'N/A' : url}</td>
            <td>{provenance === null ? 'N/A' : provenance}</td>
            <td>
              {images === null || !images || images.length === 0
                ? 'N/A'
                : images.map((i, idx) => (
                    <Image
                      fluid
                      rounded
                      key={idx}
                      src={i.baseimageurl}
                      alt={i.copyright}
                    />
                  ))}
            </td>
            <td>{objectid === null ? 'N/A' : objectid}</td>
            <td>{culture === null ? 'N/A' : culture}</td>
            <td>
              {verificationleveldescription === null
                ? 'N/A'
                : verificationleveldescription}
            </td>
            <td>
              {standardreferencenumber === null
                ? 'N/A'
                : standardreferencenumber}
            </td>
            <td>{department === null ? 'N/A' : department}</td>
            <td>{state === null ? 'N/A' : state}</td>
            <td>{markscount === null ? 'N/A' : markscount}</td>
            <td>{contact === null ? 'N/A' : contact}</td>
            <td>{titlescount === null ? 'N/A' : titlescount}</td>
            <td>{id === null ? 'N/A' : id}</td>
            <td>{title === null ? 'N/A' : title}</td>
            <td>{verificationlevel === null ? 'N/A' : verificationlevel}</td>
            <td>{division === null ? 'N/A' : division}</td>
            <td>{style === null ? 'N/A' : style}</td>
            <td>{commentary === null ? 'N/A' : commentary}</td>
            <td>{relatedcount === null ? 'N/A' : relatedcount}</td>
            <td>{datebegin === null ? 'N/A' : datebegin}</td>
            <td>{labeltext === null ? 'N/A' : labeltext}</td>
            <td>
              {totaluniquepageviews === null ? 'N/A' : totaluniquepageviews}
            </td>
            <td>
              {lendingpermissionlevel === null ? 'N/A' : lendingpermissionlevel}
            </td>
            <td>{dimensions === null ? 'N/A' : dimensions}</td>
            <td>{exhibitioncount === null ? 'N/A' : exhibitioncount}</td>
            <td>{techniqueid === null ? 'N/A' : techniqueid}</td>
            <td>{dateend === null ? 'N/A' : dateend}</td>
            <td>{creditline === null ? 'N/A' : creditline}</td>
            <td>
              {imagepermissionlevel === null ? 'N/A' : imagepermissionlevel}
            </td>
            <td>{signed === null ? 'N/A' : signed}</td>
            <td>{periodid === null ? 'N/A' : periodid}</td>
            <td>{century === null ? 'N/A' : century}</td>
            <td>{classificationid === null ? 'N/A' : classificationid}</td>
            <td>{medium === null ? 'N/A' : medium}</td>
            <td>{peoplecount === null ? 'N/A' : peoplecount}</td>
            <td>{accesslevel === null ? 'N/A' : accesslevel}</td>
            <td>{classification === null ? 'N/A' : classification}</td>
          </tr>
        );
      })}
    </>
  );
};

export default RecordObject;
