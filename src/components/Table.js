import React from "react";

class Table extends React.Component {
  render() {
    return (
      <table className="table table-striped mb-0">
        <thead>
          <tr className="text-muted">
            <th scope="col">
              <span className=" pl-3">NAME</span>
            </th>
            <th scope="col">EMAIL</th>
            <th scope="col">PRODUCT</th>
            <th scope="col">PRICE</th>
            <th scope="col">DATE</th>
            <th scope="col">CITY</th>
            <th scope="col">STATUS</th>
          </tr>
        </thead>
        <tbody className="text-dark">
          <tr>
            <th className="pl-4 fw-normal">Mark Otto</th>
            <td>ottoto@wxample.com</td>
            <td>ON the Road</td>
            <td>$25 224.2</td>
            <td>11 May 2017</td>
            <td>Otsego</td>
            <td>
              <button className="btn btn-xs p-1 px-3 btn-info">Sent</button>
            </td>
          </tr>
          <tr>
            <th className="pl-4">Jacob Thornton</th>
            <td>thornton@wxample.com</td>
            <td>HP Core i7</td>
            <td>$1 254.2</td>
            <td>4 Jun 2017</td>
            <td>Fivepointville</td>
            <td>
              <button className="btn btn-xs p-1 px-3 btn-info">Sent</button>
            </td>
          </tr>
          <tr>
            <th className="pl-4">Larry the Bird</th>
            <td>bird@wxample.com</td>
            <td>Air Pro</td>
            <td>$1 570.0</td>
            <td>27 Aug 2017</td>
            <td>Leadville North</td>
            <td>
              <button className="btn btn-xs p-1 px-3 btn-success">
                Pending
              </button>
            </td>
          </tr>
          <tr>
            <th className="pl-4">Joseph May</th>
            <td>josephmay@wxample.com</td>
            <td>Version Control</td>
            <td>$5 224.5</td>
            <td>19 Feb 2018</td>
            <td>Seaforth</td>
            <td>
              <button className="btn btn-xs p-1 px-3 btn-danger">
                Declined
              </button>
            </td>
          </tr>
          <tr>
            <th className="pl-4">Peter Horadnia</th>
            <td>horadnia@wxample.com</td>
            <td>Let's Dance</td>
            <td>$43 594.7</td>
            <td>1 Mar 2018</td>
            <td>Hanoverton</td>
            <td>
              <button className="btn btn-xs p-1 px-3 btn-info">Sent</button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;
