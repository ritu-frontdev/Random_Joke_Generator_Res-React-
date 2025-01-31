import React from "react";
const Buttoncompo =({fetchjoke,backbutton,copybutton})=> {
  return(
    <>
    <div className="btnbox">
      <div className="btn">
    <button className="btn1" onClick={fetchjoke}>New Joke</button>
    </div>
    <div className="btn">
    <button className="btn1" onClick={backbutton}>Back joke</button>
    </div>
    <div className="btn">
    <button className="btn1" onClick={copybutton}>Copy joke</button>
    </div>
    </div>
    </>
  )
}

export default Buttoncompo;