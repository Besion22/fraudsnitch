import type { FraudReport } from "../../data/fraudData";

interface ReportedFraudTableProps {
  fraudData: FraudReport[];
}

export function ReportedFraudTable({ fraudData }: ReportedFraudTableProps) {
  return (
    <div className="reported-fraud-section">
      <div className="fraud-table-wrapper">
        <table className="fraud-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Date</th>
              <th>Location</th>
              <th>Description</th>
              <th>Status</th>
              <th>Amount Lost</th>
            </tr>
          </thead>
          <tbody>
            {fraudData.map((fraud) => (
              <tr key={fraud.id}>
                <td data-label="ID">{fraud.id}</td>
                <td data-label="Type">{fraud.type}</td>
                <td data-label="Date">{fraud.date}</td>
                <td data-label="Location">{fraud.location}</td>
                <td data-label="Description">{fraud.description}</td>
                <td data-label="Status">{fraud.status}</td>
                <td data-label="Amount Lost">
                  ${fraud.amount.toLocaleString()}
                </td>{" "}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
