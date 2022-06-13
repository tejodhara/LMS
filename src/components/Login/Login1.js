import React, { useState } from "react";
import bground from "./../asserts/wepik-2022319-214333.png";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import logo from "./../asserts/logo.png";
import login from "./Login1.css";
// import bground from "./asserts/wepik-2022319-214333.png";
import clogo from "./../asserts/Artboard – 2.png";
import { useNavigate } from "react-router-dom";

function Login1() {
  const [employeeData, setEmployeeData] = useState({
    employeeId: "",
    password: "",
  });

  const [data, setData] = useState({
    adminid: "Admin",
    password: "admin@123",
    mentorid: "Mentor",
    mentorpassword: "mentor@123",
    empid: "Employee",
    emppassword: "employee@123",
  });

  // to target the value from input field and store it
  let updataEmpData = (event) => {
    setEmployeeData({
      ...employeeData,
      [event.target.name]: event.target.value,
    });
  };

  // to navigate to another page
  let navigate = useNavigate();
  let Register = () => {
    navigate("/Register");
  };

  // validation
  let validateData = () => {
    if (!employeeData.employeeId && !employeeData.password) {
      alert("Please fill all the fields");
    } else if (employeeData.employeeId && !employeeData.password) {
      alert("Fill the Password Field");
    } else if (!employeeData.employeeId && employeeData.password) {
      alert("Fill the Employee ID Field");
    } else if (
      employeeData.employeeId === data.adminid &&
      employeeData.password === data.password
    ) {
      navigate("/admin");
    } else if (
      employeeData.employeeId === data.mentorid &&
      employeeData.password === data.mentorpassword
    ) {
      navigate("/mentor");
    } else if (
      employeeData.employeeId === data.empid &&
      employeeData.password === data.emppassword
    ) {
      navigate("/employee");
    } else {
      alert("you are not registered");
      navigate("/");
    }
  };

  return (
    <div className="main">
      <div>
        {/* <img src={bground} alt="/" /> */}
        <Card className="cardM">
          <Card.Img className="card1" src={logo} />
          <div className="cardBody1" class="card-img-overlay d-flex">
            {/* <div className="cardMBody1"> */}
            <Card.Body style={{ display: "inline", }}>
              <div>
                <div>
                  <img className="clogo" src={clogo} />
                  {/* <div style={{ display: "inline" }}>Good things on the way!</div> */}
                </div>
                <div className="cardBody2">
                  <Card.Title>Login</Card.Title>
                  <label>Employee ID</label>
                  <br />
                  <input
                    type="text"
                    name="employeeId"
                    value={setEmployeeData.empid}
                    onChange={updataEmpData}
                    style={{ color: "black" }}
                  />
                  <br />
                  <label>Password</label>
                  <br />
                  <input
                    type="password"
                    name="password"
                    className="input1"
                    value={setEmployeeData.password}
                    onChange={updataEmpData}
                    style={{ color: "black" }}
                  />
                  <div>
                      <Button variant="primary" onClick={validateData}>
                        Login
                      </Button>
                      <Button variant="primary" onClick={validateData}>
                        Cancel
                      </Button>
                  </div>
                    <div
                      className="mt-2"
                      style={{
                        width: "100%",
                        margin: "auto",
                        backgroundColor: "",
                      }}
                    >
                      <p className="paraText">
                        Already have an account?
                        <a className="anchorTag" onClick={Register}>
                          Register.
                        </a>
                      </p>
                      <br />
                      <span style={{ marginTop: "-15px",  width:'320px' }}>
                        <p style={{ marginTop: "0%", marginBottom: "0%" }}>
                          <a className="changePass" href="yatra.com">
                            Change Password
                          </a>
                        </p>
                        <hr className="hr" style={{ width: "320px" }} />
                        <p className="copyRights" style={{ fontSize: "11px" }}>
                          Copyright &#169; Aleercio.com &nbsp; &nbsp; &nbsp; Terms
                          & Conditions | Privacy Policy
                        </p>
                      </span>
                  </div>
                </div>
              </div>
            </Card.Body>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Login1;
