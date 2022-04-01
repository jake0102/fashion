import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'

function TNav() {
    return (
        <div className="TNav">
            <div className="TNav-search">
                <FontAwesomeIcon icon={faQuestion} style={{fontSize: '20px'}}/>
                <input type="text" placeholder="Search..."/>
            </div>

            <div className="TNav-nav">
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