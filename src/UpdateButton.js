import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; 

const UpdateButton = ({ mitarbeiterId, typeOfMA, abteilung }) => {
    const [isPending, setIsPending] = useState(false);
    const{ typeOfMitarbeiter } = useParams();


    const handleUpdate = () => {
        let url = '';

        console.log("Update Button neueabteilung: " + abteilung + "  mitarbeiterId: " + mitarbeiterId + " Type ofMa: " + typeOfMitarbeiter);
        
        
        if(typeOfMitarbeiter === 'Mitarbeiter'){
            url = `http://localhost:8080/api/v1/Mitarbeiter/${mitarbeiterId}?abteilung=${abteilung}`;
        } else if(typeOfMitarbeiter === 'MitarbeiterMarketing'){
            url = `http://localhost:8080/api/v1/MitarbeiterMarketing/${mitarbeiterId}?abteilung=${abteilung}`;
        }

        

        setIsPending(true);
        fetch(url, {
            method: 'PUT',
        }).then(() => {
            console.log(`${typeOfMA} aktualisiert`);
            setIsPending(false);
        }).catch((error) => {
            console.error(`Fehler beim Aktualisieren von ${typeOfMA}:`, error);
            setIsPending(false);
        });
    };

    return (
        <button className="UpdateButton" onClick={handleUpdate} disabled={isPending}>
            {isPending ? 'Aktualisieren...' : 'Aktualisieren'}
        </button>
    );
}

export default UpdateButton;
