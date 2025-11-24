import React from "react";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        {/* Outer Ring */}
        <div className="outer-ring"></div>
        {/* Inner Ring */}
        <div className="inner-ring"></div>
      </div>
    </div>
  );
};

export default Loader;
