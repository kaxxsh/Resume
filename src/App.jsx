import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { GrMail } from "react-icons/gr";
import { GrPhone } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Main-Container">
        <nav>
          <div className="Name">KAMESHWARAN M</div>
          <div className="Contact">
            <div className="Mail">
              <GrMail size="1.1rem" />
              <div className="MainID">Kameshwaran2002@gmail.com</div>
            </div>
            <div className="phone">
              <GrPhone size="1.1rem" />
              <div className="Phonenum">8940416664</div>
            </div>
          </div>
          <div className="Contact">
            <div className="LinkedIn">
              <AiFillLinkedin size="1.1rem" />
              {/* <HashLink to="www.linkedin.com/in/kameshwaran-m-001a06214"> */}
              <div>LinkedIn</div>
              {/* </HashLink> */}
            </div>
            <div className="Github">
              <AiFillGithub size="1.1rem" />
              {/* <HashLink to="https://github.com/kaxxsh"> */}
              <div className="">GitHub</div>
              {/* </HashLink> */}
            </div>
          </div>
        </nav>
        <div className="Career-Container">
          <div className="Career">Career Objective</div>
        </div>
      </div>
    </div>
  );
}

export default App;
