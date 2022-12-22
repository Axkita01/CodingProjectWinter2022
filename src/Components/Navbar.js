import '../Styles/Navbar.css'

export default function Navbar() {
    return <nav className = "nav">
        <a href = "/" className = "site-title">Writo</a>
        <ul>
            <li>
                <a href = "/explore">Explore</a>
            </li>
            <li>
                <a href = "/problem">Problems</a>
            </li>
        </ul>
    </nav>
}