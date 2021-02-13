import React from "react";
import "./assets/css/app.css";
import Home from "./pages/Home";
import AOS from "aos";

AOS.init();
function App() {
  return (
    <>
      <body data-aos-easing="ease" data-aos-duration="400" data-aos-delay="0">
        <div className="page">
          <Home />
        </div>
      </body>
    </>
  );
}

export default App;
