import { useState } from "react";
import { submitReport } from "../API";
import "./Report.css";

function Report() {
  const [formData, setFormData] = useState({
    reporterName: "",
    email: "",
    organisation: "",
    caseDescription: "",
    caseTitle: "",
    bacteriaType: "",
    antibioticResistanceType: "",
    location: "",
    dateOfCase: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.reporterName || !formData.email || !formData.caseTitle) {
      setError("Please fill in all required fields");
      return;
    }

    const result = await submitReport(formData);

    if (result.message) {
      setMessage("Report submitted successfully!");
      setError("");
      // clear the form
      setFormData({
        reporterName: "",
        email: "",
        organisation: "",
        caseDescription: "",
        caseTitle: "",
        bacteriaType: "",
        antibioticResistanceType: "",
        location: "",
        dateOfCase: "",
      });
    } else {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <div className="hero-section hero-report">
        <div className="text">
          <div className="title">Submit Report</div>
          <div className="info">
            Report a new AMR case or submit data suggestions.
          </div>
        </div>

        <div className="form">
          <div className="row-one">
            <div className="personal-details">
              <div className="title">Personal Details</div>
              <div className="inputs">
                <div className="input-container">
                  <div className="input-label">Reporter name:</div>
                  <div className="input-box">
                    <input
                      name="reporterName"
                      placeholder="John"
                      value={formData.reporterName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="input-container">
                  <div className="input-label">Email:</div>
                  <div className="input-box">
                    <input
                      name="email"
                      placeholder="John@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="input-container">
                  <div className="input-label">Organisation:</div>
                  <div className="input-box">
                    <input
                      name="organisation"
                      placeholder="University of Pretoria"
                      value={formData.organisation}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="case-details">
              <div className="title">Case Details</div>
              <div className="inputs">
                <div className="input-container">
                  <div className="input-label">Case Description:</div>
                  <div className="input-box">
                    <input
                      name="caseDescription"
                      placeholder="Describe the case"
                      value={formData.caseDescription}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="inputs">
                <div className="input-container">
                  <div className="input-label">Case Title:</div>
                  <div className="input-box">
                    <input
                      name="caseTitle"
                      placeholder="Case title"
                      value={formData.caseTitle}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row-two">
            <div className="case-details">
              <div className="title">AMR Details</div>
              <div className="inputs">
                <div className="input-container">
                  <div className="input-label">Bacteria Type:</div>
                  <div className="input-box">
                    <input
                      name="bacteriaType"
                      placeholder="e.g. E. coli"
                      value={formData.bacteriaType}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="input-container">
                  <div className="input-label">Antibiotic Resistance Type:</div>
                  <div className="input-box">
                    <input
                      name="antibioticResistanceType"
                      placeholder="e.g. MRSA"
                      value={formData.antibioticResistanceType}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="input-container">
                  <div className="input-label">Location:</div>
                  <div className="input-box">
                    <input
                      name="location"
                      placeholder="e.g. Gauteng"
                      value={formData.location}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="input-container">
                  <div className="input-label">Date of Case:</div>
                  <div className="input-box">
                    <input
                      name="dateOfCase"
                      type="date"
                      value={formData.dateOfCase}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {error && <div className="error-message">{error}</div>}
        {message && <div className="success-message">{message}</div>}

        <button className="report-submit-btn" onClick={handleSubmit}>
          <span>SUBMIT REPORT</span>
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#cdeff2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="16"
              height="16"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Report;