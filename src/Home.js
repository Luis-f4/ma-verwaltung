import MaList from "./MaList";
import Get from "./Get";


const Home = () => {

    const { data: mitarbeiter, isPending} = Get('http://localhost:8080/api/v1/Mitarbeiter');
    console.log(mitarbeiter);
    
    return (
        <div className="Home-div">
            <div className="ueberschriften-Home">
                
                <div className="ueberschriften-Home-p-div ueberschriften-Home-p-name-div">
                <p>Name</p>
                </div>

                <div className="ueberschriften-Home-p-div ueberschriften-Home-p-alter-div">
                <p>Alter</p>
                </div>

                <div className="ueberschriften-Home-p-div ueberschriften-Home-p-abteilung-div">
                <p>Abteilung</p>
                </div>

                <div className="ueberschriften-Home-p-div ueberschriften-Home-p-imMarketing-div">
                <p>Im Marketing</p>
                </div>
            </div>
            {isPending && <div>Loading...</div>}
            {mitarbeiter && <MaList mitarbeiter={mitarbeiter} />}
        </div>
    );
}
 
export default Home;