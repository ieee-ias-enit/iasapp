import React from "react";
import "./error.css";
function Error() {
  return (
    <div className="container">
      <img
        className="error_dev"
        src={"/ErrorPageImG.png"}
        alt="Page not Found !"
      />
    </div>
  );
}

export default Error;
