import { useParams } from 'react-router-dom';
import UpdateButton from './UpdateButton';
import Getone from "./Getone";
import DeleteButton from './DeleteButton';
import { useState, useEffect } from "react";

const MaDetails = () => {
    const { id, typeOfMitarbeiter } = useParams();

    let url;

    if (typeOfMitarbeiter === "Mitarbeiter") {
        url = 'http://localhost:8080/api/v1/Mitarbeiter/';
    } else if (typeOfMitarbeiter === "MitarbeiterMarketing") {
        url = 'http://localhost:8080/api/v1/MitarbeiterMarketing/';
    }

    const { data: mitarbeiter, isPending } = Getone(url + id);

    const [name, setName] = useState('');
    const [abteilung, setAbteilung] = useState('');

    useEffect(() => {
        if (mitarbeiter) {
            setName(mitarbeiter.name);
            setAbteilung(mitarbeiter.abteilung);
        }
    }, [mitarbeiter]);

    return (
        <div>
            {isPending && <div>Loading...</div>}
            {!isPending && mitarbeiter && (
                <div className="ma-detais-div">
                    <h2 className="ma-detais-title">Details</h2>
                    <div className="daten-ma-div">
                        <div className="name-ma-div">
                            <label className="name-ma-label">Name</label>
                            <input 
                                className="name-ma-input" 
                                type="text" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                            />
                        </div>
                        <div className="dob-ma-div">
                            <label className="dob-ma-label">Date of Birth</label>
                            <input 
                                className="dob-ma-input" 
                                type="text" 
                                value={mitarbeiter.dob} 
                                readOnly 
                            />
                        </div>
                        <div className="abteilung-ma-div">
                            <label className="abteilung-ma-label">Abteilung</label>
                            <input 
                                className="abteilung-ma-input" 
                                type="text" 
                                value={abteilung}  
                                onChange={(e) => setAbteilung(e.target.value)}
                            />
                        </div>
                        <div className="unternehmen-ma-div">
                            <label className="unternehmen-ma-label">Unternehmen</label>
                            <input 
                                className="unternehmen-ma-input" 
                                type="text" 
                                value={mitarbeiter.unternehmenID} 
                                readOnly 
                            />
                        </div>
                    </div>
                    <UpdateButton
                        mitarbeiterId={mitarbeiter.id}
                        typeOfMA={typeOfMitarbeiter}
                        abteilung={abteilung}
                        name={name}
                    />
                    <DeleteButton
                        mitarbeiterId={mitarbeiter.id}
                        typeOfMA={typeOfMitarbeiter}
                    />
                </div>
            )}
        </div>
    );
}

export default MaDetails;
