import { useParams } from 'react-router-dom';
import UpdateButton from './UpdateButton';
import Getone from "./Getone";
import DeleteButton from './DeleteButton';

const MaDetails = () => {
    const { id, typeOfMitarbeiter } = useParams();

    let url;
   

    if (typeOfMitarbeiter === "Mitarbeiter") {
        url = 'http://localhost:8080/api/v1/Mitarbeiter/';
    } else if (typeOfMitarbeiter === "MitarbeiterMarketing") {
        url = 'http://localhost:8080/api/v1/MitarbeiterMarketing/';
    }

    const { data: mitarbeiter, isPending } = Getone(url + id);

    return (
        <div>
            {isPending && <div>Loading...</div>}
            {!isPending && mitarbeiter && (
                <div className="ma-detais-div">
                    <h2 className="ma-detais-title">Details</h2>
                    <div className="daten-ma-div">
                        <div className="name-ma-div">
                            <label className="name-ma-label">Name</label>
                            <input className="name-ma-input" type="text" value={mitarbeiter.name}  />
                        </div>
                        <div className="dob-ma-div">
                            <label className="dob-ma-label">Date of Birth</label>
                            <input className="dob-ma-input" type="text" value={mitarbeiter.dob} readOnly />
                        </div>
                        <div className="abteilung-ma-div">
                            <label className="abteilung-ma-label">Abteilung</label>
                            <input className="abteilung-ma-input" type="text" value={mitarbeiter.abteilung}  />
                        </div>
                        <div className="unternehmen-ma-div">
                            <label className="unternehmen-ma-label">Unternehmen</label>
                            <input className="unternehmen-ma-input" type="text" value={mitarbeiter.unternehmenID} readOnly />
                        </div>
                    </div>
                    <UpdateButton
                        mitarbeiterId={mitarbeiter.id}
                        typeOfMA={mitarbeiter.typeOfMA}
                        abteilung={mitarbeiter.abteilung}
                    />
                    <DeleteButton
                        mitarbeiterId={mitarbeiter.id}
                        typeOfMA={mitarbeiter.typeOfMA}
                    />
                </div>
            )}
        </div>
    );
}

export default MaDetails;
