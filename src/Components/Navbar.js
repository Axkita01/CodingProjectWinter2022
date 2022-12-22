export default function Navbar() {
    return <nav className = "nav">
        <a href = "/" className = "site-title">Writo</a>
        <ul>
            <li>
                <a href = "/explore">Explore</a>
            </li>
            <li>
                <a href = "/problems">Problems</a>
            </li>
        </ul>
    </nav>
}