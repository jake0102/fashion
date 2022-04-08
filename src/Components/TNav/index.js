import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion, faBars } from '@fortawesome/free-solid-svg-icons'

function TNav() {
    return (
        <div className="TNav">
            <div className="TNav-container-logo">
                Y-Fas
            </div>

            <div className="TNav-search">
                <FontAwesomeIcon icon={faQuestion} />
                <input type="text" placeholder="Search..."/>
            </div>

            <div className="TNav-nav">
                <div className="TNav-nav-bar">
                    <FontAwesomeIcon icon={faBars} style={{fontSize: '22px', marginRight: '1rem', color: 'black', cursor: 'pointer', fontWeight: '300'}} />
                </div>

                <div className="TNav-nav-item">
                    <Link to="/">Products</Link>
                </div>

                <div className="TNav-nav-item">
                    <Link to="/blog">Blog</Link>
                </div>

                <div className="TNav-nav-item">
                    <Link to="/contact">Contact</Link>
                </div>

                <div className="TNav-nav-item">
                    <Link to="/about">About</Link>
                </div>

                <div className="TNav-nav-item">
                    <Link to="/register">Register</Link>
                </div>
            </div>
        </div>
    )
}

export default TNav