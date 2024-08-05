import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const Delete = ({ mitarbeiterId, typeOfMA }) => {
    const history = useHistory();
    const [isPending, setIsPending] = useState(false);

    const handleDelete = () => {
        setIsPending(true);

        let url = '';
        if (typeOfMA === "Mitarbeiter") {
            url = `http://localhost:8080/api/v1/Mitarbeiter/${mitarbeiterId}`;
        } else if (typeOfMA === "MitarbeiterMarketing") {
            url = `http://localhost:8080/api/v1/MitarbeiterMarketing/${mitarbeiterId}`;
        }

        fetch(url, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" }
        }).then(() => {
            console.log(`${typeOfMA} deleted`);
            setIsPending(false);
            history.push('/');
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

export default Delete;
