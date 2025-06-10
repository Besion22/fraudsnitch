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
        <h1>Report a Fraud Incident</h1>
        <p>
          If you believe you have been a victim of fraud, please complete the
          form below with as much detail as possible. All reports are
          confidential.
        </p>
      </header>

      <form
        onSubmit={handleSubmit}
        noValidate
      >
        {/* Section 1: Contact Information */}
        <div className="formSection">
          <h2>Your Contact Information</h2>
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

        {/* Section 2: Incident Details */}
        <div className="formSection">
          <h2>Incident Details</h2>
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
                Select a type...
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

        {/* Section 3: Suspect Information */}
        <div className="formSection">
          <h2>Suspect Information</h2>
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

        {/* Section 4: Evidence Upload */}
        <div className="formSection">
          <h2>Supporting Evidence</h2>
          <div className="formGroup">
            <label htmlFor="evidenceFiles">
              Upload Files{" "}
              <span className="optional">(Screenshots, emails, etc.)</span>
            </label>
            <label
              htmlFor="evidenceFiles"
              className="fileUploadWrapper"
            >
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
