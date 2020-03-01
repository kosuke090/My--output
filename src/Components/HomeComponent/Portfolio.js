import React from 'react';
import img1 from "../../img/port1.png";
import img2 from "../../img/port2.png";


export default function Portfolio() {
  return (
    <div className="row my-5 ">
      <div className="col-md border bg-dark"  >
        <h4 className="text-white">BOOK</h4>
      <img src ={img1} alt="" width="100% " height="280px"/>
      </div>
      <div className="col-md border bg-dark">
        <h4 className="text-white">QUIZ</h4>
      <img src ={img2} alt="" width="100%" height="280px"/>
      </div>
    </div>
  )
}
