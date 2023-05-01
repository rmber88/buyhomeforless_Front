import React, { useState } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [state, setState] = useState([]);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  axios.get("http://localhost:3003/get-users").then((res) => {
    setState(res.data.result);
  });

  const deleteUser = (id) => {
    axios.delete(`http://localhost:3003/${id}`).then((res) => {
      setError(true);
      setErrorMsg(res.data.Msg);
    });
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ fontSize: "25px", padding: "2%" }}>Admin Panel</div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <table style={{ width: "70%", border: "3px solid", margin: "5%" }}>
          <thead>
            <tr>
              <th style={{ backgroundColor: "lightGray", textAlign: "center" }}>
                Id
              </th>
              <th style={{ backgroundColor: "lightGray", textAlign: "center" }}>
                Name
              </th>
              <th style={{ backgroundColor: "lightGray", textAlign: "center" }}>
                User
              </th>
              <th style={{ backgroundColor: "lightGray", textAlign: "center" }}>
                Email
              </th>
              <th style={{ backgroundColor: "lightGray", textAlign: "center" }}>
                CreatedAt
              </th>
              <th style={{ backgroundColor: "lightGray", textAlign: "center" }}>
                Admin
              </th>
              <th style={{ backgroundColor: "lightGray", textAlign: "center" }}>
                Delete User
              </th>
            </tr>
          </thead>
          <tbody>
            {state.map((res) => {
              return (
                <tr style={{ backgroundColor: "white" }}>
                  <th style={{ backgroundColor: "white", textAlign: "center" }}>
                    {res._id}
                  </th>
                  <th style={{ backgroundColor: "white", textAlign: "center" }}>
                    {res.name}
                  </th>
                  <th style={{ backgroundColor: "white", textAlign: "center" }}>
                    {res.user}
                  </th>
                  <th style={{ backgroundColor: "white", textAlign: "center" }}>
                    {res.email}
                  </th>
                  <th style={{ backgroundColor: "white", textAlign: "center" }}>
                    {res.createdAt}
                  </th>
                  <th style={{ backgroundColor: "white", textAlign: "center" }}>
                    {`${res.isAdmin}`}
                  </th>
                  <th style={{ backgroundColor: "white", textAlign: "center" }}>
                    <button
                      onClick={() => deleteUser(res._id)}
                      style={{ borderRadius: "5px" }}
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {error ? (
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "space-between",
              width: "70%",
              backgroundColor: "#FF3131",
              color: "white",
              padding: "10px 20px 10px 20px",
              borderRadius: "5px",
              alignItems: "center",
            }}
          >
            <span>{error ? `${errorMsg}` : ""}</span>
            <div
              style={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                border: "white 2px solid",
                borderRadius: "30px",
                width: "40px",
                backgroundColor: "#FF3131",
                height: "40px",
              }}
              onClick={() => {
                setError(false);
              }}
            >
              <p
                style={{
                  color: "white",
                  alignItems: "center",
                  marginTop: "3px",
                }}
              >
                x
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default AdminPanel;