import "./index.css";
import React, { useState } from "react";

const App = () => {
  const initialState = {
    salesPrice: "",
    downPayment: "",
    omvicPrice: "",
    secureGuard: "",
    pstPrice: "",
    gstPrice: "",
    fuelPrice: "",
    ppsaPrice: "",
    interest: "",
    total: "",
  };
  const [data, setData] = useState(initialState);
  const {
    salesPrice,
    downPayment,
    omvicPrice,
    secureGuard,
    pstPrice,
    gstPrice,
    fuelPrice,
    ppsaPrice,
    interest,
    total,
  } = data;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: Number(value),
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setData({
      ...data,
      total:
        salesPrice +
        omvicPrice +
        secureGuard +
        Number((salesPrice * (pstPrice / 100)).toFixed(2)) +
        Number((salesPrice * (gstPrice / 100)).toFixed(2)) +
        fuelPrice +
        ppsaPrice -
        downPayment,
    });
  };
  const handleAutofill = (e) => {
    e.preventDefault();
    setData((prevData) => {
      return {
        ...prevData,
        omvicPrice: 10,
        secureGuard: 0,
        pstPrice: 8,
        gstPrice: 5,
        fuelPrice: 50,
        ppsaPrice: 85,
      };
    });
  };
  const handleReset = (e) => {
    e.preventDefault();
    setData(initialState);
  };
  return (
    <>
      <h1>Vehicle Financing Canada</h1>
      <p>
        In the current market, default OMVIC is $10, SecureGuard fee is
        optional, PST is 8%, GST is 5%, fuel cost rough estimate is $50, PPSA is
        $85. I have left these fields open to adjustments considering future
        market rate changes. Check&nbsp;
        <a
          href="https://github.com/tpkahlon/javascript"
          target="_blank"
          rel="noopener noreferrer"
        >
          here&nbsp;
        </a>
        to get awareness of possible auto scheme scams during purchase. If you
        have suggestions for improvement, please create a pull request{" "}
        <a
          href="https://gem.cbc.ca/media/marketplace/season-45/episode-8/38e815a-00d5c4d9cd5"
          target="_blank"
          rel="noopener noreferrer"
        >
          this
        </a>
        .
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="salesPrice">Sales Price ($):</label>
          <input
            name="salesPrice"
            id="salesPrice"
            value={salesPrice}
            type="number"
            placeholder="12000"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="downPayment">Down Payment ($):</label>
          <input
            name="downPayment"
            id="downPayment"
            value={downPayment}
            type="number"
            placeholder="4000"
            onChange={handleChange}
          />
        </div>
        <div>
          <a
            href="https://www.omvic.on.ca/portal/DealersSalespersons/FAQ/TransactionFee.aspx"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <span>&#9432;</span>
          </a>
          <label htmlFor="omvicPrice">OMVIC ($):</label>
          <input
            name="omvicPrice"
            id="omvicPrice"
            value={omvicPrice}
            type="number"
            placeholder="10"
            onChange={handleChange}
          />
        </div>
        <div>
          <a
            href="https://forums.redflagdeals.com/ride-green-secured-fees-dealership-2313187/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <span>&#9432;</span>
          </a>
          <label htmlFor="secureGuard">SecureGuard Registration ($):</label>
          <input
            name="secureGuard"
            id="secureGuard"
            value={secureGuard}
            type="number"
            placeholder="0"
            onChange={handleChange}
          />
        </div>
        <div>
          <a
            href="https://www.retailcouncil.org/resources/quick-facts/sales-tax-rates-by-province/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <span>&#9432;</span>
          </a>
          <label htmlFor="pstPrice">P.S.T (%):</label>
          <input
            name="pstPrice"
            id="pstPrice"
            value={pstPrice}
            type="number"
            placeholder="8"
            onChange={handleChange}
          />
        </div>
        <div>
          <a
            href="https://turbotax.intuit.ca/tips/tax-tip-do-you-have-to-pay-taxes-on-used-cars-in-british-columbia-canada-156"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <span>&#9432;</span>
          </a>
          <label htmlFor="gstPrice">G.S.T (%):</label>
          <input
            name="gstPrice"
            id="gstPrice"
            value={gstPrice}
            type="number"
            placeholder="5"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="fuelPrice">Fuel (including G.S.T, $):</label>
          <input
            name="fuelPrice"
            id="fuelPrice"
            value={fuelPrice}
            type="number"
            placeholder="50"
            onChange={handleChange}
          />
        </div>
        <div>
          <a
            href="https://en.wikipedia.org/wiki/Personal_Property_Security_Act_(Canada)"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <span>&#9432;</span>
          </a>
          <label htmlFor="ppsaPrice">P.P.S.A ($):</label>
          <input
            name="ppsaPrice"
            id="ppsaPrice"
            value={ppsaPrice}
            type="number"
            placeholder="85"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="interest">Interest (%):</label>
          <input
            name="interest"
            id="interest"
            value={interest}
            type="number"
            placeholder="6.49"
            step="0.01"
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Calculate</button>
          <button onClick={handleAutofill}>Auto Fill</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </form>
      {total !== null && (
        <>
          <h2>Total amount to be financed: ${total.toFixed(2)}</h2>
          <table>
            <thead>
              <tr>
                <th>Terms</th>
                <th>Monthly</th>
                <th>Biweekly</th>
                <th>Weekly</th>
                <th>
                  Financed
                  <br />
                  Amount
                  <br />
                  +
                  <br />
                  Interest
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1 year</td>
                <td>
                  ${(total / 12 + ((total / 12) * interest) / 100).toFixed(2)}
                </td>
                <td>
                  $
                  {(
                    (total / 12 + ((total / 12) * interest) / 100) /
                    2.17
                  ).toFixed(2)}
                </td>
                <td>
                  $
                  {(
                    (total / 12 + ((total / 12) * interest) / 100) /
                    4.17
                  ).toFixed(2)}
                </td>
                <td>
                  $
                  {(
                    (total / 12 + ((total / 12) * interest) / 100) *
                    12
                  ).toFixed(2)}
                </td>
              </tr>
              <tr>
                <td>2 years</td>
                <td>
                  ${(total / 24 + ((total / 24) * interest) / 100).toFixed(2)}
                </td>
                <td>
                  $
                  {(
                    (total / 24 + ((total / 24) * interest) / 100) /
                    2.17
                  ).toFixed(2)}
                </td>
                <td>
                  $
                  {(
                    (total / 24 + ((total / 24) * interest) / 100) /
                    4.17
                  ).toFixed(2)}
                </td>
                <td>
                  $
                  {(
                    (total / 24 + ((total / 24) * interest) / 100) *
                    24
                  ).toFixed(2)}
                </td>
              </tr>
              <tr>
                <td>3 years</td>
                <td>
                  ${(total / 36 + ((total / 36) * interest) / 100).toFixed(2)}
                </td>
                <td>
                  $
                  {(
                    (total / 36 + ((total / 36) * interest) / 100) /
                    2.17
                  ).toFixed(2)}
                </td>
                <td>
                  $
                  {(
                    (total / 36 + ((total / 36) * interest) / 100) /
                    4.17
                  ).toFixed(2)}
                </td>
                <td>
                  $
                  {(
                    (total / 36 + ((total / 36) * interest) / 100) *
                    36
                  ).toFixed(2)}
                </td>
              </tr>
              <tr>
                <td>4 years</td>
                <td>
                  ${(total / 48 + ((total / 48) * interest) / 100).toFixed(2)}
                </td>
                <td>
                  $
                  {(
                    (total / 48 + ((total / 48) * interest) / 100) /
                    2.17
                  ).toFixed(2)}
                </td>
                <td>
                  $
                  {(
                    (total / 48 + ((total / 48) * interest) / 100) /
                    4.17
                  ).toFixed(2)}
                </td>
                <td>
                  $
                  {(
                    (total / 48 + ((total / 48) * interest) / 100) *
                    48
                  ).toFixed(2)}
                </td>
              </tr>
              <tr>
                <td>5 years</td>
                <td>
                  ${(total / 60 + ((total / 60) * interest) / 100).toFixed(2)}
                </td>
                <td>
                  $
                  {(
                    (total / 60 + ((total / 60) * interest) / 100) /
                    2.17
                  ).toFixed(2)}
                </td>
                <td>
                  $
                  {(
                    (total / 60 + ((total / 60) * interest) / 100) /
                    4.17
                  ).toFixed(2)}
                </td>
                <td>
                  $
                  {(
                    (total / 60 + ((total / 60) * interest) / 100) *
                    60
                  ).toFixed(2)}
                </td>
              </tr>
              <tr>
                <td>6 years</td>
                <td>
                  ${(total / 72 + ((total / 72) * interest) / 100).toFixed(2)}
                </td>
                <td>
                  $
                  {(
                    (total / 72 + ((total / 72) * interest) / 100) /
                    2.17
                  ).toFixed(2)}
                </td>
                <td>
                  $
                  {(
                    (total / 72 + ((total / 72) * interest) / 100) /
                    4.17
                  ).toFixed(2)}
                </td>
                <td>
                  $
                  {(
                    (total / 72 + ((total / 72) * interest) / 100) *
                    72
                  ).toFixed(2)}
                </td>
              </tr>
              <tr>
                <td>7 years</td>
                <td>
                  ${(total / 84 + ((total / 84) * interest) / 100).toFixed(2)}
                </td>
                <td>
                  $
                  {(
                    (total / 84 + ((total / 84) * interest) / 100) /
                    2.17
                  ).toFixed(2)}
                </td>
                <td>
                  $
                  {(
                    (total / 84 + ((total / 84) * interest) / 100) /
                    4.17
                  ).toFixed(2)}
                </td>
                <td>
                  $
                  {(
                    (total / 84 + ((total / 84) * interest) / 100) *
                    84
                  ).toFixed(2)}
                </td>
              </tr>
              <tr>
                <td>8 years</td>
                <td>
                  ${(total / 96 + ((total / 96) * interest) / 100).toFixed(2)}
                </td>
                <td>
                  $
                  {(
                    (total / 96 + ((total / 96) * interest) / 100) /
                    2.17
                  ).toFixed(2)}
                </td>
                <td>
                  $
                  {(
                    (total / 96 + ((total / 96) * interest) / 100) /
                    4.17
                  ).toFixed(2)}
                </td>
                <td>
                  $
                  {(
                    (total / 96 + ((total / 96) * interest) / 100) *
                    96
                  ).toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default App;
