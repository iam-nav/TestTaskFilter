import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Form } from "react-bootstrap";
import AccountRepository from "../backend/index";
import DetailPanel from "./detailPanel";

export default function StartView() {
  const [Accounts, setAccounts] = useState([]);
  const [accountSummary, setAccountSummary] = useState(null);
  const [searchText, setSearchText] = useState(null);
  const [fullScreen, setFullScreen] = useState(true);

  async function fetchAccount() {
    const repository = AccountRepository.getInstance();
    const Accounts = await repository.getAllAccounts();
    setAccounts(Accounts);
  }

  async function fetchAccountSummary(id) {
    const repository = AccountRepository.getInstance();
    const accountSummary = await repository.getAccountSummary(id);
    setAccountSummary(accountSummary);
  }

  useEffect(() => {
    fetchAccount();
  }, []);

  return (
    <div>
      <div className="mainTopWrap">
        {fullScreen ? (
          <div className="leftOpenCloseDiv">
            <div className="modalClose" onClick={() => setFullScreen(false)}>
              -
            </div>
            <div className="caListLeft">
              <li>Company</li>
              <li>Person</li>
            </div>
          </div>
        ) : null}
        <div className="rightUnExpBox">
          <h1 className="mainHeading">Accounts</h1>
          <Form.Control
            type="text"
            value={searchText}
            placeholder="Enter Search Text"
            className="searchTop"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Code</th>
                <th>Name</th>
                <th>Phonenumber</th>
                <th>Email</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              {Accounts.map((items, index) => {
                const name =
                  items?.type_detail.name !== undefined
                    ? items?.type_detail.name
                    : `${items?.type_detail.firstname} ${items?.type_detail.lastname}`;
                const phonenumber = items?.type_detail.phonenumber;
                const filterName = name.toLowerCase();
                const text = searchText?.toLowerCase();
                //Email and Website not available
                if (filterName.includes(text) || !searchText)
                  return (
                    <tr onClick={() => fetchAccountSummary(items.id)}>
                      <td>{index + 1}</td>
                      <td>{items.code}</td>
                      <td>{name}</td>
                      <td>{phonenumber}</td>
                      <td></td>
                      <td></td>
                    </tr>
                  );
              })}
            </tbody>
          </Table>
        </div>
      </div>
      {accountSummary ? <DetailPanel accountSummary={accountSummary} /> : null}
    </div>
  );
}
