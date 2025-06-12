import React, { useState, type ChangeEvent, type FormEvent } from "react";
import "../../assets/styles/fraudreportform.less";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  fraudType: string;
  incidentDate: string;
  financialLoss: string;
  description: string;
  suspectName: string;
  suspectContact: string;
  evidenceFiles: FileList | null;
}

const FraudReportForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    fraudType: "",
    incidentDate: "",
    financialLoss: "",
    description: "",
    suspectName: "",
    suspectContact: "",
    evidenceFiles: null,
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, evidenceFiles: e.target.files }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form submitted successfully! (Check the console for data)");
  };

  const selectedFiles = formData.evidenceFiles
    ? Array.from(formData.evidenceFiles)
        .map((f) => f.name)
        .join(", ")
    : "";

  return (
    <div className="formContainer">
      <header className="formHeader">
        <svg
          className="header-illustration"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z"
              fill="rgba(110, 120, 210, 0.1)"
              stroke="rgb(110, 120, 210)"
              strokeWidth="2"
            />
            <path
              d="M50 20 L75 35 L75 65 L50 80 L25 65 L25 35 Z"
              fill="rgba(110, 120, 210, 0.3)"
            />
            <path
              d="M50 30 L65 40 L50 50 L35 40Z"
              fill="#E1E1F5"
            />
          </g>
        </svg>
        <div className="header-text">
          <h1>Report a Fraud Incident</h1>
          <p>
            If you believe you have been a victim of fraud, please complete the
            form below with as much detail as possible. All reports are
            confidential.
          </p>
        </div>
      </header>

      <form
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="formSection">
          <div className="formSection-header">
            <svg
              className="section-icon"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            <h2>Your Contact Information</h2>
          </div>
          <div className="formGroup">
            <label htmlFor="fullName">
              Full Name <span className="optional">(Optional)</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="email">
              Email Address <span className="optional">(Optional)</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="phone">
              Phone Number <span className="optional">(Optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="formSection">
          <div className="formSection-header">
            <svg
              className="section-icon"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM16 18H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
            </svg>
            <h2>Incident Details</h2>
          </div>
          <div className="formGroup">
            <label htmlFor="fraudType">Type of Fraud</label>
            <select
              id="fraudType"
              name="fraudType"
              value={formData.fraudType}
              onChange={handleInputChange}
              required
            >
              <option
                value=""
                disabled
              >
                {" "}
                Select a type...{" "}
              </option>
              <option value="phishing">Phishing</option>
              <option value="identity_theft">Identity Theft</option>
              <option value="investment_scam">Investment Scam</option>
              <option value="credit_card_fraud">Credit Card Fraud</option>
              <option value="lottery_scam">Lottery/Prize Scam</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="formGroup">
            <label htmlFor="incidentDate">Date of Incident</label>
            <input
              type="date"
              id="incidentDate"
              name="incidentDate"
              value={formData.incidentDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="financialLoss">Financial Loss ($)</label>
            <input
              type="number"
              id="financialLoss"
              name="financialLoss"
              value={formData.financialLoss}
              onChange={handleInputChange}
              placeholder="e.g., 500.00"
              step="0.01"
              min="0"
            />
          </div>
          <div className="formGroup">
            <label htmlFor="description">Detailed Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Describe what happened, including any communication, websites, or instructions you received."
              required
            />
          </div>
        </div>

        <div className="formSection">
          <div className="formSection-header">
            <svg
              className="section-icon"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
            <h2>Suspect Information</h2>
          </div>
          <div className="formGroup">
            <label htmlFor="suspectName">
              Name or Username <span className="optional">(If known)</span>
            </label>
            <input
              type="text"
              id="suspectName"
              name="suspectName"
              value={formData.suspectName}
              onChange={handleInputChange}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="suspectContact">
              Website, Email, or Phone Number used by Suspect{" "}
              <span className="optional">(If known)</span>
            </label>
            <input
              type="text"
              id="suspectContact"
              name="suspectContact"
              value={formData.suspectContact}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="formSection">
          <div className="formSection-header">
            <svg
              className="section-icon"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5a2.5 2.5 0 0 1 5 0v10.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5V6H10v9.5a2.5 2.5 0 0 0 5 0V5c-1.38 0-2.5-1.12-2.5-2.5S13.62 0 15 0s2.5 1.12 2.5 2.5v12.5c0 3.04-2.46 5.5-5.5 5.5S6.5 21.04 6.5 18V6H8v12c0 2.21 1.79 4 4 4s4-1.79 4-4V6h-1.5z" />
            </svg>
            <h2>Supporting Evidence</h2>
          </div>
          <div className="formGroup">
            <label htmlFor="evidenceFiles">
              Upload Files{" "}
              <span className="optional">(Screenshots, emails, etc.)</span>
            </label>
            <label
              htmlFor="evidenceFiles"
              className="fileUploadWrapper"
            >
              <svg
                className="upload-icon"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z" />
              </svg>
              <div className="fileUploadText">
                <span>Click to browse</span> or drag and drop files here.
              </div>
              <input
                type="file"
                id="evidenceFiles"
                name="evidenceFiles"
                onChange={handleFileChange}
                multiple
              />
            </label>
            {selectedFiles && (
              <div className="fileName">Selected file(s): {selectedFiles}</div>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="submitBtn"
        >
          Submit Report
        </button>
      </form>
    </div>
  );
};

export default FraudReportForm;
