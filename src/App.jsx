import  "./app.css";
import { useEffect, useState } from "react";
import { doctors } from "./doctor_data"

function App() {

    return(
        <div className="app"> {/* tässä luodaan luokan nimi, App*/}
            <input type="text" className="search" placeholder="Etsi Lääkäreitä..."/> {/* Tässä tehdään hakuboxi*/}
            <ul className="list"> {/* Luokan tyyppi on lista*/}
                {doctors.map((doctor) => ( // Tässä luupataan kaikki doctor-datassa olevat etunimet läpi
                    <li className="listItem">{doctor.first_name}</li>
                ))}
            </ul>
        </div>

    );
}

export default App;