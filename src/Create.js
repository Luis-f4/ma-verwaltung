import React, { useState } from 'react';

const Create = () => {
    const [typeMitarbeiter, setTypeMitarbeiter] = useState(null);
    const [isPending, setIsPending] = useState(false);

    return (
        <div>
            {isPending && <div>Loading...</div>}
            <div className="">
                <h2>Registriere einen neuen Mitarbeiter</h2>

                <div className="">
                    <div className="">
                        <label>Name</label>
                        <input type="text" />
                    </div>

                    <div className="">
                        <label>Date of Birth</label>
                        <input type="text" />
                    </div>

                    <div className="">
                        <label>Abteilung</label>
                        <input type="text" />
                    </div>

                    <div className="">
                        <label>Unternehmen</label>
                        <input type="text" />
                    </div>

                    <select
                        value={typeMitarbeiter}
                        onChange={(e) => setTypeMitarbeiter(e.target.value)}>
                        <option value="Mitarbeiter">Mitarbeiter</option>
                        <option value="MitarbeiterMarketing">MitarbeiterMarketing</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Create;
