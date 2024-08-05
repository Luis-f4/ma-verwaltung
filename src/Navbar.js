import logo from './assets/vf-logo.png'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
    <nav className="nav">
        <a href="/">
        <img className="navlogo" src={logo} alt="logo"></img>
        </a>
        <a href="/" className="site-title">
            Mitarbeiterverwaltung
        </a>
        <ul>
            <li className="active">
                <a href="/">Home</a>
            </li>
            <li className="active">
                <a href="/create">Neu</a>
            </li>
        </ul>
    </nav>
    )
}