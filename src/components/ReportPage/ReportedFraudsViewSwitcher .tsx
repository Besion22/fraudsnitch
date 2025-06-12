import { useState } from "react";
import { initialFraudData } from "../../data/fraudData";
import "../../assets/styles/fraudsswitcher.less";
import { FraudDashboard } from "./FraudDashboard";
import { ReportedFraudTable } from "./ReportedFraudTable";

const TableIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="20"
    height="20"
  >
    <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v4h14V5H5zm0 6v4h14v-4H5zm0 6v3h14v-3H5z" />
  </svg>
);

const ChartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="20"
    height="20"
  >
    <path d="M22 21H2V3h2v16h16zM13 17V9h-2v8h2zM17 17V5h-2v12h2zM9 17V13H7v4h2z" />
  </svg>
);

export default function ReportedFraudsViewSwitcher() {
  const [isTableView, setIsTableView] = useState(true);

  return (
    <section className="reported-fraud-section">
      <div className="fraud-table-container">
        <h2 className="fraud-table-title">Reported Fraud Incidents</h2>

        <div className="view-switcher-wrapper">
          <div
            className={`view-switcher ${
              isTableView ? "table-active" : "dashboard-active"
            }`}
          >
            <button
              className="switch-button"
              onClick={() => setIsTableView(true)}
            >
              <TableIcon />
              <span>Table View</span>
            </button>
            <button
              className="switch-button"
              onClick={() => setIsTableView(false)}
            >
              <ChartIcon />
              <span>Dashboard View</span>
            </button>
          </div>
        </div>

        {isTableView ? (
          <ReportedFraudTable fraudData={initialFraudData} />
        ) : (
          <FraudDashboard fraudData={initialFraudData} />
        )}
      </div>
    </section>
  );
}
