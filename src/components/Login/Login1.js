import React from "react";
import bground from "./../asserts/wepik-2022319-214333.png";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import logo from "./../asserts/logo.png";
import login from './Login1.css';
// import bground from "./asserts/wepik-2022319-214333.png";
import clogo from "./../asserts/Artboard – 2.png";
import { useNavigate } from "react-router-dom";

function Login1() {
  let navigate = useNavigate();
  let Register = () => {
    navigate("/Register");
  };
  return (
    <div className="main">
      <div>
        {/* <img src={bground} alt="/" /> */}
        <Card className="cardM">
          <Card.Img className="card1"  src={logo} />
          <div className="cardBody1" class="card-img-overlay d-flex">
          {/* <div className="cardMBody1"> */}
            <Card.Body >
              <div>
              <img className="clogo" src={clogo} />
              <div className="cardBody2" >
                <Card.Title>Login</Card.Title>
                <label >Employee ID</label><br/>
                <input type="text" name="employeeId"/><br/>
                <label >Password</label><br/>
                <input type="password" name="password"/>
                <div>
                  <Button variant="primary">Login</Button>
                  <Button variant="primary">Cancel</Button>
                </div>
              <div className="mt-5" style={{ width: "100%", margin: "auto" }}>
              <p className="paraText">
                Already have an account?
                <a className="anchorTag" onClick={Register}>
                  Register.
                </a>
              </p>
              <br />
              <div style={{ display: "-ms-grid" }}>
                <p style={{ marginTop: "0%", marginBottom: "0%" }}>
                  <a className="changePass" href="myntraa.com">
                    Change Password
                  </a>
                </p>
                <hr className="hr" />
                <p className="copyRights">
                  Copyright &#169; Aleercio.com &nbsp; &nbsp; &nbsp; Terms &
                  Conditions | Privacy Policy
                </p>
              </div>
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
