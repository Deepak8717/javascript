import React from "react";
import {
  FaPhone,
  FaCircle,
  FaMinusCircle,
  FaShoppingCart,
  FaMapMarker,
} from "react-icons/fa";

const Store = ({ store }) => {
  const {
    address,
    name,
    geoPoint,
    contactNumber,
    openNowResponseData,
    storeId,
  } = store;
  const { line1, postalCode } = address;
  return (
    <>
      {geoPoint && (
        <article>
          <div>
            <a
              href={`https://www.nofrills.ca/store-locator/details/${storeId}?icta=pickup-details-modal`}
              rel="noopener noreferrer"
              target="_blank"
              className="name"
            >
              {name}
            </a>
            <nav>
              {line1 && (
                <span>
                  {line1}
                  {postalCode && (
                    <>
                      <br />
                      {postalCode}
                    </>
                  )}
                </span>
              )}
              {!openNowResponseData.openNow && openNowResponseData.hours && (
                <span>
                  Today:
                  <br />
                  {openNowResponseData.hours}
                </span>
              )}
            </nav>
          </div>
          {openNowResponseData && (
            <div className="icons">
              {openNowResponseData.openNow ? (
                <span className="on">
                  <FaMinusCircle />
                </span>
              ) : (
                <span className="off">
                  <FaCircle />
                </span>
              )}
              {contactNumber && (
                <a
                  href={`tel:${contactNumber}`}
                  rel="noopener noreferrer"
                  className="icon"
                >
                  <FaPhone />
                </a>
              )}
              {postalCode && (
                <a
                  href={`https://www.google.com/maps/?q=${postalCode}`}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="icon"
                >
                  <FaMapMarker />
                </a>
              )}
              {storeId && (
                <a
                  href={`https://flyers.nofrills.ca/flyers/nofrills?type=1&store_code=${storeId}&postal_code=${postalCode
                    .toLowerCase()
                    .replace(" ", "")}&locale=en#!/flyers/nofrills-weeklyflyer`}
                  rel="noopener noreferrer"
                  className="icon"
                  target="_blank"
                >
                  <FaShoppingCart />
                </a>
              )}
            </div>
          )}
        </article>
      )}
    </>
  );
};

export default Store;
