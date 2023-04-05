import React from "react";
import Panel from "./component/Panel.jsx"
import Timer from "./component/Timer.jsx"


// No pude hacer que funcionara separando la función por lo que el panel lo programé en la funsion de Timer y aplique los hooks ahi mismo 

const App = () => {
    return(
        <>
        <Timer />
        </>
     
    );
}

export default App;