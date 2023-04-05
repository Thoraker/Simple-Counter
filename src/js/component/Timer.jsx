import React, { useEffect, useState } from "react";

function Timer() {

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
  });

  return (
    
    <div className="bg-dark border-dark-subtle text-light">
      <div className="row m-5 p-5">
        <div className="col py-2"></div>
        <div className="col-1 text-bg-dark border border-secondary rounded text-center pt-3">
          <i className="bi bi-clock fs-1"></i>
        </div>
        <div className="col-1 text-bg-dark border border-secondary rounded text-center pt-3">
          <p className="fs-1">{Math.floor(seconds/100000)%10}</p>
        </div>
        <div className="col-1 text-bg-dark border border-secondary rounded text-center pt-3">
          <p className="fs-1">{Math.floor(seconds/10000)%10}</p>
        </div>
        <div className="col-1 text-bg-dark border border-secondary rounded text-center pt-3">
          <p className="fs-1">{Math.floor(seconds/1000)%10}</p>
        </div>
        <div className="col-1 text-bg-dark border border-secondary rounded text-center pt-3">
          <p className="fs-1">{Math.floor(seconds/100)%10}</p>
        </div>
        <div className="col-1 text-bg-dark border border-secondary rounded text-center pt-3">
          <p className="fs-1">{Math.floor(seconds/10)%10}</p>
        </div>
        <div className="col-1 text-bg-dark border border-secondary rounded text-center pt-3">
          <p  className="fs-1">{seconds%10}</p>
        </div>
        <div className="col"></div>
      </div>
    </div>
  )
};


export default Timer;
