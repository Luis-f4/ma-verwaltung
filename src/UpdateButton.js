import { useState } from 'react';

const UpdateButton = ({ mitarbeiterId, typeOfMA, abteilung }) => {
    const [isPending, setIsPending] = useState(false);

    const handleUpdate = () => {
        let url = '';
        if(typeOfMA === 'Mitarbeiter'){
            url = `http://localhost:8080/api/v1/Mitarbeiter/${mitarbeiterId}?abteilung=${abteilung}`;
        } else if(typeOfMA === 'MitarbeiterMarketing'){
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
        <button onClick={handleUpdate} disabled={isPending}>
            {isPending ? 'Aktualisieren...' : 'Aktualisieren'}
        </button>
    );
}

export default UpdateButton;
