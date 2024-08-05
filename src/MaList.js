const MaList = ({ mitarbeiter }) => {
    return ( 
        <div className="Ma-List">
            {mitarbeiter.map((mitarbeiterItem) => {
                let isMitarbeiterMarketing;

                if(mitarbeiterItem.typeOfMitarbeiter === "Mitarbeiter"){
                    isMitarbeiterMarketing = "ist ein Mitarbeiter";
                } else if(mitarbeiterItem.typeOfMitarbeiter === "MitarbeiterMarketing"){
                    isMitarbeiterMarketing = "ist im Marketing";
                } else {
                    isMitarbeiterMarketing = "Error";
                }

                return (
                    <Link to={`/Ma/${mitarbeiterItem.id}`} key={mitarbeiterItem.id}>
                        <p className="Ma-List-nameMa">{mitarbeiterItem.name}</p>
                        <p className="Ma-List-alterMa">{mitarbeiterItem.age}</p>
                        <p className="Ma-List-abteilungMa">{mitarbeiterItem.abteilung}</p>
                        <p className="Ma-List-istmarketing">{isMitarbeiterMarketing}</p>
                    </Link>
                );
            })}
        </div>
    );
}

export default MaList;
