import MaList from "./MaList";
import Get from "./Get";

const Home = () => {

    const { data: mitarbeiter, isPending} = Get('http://localhost:8080/api/v1/Mitarbeiter');
    
    return (
        <div className="Home-div">
            <div className="ueberschriften-Home">
                <p>Name</p>
                <p>Alter</p>
                <p>Abteilung</p>
                <p>Im Marketing</p>
            </div>
            {isPending && <div>Loading...</div>}
            {mitarbeiter && <MaList mitarbeiter={mitarbeiter} />}
        </div>
    );
}
 
export default Home;