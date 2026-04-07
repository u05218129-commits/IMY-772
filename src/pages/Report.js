import "./Report.css";

function Report() {
  return (
    <div>
      <div className="hero-section hero-report">
        <div className="text">
          <div className="title">Submit Report</div>
          <div className="info">
            Report a new AMR case or submit data suggestions.
          </div>
        </div>

        <div class="form">
          <div class="row-one">
            <div class="personal-details">
              <div class="title">Personal Details</div>
              <div class="inputs">
                <div class="input-container">
                  <div class="input-label">Reporter name:</div>
                  <div class="input-box">
                    <input placeholder="John"></input>
                  </div>
                </div>

                <div class="input-container">
                  <div class="input-label">Email:</div>
                  <div class="input-box">
                    <input placeholder="John@gmail.com"></input>
                  </div>
                </div>

                <div class="input-container">
                  <div class="input-label">Organisation:</div>
                  <div class="input-box">
                    <input placeholder="University of Pretoria"></input>
                  </div>
                </div>
              </div>
            </div>

            <div class="case-details">
              <div class="title">Case Details</div>
              <div class="inputs">
                <div class="input-container">
                  <div class="input-label">Case Description:</div>
                  <div class="input-box">
                    <input placeholder="John"></input>
                  </div>
                </div>
              </div>

              <div class="inputs">
                <div class="input-container">
                  <div class="input-label">Case Title:</div>
                  <div class="input-box">
                    <input placeholder="John"></input>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row-two">
            <div class="case-details">
              <div class="title">AMR Details</div>
              <div class="inputs">
                <div class="input-container">
                  <div class="input-label">Bacteria Type:</div>
                  <div class="input-box">
                    <input placeholder="John"></input>
                  </div>
                </div>

                <div class="input-container">
                  <div class="input-label">Antibiotic Resistance Type:</div>
                  <div class="input-box">
                    <input placeholder="John"></input>
                  </div>
                </div>

                <div class="input-container">
                  <div class="input-label">Location:</div>
                  <div class="input-box">
                    <input placeholder="John"></input>
                  </div>
                </div>

                <div class="input-container">
                  <div class="input-label">Date of Case:</div>
                  <div class="input-box">
                    <input placeholder="John"></input>
                  </div>
                </div>
              </div>
            </div>

            <div class="file-upload">
              <div class="title">File Upload</div>
              <div class="inputs">
                <div class="input-container">
                  <div class="input-label">Documents:</div>
                  <div class="input-box">
                    <input placeholder="John"></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="report-submit-btn">
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
