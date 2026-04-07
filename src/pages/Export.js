import "./Export.css";

function Export() {
  return (
    <div>
      <div className="hero-section">
        <div className="image"></div>

        <div className="text">
          <div className="title">Export</div>
          <div className="info">Choose what data to include in your export</div>

          <div class="date">
            <p class="category-title">Date Range:</p>
            <div class="dates-container">
              <div class="input-container">
                <div class="input-label">Start Date:</div>
                <div class="input-box">
                  <input placeholder="1 jun 2026"></input>
                </div>
              </div>
              <div class="input-container">
                <div class="input-label">End Date:</div>
                <div class="input-box">
                  <input placeholder="31 Jun 2026"></input>
                </div>
              </div>
            </div>
          </div>

          <div class="location-category-optional">
            <div class="location category-title">
              <p>Location:</p>
              <div class="options">
                <label class="opt">
                  <input
                    class="input-exp"
                    type="checkbox"
                    name="location"
                    value="country"
                  />
                  Country
                </label>

                <label class="opt">
                  <input
                    class="input-exp"
                    type="checkbox"
                    name="location"
                    value="region"
                  />
                  Region
                </label>

                <label class="opt">
                  <input
                    class="input-exp"
                    type="checkbox"
                    name="location"
                    value="province"
                  />
                  Province
                </label>
              </div>
            </div>

            <div class="separator"></div>

            <div class="category category-title">
              <p>Category/Data Type:</p>
              <div class="options">
                <label class="opt">
                  <input
                    class="input-exp"
                    type="checkbox"
                    name="location"
                    value="bacteria"
                  />
                  Bacteria Type
                </label>

                <label class="opt">
                  <input
                    class="input-exp"
                    type="checkbox"
                    name="location"
                    value="amr"
                  />
                  Antibiotic resistance type
                </label>

                <label class="opt">
                  <input
                    class="input-exp"
                    type="checkbox"
                    name="location"
                    value="case"
                  />
                  Case status
                </label>
              </div>
            </div>

            <div class="separator"></div>

            <div class="optional category-title">
              <p>Optional Filters:</p>
              <div class="options">
                <label class="opt">
                  <input
                    class="input-exp"
                    type="checkbox"
                    name="location"
                    value="bacteria"
                  />
                  Age group
                </label>

                <label class="opt">
                  <input
                    class="input-exp"
                    type="checkbox"
                    name="location"
                    value="amr"
                  />
                  Severity
                </label>

                <label class="opt">
                  <input
                    class="input-exp"
                    type="checkbox"
                    name="location"
                    value="case"
                  />
                  Source (hospital, lab, etc.)
                </label>
              </div>
            </div>
          </div>

          <div class="export">
            <p class="category-title">Export Format & Options:</p>
            <div class="options">
              <label class="opt">
                <input
                  class="input-exp"
                  type="checkbox"
                  name="location"
                  value="bacteria"
                />
                PDF
              </label>

              <label class="opt">
                <input
                  class="input-exp"
                  type="checkbox"
                  name="location"
                  value="amr"
                />
                PNG
              </label>

              <label class="opt">
                <input
                  class="input-exp"
                  type="checkbox"
                  name="location"
                  value="case"
                />
                Excel (.xlsx)
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Export;
