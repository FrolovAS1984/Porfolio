import '../../styles/Header.css'
import {useState} from "react";

function Header () {

    const [selectedLink, setSelectedLink] = useState('Home');

    const handleLinkClick = (link) => {

        setSelectedLink(link);
    };
    return (
        <nav className="navbar">
            <a
                href="/"
                onClick={() => handleLinkClick('Home')}
                className={selectedLink === 'Home' ? 'clicked' : ''}
            >
                Home
            </a>
            <a
                href="#"
                onClick={() => handleLinkClick('About')}
                className={selectedLink === 'About' ? 'clicked' : ''}
            >

                About
            </a>
            <a
                href="#"
                onClick={() => handleLinkClick('Projects')}
                className={selectedLink === 'Projects' ? 'clicked' : ''}
            >
                Projects
            </a>
        </nav>
    )
}

export default Header;