import UpdateButton from './UpdateButton';
import Get from "./Get";
import { useParams } from 'react-router-dom';

const MaDetails = () => {
    const { id } = useParams();
    const {data: mitarbeiter, isPending} = Get('http://localhost:8080/api/v1/Mitarbeiter/' + id);
    
    return (
        <div>
            {isPending && <div>Loading...</div>}
            <div className="ma-detais-div">
                <h2>Details</h2>

                <div className="daten-ma-div">

                    <div className="name-ma-div">
                        <label>Name</label>
                        <input type="text" />
                    </div>

                    <div className="dob-ma-div">
                        <label>Date of Birth</label>
                        <input type="text" />
                    </div>

                    <div className="abteilung-ma-div">
                        <label>Abteilung</label>
                        <input type="text" />
                    </div>

                    <div className="unternehmen-ma-div">
                        <label>Unternehmen</label>
                        <input type="text" />
                    </div>

                </div>

                <UpdateButton   
                    mitarbeiterId={mitarbeiter?.id} 
                    typeOfMA={mitarbeiter?.typeOfMA} 
                    abteilung={mitarbeiter?.abteilung} 
                />
            </div>
        </div>
    );
}

export default MaDetails;
