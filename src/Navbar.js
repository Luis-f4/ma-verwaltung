import logo from './assets/vf-logo.png'

export default function Navbar() {
    return (
    <nav className="nav">
        <img className="navlogo" src={logo} alt="logo"></img>
        <a href="/" className="site-title">
            Mitarbeiterverwaltung
        </a>
        <ul>
            <li className="active">
                <a href="Home">Home</a>
            </li>
            <li className="active">
                <a href="Neu">Neu</a>
            </li>
        </ul>
    </nav>
    )
}