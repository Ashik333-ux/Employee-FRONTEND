function EmployeeForm() {
  return (
    <div
      className="min-vh-100 py-5 position-relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #dff6ff, #f5fbff)"
      }}
    >

      <div
        className="position-absolute rounded-circle"
        style={{
          width: "250px",
          height: "250px",
          background: "#bae6fd",
          top: "-80px",
          left: "-80px",
          opacity: "0.7"
        }}
      ></div>

      <div
        className="position-absolute rounded-circle"
        style={{
          width: "300px",
          height: "300px",
          background: "#7dd3fc",
          bottom: "-120px",
          right: "-100px",
          opacity: "0.35"
        }}
      ></div>

      <div className="container position-relative">

        <div className="text-center mb-4">
          <h1
            className="fw-bold text-uppercase"
            style={{ color: "#0369a1" }}
          >
            EMPLOYEE MANAGEMENT
          </h1>

          <p className="text-secondary">
            CREATE AND MANAGE EMPLOYEE INFORMATION
          </p>
        </div>

        <div className="row justify-content-center">

          <div className="col-md-8 col-lg-6">

            <div
              className="card border-0 shadow-lg rounded-4"
              style={{
                background: "rgba(255, 255, 255, 0.95)"
              }}
            >

              <div
                className="text-center text-white py-4 rounded-top-4"
                style={{
                  background: "linear-gradient(135deg, #38bdf8, #0284c7)"
                }}
              >

                <div
                  className="mx-auto mb-2 rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "65px",
                    height: "65px",
                    background: "rgba(255,255,255,0.2)",
                    fontSize: "30px"
                  }}
                >
                  👤
                </div>

                <h2 className="fw-bold text-uppercase mb-1">
                  ADD EMPLOYEE
                </h2>

                <p className="mb-0">
                  ENTER EMPLOYEE DETAILS
                </p>

              </div>

              <div className="card-body p-4 p-md-5">

                <form>

                  <div className="mb-4">
                    <label className="form-label fw-bold">
                      EMPLOYEE NAME
                    </label>

                    <div className="input-group">
                      <span className="input-group-text bg-white">
                        👤
                      </span>

                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter employee name"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-bold">
                      DESIGNATION
                    </label>

                    <div className="input-group">
                      <span className="input-group-text bg-white">
                        💼
                      </span>

                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter designation"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-bold">
                      LOCATION
                    </label>

                    <div className="input-group">
                      <span className="input-group-text bg-white">
                        📍
                      </span>

                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter location"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-bold">
                      SALARY
                    </label>

                    <div className="input-group">
                      <span className="input-group-text bg-white">
                        ₹
                      </span>

                      <input
                        type="number"
                        className="form-control form-control-lg"
                        placeholder="Enter salary"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-lg w-100 text-white fw-bold text-uppercase rounded-3"
                    style={{
                      background: "linear-gradient(135deg, #0ea5e9, #0284c7)",
                      border: "none"
                    }}
                  >
                    ADD EMPLOYEE
                  </button>

                </form>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default EmployeeForm