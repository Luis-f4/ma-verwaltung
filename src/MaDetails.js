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
                            <label>Name</label>
                            <input type="text" value={mitarbeiter.name} readOnly />
                        </div>
                        <div className="dob-ma-div">
                            <label>Date of Birth</label>
                            <input type="text" value={mitarbeiter.dob} readOnly />
                        </div>
                        <div className="abteilung-ma-div">
                            <label>Abteilung</label>
                            <input type="text" value={mitarbeiter.abteilung} readOnly />
                        </div>
                        <div className="unternehmen-ma-div">
                            <label>Unternehmen</label>
                            <input type="text" value={mitarbeiter.unternehmenID} readOnly />
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
