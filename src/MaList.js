import { Link } from "react-router-dom";

const MaList = ({ mitarbeiter }) => {
    return ( 
        <div className="Ma-List">
            {mitarbeiter.map((mitarbeiterItem) => {
                let isMitarbeiterMarketing;
                let test;
                let MAtype;


                if(mitarbeiterItem.typeOfMitarbeiter === "Mitarbeiter"){
                    isMitarbeiterMarketing = "ist ein Mitarbeiter";
                    MAtype = "Mitarbeiter";
                    test = '';
                } else if(mitarbeiterItem.typeOfMitarbeiter === "MitarbeiterMarketing"){
                    isMitarbeiterMarketing = "ist im Marketing";
                    test = 'marketing-';

                    MAtype = "MitarbeiterMarketing";
                } else {
                    isMitarbeiterMarketing = "Error";
                }
               

                return (
                    <Link to={`/ma-details/${mitarbeiterItem.id}/${mitarbeiterItem.typeOfMitarbeiter}`} key={mitarbeiterItem.id}>
                        <div className="Ma-List-nameMa-div info-div-maList">
                            <p id="testtt" className="Ma-List-nameMa">{mitarbeiterItem.name}</p>
                        </div>
                        <div className="Ma-List-alterMa-div info-div-maList">
                            <p className="Ma-List-alterMa">{mitarbeiterItem.age}</p>
                        </div>
                        <div className="Ma-List-abteilungMa-div info-div-maList">
                            <p className="Ma-List-abteilungMa">{mitarbeiterItem.abteilung}</p>
                        </div>
                        <div className="Ma-List-istmarketing info-div-maList">
                            <p className="Ma-List-istmarketing">{isMitarbeiterMarketing}</p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

export default MaList;
