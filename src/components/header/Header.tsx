import { Link } from "react-router-dom";
import './Header.css';

export const Header = () => {
    return (
        <header className="header">
                <div className="header__logo">
                    <img src="/path-to-logo.png" alt="Logo" className="logo"/>
                    <span className="logo__text">MyApp</span>
                </div>

                <div className="header__search">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search..."
                    />
                </div>

                <div className="header__profile">
                    <Link to="/profile" className="profile-button">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="profile-icon"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/>
                            <path d="M12 14c-4.41 0-8 1.79-8 4v2h16v-2c0-2.21-3.59-4-8-4z"/>
                        </svg>
                        <span className="profile-text">Profile</span>
                    </Link>
                </div>
        </header>
    );
};