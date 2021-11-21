import React from "react";

export const Item = ({prod})=>{
    return(
        <div key={prod.id} className="card" style={{width: "18rem"}}>
                    <img src = {prod.img} alt ={prod.name}/>
                    <div className="card-body">
                        <h3 className="card-title">{prod.name}</h3>
                        <p className="card-text">Precio: ${prod.price}</p>
                        <p className="card-text">{prod.desc}</p>
                        <button className="btn btn-primary">Agregar</button>
                    </div>
                </div>
    )
}