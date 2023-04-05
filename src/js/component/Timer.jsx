import React, { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
  });
  return (
    <div className="bg-dark text-light m-5 p-5">
      <div className="row container-fluid fs-1">
        <div className="col"></div>
        <div className="col-1 text-center">
          <i className="bi bi-clock align-baseline"></i>
        </div>
        <div className="col-1 text-center">
          <span>{Math.floor(seconds / 100000) % 10}</span>
        </div>
        <div className="col-1 text-center">
          <span>{Math.floor(seconds / 10000) % 10}</span>
        </div>
        <div className="col-1 text-center">
          <span>{Math.floor(seconds / 1000) % 10}</span>
        </div>
        <div className="col-1 text-center">
          <span>{Math.floor(seconds / 100) % 10}</span>
        </div>
        <div className="col-1 text-center">
          <span>{Math.floor(seconds / 10) % 10}</span>
        </div>
        <div className="col-1 text-center">
          <span>{seconds % 10}</span>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default Timer;
