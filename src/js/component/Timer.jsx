import React, { useEffect, useState } from "react";

function Timer() {

  const [u, setU] = useState(0);
  const [d, setD] = useState(0);
  const [c, setC] = useState(0);
  const [um, setUM] = useState(0);
  const [dm, setDM] = useState(0);
  const [cm, setCM] = useState(0);

  useEffect(() => {

    setTimeout(() => {
      setU(u + 1);
        if (u === 9){
          setD(d + 1);
          setU(0);
          if (d === 9){
            setC(c + 1);
            setD(0);
            if (c === 9){
              setUM(um + 1);
              setC(0);
              if (um === 9){
                setDM(dm + 1);
                setUM(0);
                  if (cm === 9){
                    setCM(cm + 1);
                    setDM(0);
                      if (cm === 9){
                        setU(0);
                        setD(0);
                        setC(0);
                        setUM(0);
                        setDM(0);
                        setCM(0);
  }}}}}}}, 1000);
  });

  return (
    
    <div className="bg-dark border-dark-subtle text-light">
      <div className="row m-5 p-5">
        <div className="col py-2"></div>
        <div className="col-1 text-bg-dark border border-secondary rounded text-center pt-3">
          <i className="bi bi-clock fs-1"></i>
        </div>
        <div className="col-1 text-bg-dark border border-secondary rounded text-center pt-3">
          <p id="CM"className="fs-1">{cm}</p>
        </div>
        <div className="col-1 text-bg-dark border border-secondary rounded text-center pt-3">
          <p id="DM"className="fs-1">{dm}</p>
        </div>
        <div className="col-1 text-bg-dark border border-secondary rounded text-center pt-3">
          <p id="UM"className="fs-1">{um}</p>
        </div>
        <div className="col-1 text-bg-dark border border-secondary rounded text-center pt-3">
          <p id="C"className="fs-1">{c}</p>
        </div>
        <div className="col-1 text-bg-dark border border-secondary rounded text-center pt-3">
          <p id="D"className="fs-1">{d}</p>
        </div>
        <div className="col-1 text-bg-dark border border-secondary rounded text-center pt-3">
          <p id="U" className="fs-1">{u}</p>
        </div>
        <div className="col"></div>
      </div>
    </div>
  )
};


export default Timer;
