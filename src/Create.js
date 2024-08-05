import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importiere useNavigate statt useHistory

const Create = () => {
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [abteilung, setAbteilung] = useState('');
    const [unternehmenID, setUnternehmenID] = useState('');
    const [typeMitarbeiter, setTypeMitarbeiter] = useState('Mitarbeiter');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate(); // Verwende useNavigate statt useHistory

    const handleSubmit = (e) => {
        e.preventDefault();
        const maData = { name, abteilung, dob, unternehmenID, typeMitarbeiter };

        setIsPending(true);

        let url;
        if (typeMitarbeiter === "Mitarbeiter") {
            url = "http://localhost:8080/api/v1/Mitarbeiter";
        } else {
            url = "http://localhost:8080/api/v1/MitarbeiterMarketing";
        }

        fetch(url, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(maData)
        }).then(() => {
            console.log('new Mitarbeiter added');
            setIsPending(false);
            navigate('/'); // Verwende navigate statt history.push
        })
    }

    return (
        <div className="">
            <h2>Registriere einen neuen Mitarbeiter</h2>
            <form onSubmit={handleSubmit}>
                <div className="">
                    <div className="">
                        <label>Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="">
                        <label>Date of Birth</label>
                        <input type="text" value={dob} onChange={(e) => setDob(e.target.value)} />
                    </div>

                    <div className="">
                        <label>Abteilung</label>
                        <input type="text" value={abteilung} onChange={(e) => setAbteilung(e.target.value)} />
                    </div>

                    <div className="">
                        <label>Unternehmen</label>
                        <input type="text" value={unternehmenID} onChange={(e) => setUnternehmenID(e.target.value)} />
                    </div>

                    <select
                        value={typeMitarbeiter}
                        onChange={(e) => setTypeMitarbeiter(e.target.value)}>
                        <option value="Mitarbeiter">Mitarbeiter</option>
                        <option value="MitarbeiterMarketing">MitarbeiterMarketing</option>
                    </select>

                    {!isPending && <button>Create</button>}
                    {isPending && <button disabled>Creating...</button>}
                </div>
            </form>
        </div>
    );
}

export default Create;
