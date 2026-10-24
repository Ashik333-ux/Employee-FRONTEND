import { useEffect, useState } from 'react'

function Home() {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setEmployees(data))
  }, [])

  return (
    <div
      className="min-vh-100 py-5"
      style={{
        background: "#eef9ff"
      }}
    >

      <div className="container">

        <div className="text-center mb-5">

          <h1
            className="fw-bold text-uppercase"
            style={{
              color: "#075985",
              fontSize: "36px"
            }}
          >
            EMPLOYEE DASHBOARD
          </h1>

          <p
            className="text-secondary"
            style={{
              fontSize: "17px"
            }}
          >
            VIEW EMPLOYEE INFORMATION
          </p>

        </div>

        <div className="row g-4">

          {employees.map(employee => (

            <div
              className="col-md-6 col-lg-4"
              key={employee.id}
            >

              <div
                className="card border-0 rounded-4 h-100 p-4"
                style={{
                  boxShadow: "0 8px 25px rgba(125, 180, 210, 0.18)"
                }}
              >

                <div
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{
                    width: "65px",
                    height: "65px",
                    background: "#e0f2fe",
                    color: "#0284c7",
                    fontSize: "22px",
                    fontWeight: "bold"
                  }}
                >
                  {employee.id}
                </div>

                <h4
                  className="text-center fw-bold"
                  style={{
                    color: "#075985",
                    fontSize: "23px"
                  }}
                >
                  {employee.name}
                </h4>

                <p
                  className="text-center text-secondary"
                  style={{
                    fontSize: "16px"
                  }}
                >
                  {employee.email}
                </p>

                <div
                  className="text-center fw-bold mt-2"
                  style={{
                    color: "#0284c7",
                    fontSize: "15px"
                  }}
                >
                  EMPLOYEE ID: {employee.id}
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}

export default Home