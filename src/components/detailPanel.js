import React, { useState } from "react";
import Company from "./AccountSummary/company";
import Person from "./AccountSummary/person";
import Main from "./AccountSummary/Main";

export default function DetailPanel(props) {
  const [activeTab, setActiveTab] = useState("Main");
  const { accountSummary } = props;
  const tabs = ["Main", accountSummary.type.name];

  return (
    <div className="cateConte">
      <ul className="categoryBox">
        {tabs.map((items) => (
          <li
            className={activeTab === items ? "active" : null}
            onClick={() => setActiveTab(items)}
          >
            {items}
          </li>
        ))}
      </ul>
      {activeTab === "Main" ? <Main accountSummary={accountSummary} /> : null}
      {activeTab === "Company" ? (
        <Company accountSummary={accountSummary} />
      ) : null}
      {activeTab === "Person" ? (
        <Person accountSummary={accountSummary} />
      ) : null}
    </div>
  );
}
