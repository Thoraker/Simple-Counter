import React from "react";

let Panel = (props) => {
  return (
    <div className="bg-dark border-dark-subtle text-light">
      <div className="row m-5 p-5">
        <div className="col py-2"></div>
        <div className="col-1 text-bg-dark border border-secondary rounded text-center pt-3">
          <i className="bi bi-clock fs-1"></i>
        </div>
        <div className="col-1 text-bg-dark border border-secondary rounded text-center pt-3">
          <p id="CM"className="fs-1">0</p>
        </div>
        <div className="col-1 text-bg-dark border border-secondary rounded text-center pt-3">
          <p id="DM"className="fs-1">0</p>
        </div>
        <div className="col-1 text-bg-dark border border-secondary rounded text-center pt-3">
          <p id="UM"className="fs-1">0</p>
        </div>
        <div className="col-1 text-bg-dark border border-secondary rounded text-center pt-3">
          <p id="C"className="fs-1">0</p>
        </div>
        <div className="col-1 text-bg-dark border border-secondary rounded text-center pt-3">
          <p id="D"className="fs-1">0</p>
        </div>
        <div className="col-1 text-bg-dark border border-secondary rounded text-center pt-3">
          <p id="U" className="fs-1">0</p>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default Panel