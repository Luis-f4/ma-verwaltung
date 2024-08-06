import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; 

const UpdateButton = ({ mitarbeiterId, typeOfMA, abteilung, name }) => {
    const [isPending, setIsPending] = useState(false);
    const{ typeOfMitarbeiter } = useParams();
    const navigate = useNavigate();


    const handleUpdate = () => {
        let url = '';

        console.log("Update Button neueabteilung: " + abteilung + "  mitarbeiterId: " + mitarbeiterId + " Type ofMa: " + typeOfMitarbeiter + "  neuer name: " +  name);
        
        
        if(typeOfMitarbeiter === 'Mitarbeiter'){
            url = `http://localhost:8080/api/v1/Mitarbeiter/${mitarbeiterId}?abteilung=${abteilung}&name=${name}`;
        } else if(typeOfMitarbeiter === 'MitarbeiterMarketing'){
            url = `http://localhost:8080/api/v1/MitarbeiterMarketing/${mitarbeiterId}?abteilung=${abteilung}&name=${name}`;
        }

        
        

        setIsPending(true);
        fetch(url, {
            method: 'PUT',
        }).then(() => {
            console.log(`${typeOfMA} aktualisiert`);
            setIsPending(false);
            navigate('/'); 
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
