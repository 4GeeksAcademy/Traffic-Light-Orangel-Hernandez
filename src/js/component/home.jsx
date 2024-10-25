import React from "react";
import { useState } from "react";


const Home = () => {

    const [color, setColor] = useState ("");

	return (
		<div>
			<div className="palo container d-flex flex-column justify-content-center align-items-center">
			</div>
		    <div className="wrapper bg-black container d-flex flex-column justify-content-center align-items-center">
			     <button onClick={()=>setColor('rojo')} className={`btn-rojo bg-danger p-2 ${color === "rojo" ? "encendidoRojo" : ""}`}></button>
			     <button onClick={()=>setColor('amarillo')} className={`btn-amarillo bg-warning p-2 ${color === "amarillo" ? "encendidoAmarillo" : ""}`}></button>
			     <button onClick={()=>setColor('verde')} className={`btn-verde bg-success p-2 ${color === "verde" ? "encendidoVerde" : ""}`}></button>
		    </div>
		</div>
	);
};

export default Home;
