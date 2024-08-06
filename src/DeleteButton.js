import { useNavigate, useParams } from 'react-router-dom'; 

import { useState } from 'react';

const DeleteButton = ({ mitarbeiterId, typeOfMA }) => {
    const navigate = useNavigate(); 
    const [isPending, setIsPending] = useState(false);
    const{ typeOfMitarbeiter } = useParams();

    const handleDelete = () => {
        setIsPending(true);

        let url = '';

        console.log("Delete Button. typeOfMA: " + typeOfMitarbeiter + "  mitarbeiterId: " + mitarbeiterId);

        if (typeOfMitarbeiter === "Mitarbeiter") {
            url = `http://localhost:8080/api/v1/Mitarbeiter/${mitarbeiterId}`;
        } else if (typeOfMitarbeiter === "MitarbeiterMarketing") {
            url = `http://localhost:8080/api/v1/MitarbeiterMarketing/${mitarbeiterId}`;
        }

        fetch(url, {
            method: 'DELETE',
        }).then(() => {
            console.log(`${typeOfMA} deleted`);
            setIsPending(false);
            navigate('/'); 
        }).catch((error) => {
            console.error(`Error deleting ${typeOfMA}:`, error);
            setIsPending(false);
        });
    }

    return (
        <button className='update-button' onClick={handleDelete} disabled={isPending}>
            {isPending ? 'Deleting...' : 'Delete'}
        </button>
    );
}

export default DeleteButton;
